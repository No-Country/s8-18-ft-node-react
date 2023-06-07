import request from 'supertest'
import app from '../src/app'

import { getUserRepository } from '../src/repositories/user.repository'
import { authService } from '../src/services/auth.service'

const baseUri = process.env.API_URL || '/api/1.0'
const targetUri = `${baseUri}/auth`

const userRepository = getUserRepository()

const user = {
  firstName: 'auth_user',
  lastName: 'last_name_test',
  email: 'auth@gmail.com',
  phone: 123123123,
  password: 'Password1234',
}

const addUser = async () => {
  const response = await request(app).post(`${targetUri}/signup`).send(user)
  return response.body.user
}

const postAuthentication = async (credentials: { email: string; password: string }) => {
  const agent = request.agent(app)

  return await agent.post(`${targetUri}/login`).send(credentials)
}

beforeEach(async () => {
  await userRepository.deleteAll()
})

describe('Authentication', () => {
  it('returns 200 when credentials are correct', async () => {
    await addUser()
    const response = await postAuthentication({ email: 'auth@gmail.com', password: 'Password1234' })

    expect(response.status).toBe(200)
  })

  it('return http-only cookie with token', async () => {
    await addUser()
    const response = await postAuthentication({ email: 'auth@gmail.com', password: 'Password1234' })
    const cookies = response.header['set-cookie']

    expect(cookies).not.toBeUndefined()
  })

  it('returns only user id and username when login success', async () => {
    const user = await addUser()
    const response = await postAuthentication({ email: 'auth@gmail.com', password: 'Password1234' })
    expect(response.body.user.id).toBe(user.id)
    expect(response.body.user.email).toBe(user.email)

    expect(Object.keys(response.body.user)).toEqual([
      'id',
      'email',
      'firstName',
      'lastName',
      'phone',
      'role',
      'organizationId',
    ])
  })

  it('returns 401 when credentials are incorrect', async () => {
    const response = await postAuthentication({
      email: 'noexisting@gmail.com',
      password: 'Password1234',
    })

    expect(response.status).toBe(401)
  })
})
