import request from 'supertest'
import app from '../src/app'
import { getUserRepository } from '../src/repositories/user.repository'

const baseUri = process.env.API_URL || '/api/1.0'
const targetUri = `${baseUri}/auth/signup`
const userRepository = getUserRepository()

beforeEach(async () => {
  return await userRepository.deleteAll()
})

describe('User registration', () => {
  const postValidUser = async () => {
    return await request(app).post(targetUri).send({
      firstName: 'name_test',
      lastName: 'last_name_test',
      email: 'test@gmail.com',
      phone: 123123123,
      password: 'Password1234',
    })
  }

  const getUsers = async () => {
    return await userRepository.findAll()
  }

  it('returns 200 OK when signup request is valid', async () => {
    const response = await postValidUser()
    expect(response.status).toBe(200)
  })

  it('returns success message when signup request is valid', async () => {
    const response = await postValidUser()
    expect(response.body.message).toBe('User registered')
  })

  it('saves the user to database', async () => {
    await postValidUser()
    const userList = await getUsers()
    expect(userList.length).toBe(1)
  })

  it('saves the first_name, last_name, email and phone number correctly', async () => {
    await postValidUser()
    const userList = await getUsers()
    const savedUser = userList[0]
    expect(savedUser.first_name).toBe('name_test')
    expect(savedUser.last_name).toBe('last_name_test')
    expect(savedUser.email).toBe('test@gmail.com')
    expect(savedUser.phone_number).toBe(123123123)
  })

  it('hashes the password in database', async () => {
    await postValidUser()
    const userList = await getUsers()
    const savedUser = userList[0]
    expect(savedUser.password).not.toBe('Password1234')
  })

  it('returns 400 when first_name is null with message firstName is required', async () => {
    const response = await request(app).post(targetUri).send({
      lastName: 'last_name_test',
      email: 'test@gmail.com',
      phoneNumber: 123123123,
      password: 'Password1234',
    })

    expect(response.status).toBe(400)
    expect(response.body.validationErrors[0].message).toBe('firstName is required')
  })

  it('returns validationErrors in body when a validation error occurs', async () => {
    const response = await request(app).post(targetUri).send({})

    expect(response.body.validationErrors).not.toBeUndefined()
  })
})
