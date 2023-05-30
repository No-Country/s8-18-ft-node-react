import request from 'supertest'
import app from '../src/app'
import { getUserRepository } from '../src/repositories/user.repository'
import { UserCreate } from '../src/interfaces'
import { getOrganizationRepository } from '../src/repositories/organization.repository'

const baseUri = process.env.API_URL || '/api/1.0'
const targetUri = `${baseUri}/auth/signup`
const userRepository = getUserRepository()
const organizationRepository = getOrganizationRepository()

// beforeAll(async () => {
//   await db.initDB()
// })

beforeEach(async () => {
  await organizationRepository.deleteAll()
  await userRepository.deleteAll()
})

const validUser = {
  firstName: 'name_test',
  lastName: 'last_name_test',
  email: 'test@gmail.com',
  phone: 123123123,
  password: 'Password1234',
}

describe('User registration', () => {
  const postValidUser = async () => {
    return await request(app).post(targetUri).send(validUser)
  }

  const getUsers = async () => {
    return await userRepository.findAll()
  }

  const getUserOrganization = async (ownerId: string) => {
    return await organizationRepository.findByOwner(ownerId)
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
    expect(savedUser.firstName).toBe('name_test')
    expect(savedUser.lastName).toBe('last_name_test')
    expect(savedUser.email).toBe('test@gmail.com')
    expect(savedUser.phone).toBe(123123123)
  })

  it('hashes the password in database', async () => {
    await postValidUser()
    const userList = await getUsers()
    const savedUser = userList[0]
    expect(savedUser.password).not.toBe('Password1234')
  })

  // TODO: add autorization fields
  it('returns only id and email', async () => {
    const response = await postValidUser()
    expect(response.body.user.id).not.toBeUndefined()
    expect(response.body.user.email).not.toBeUndefined()

    expect(Object.keys(response.body.user)).toEqual(['id', 'email'])
  })

  // TODO: move this test to organization.spec
  it('create an organization with user as superadmin when user is created ', async () => {
    const response = await postValidUser()
    const user = response.body.user
    expect(user).not.toBeUndefined()
    const organization = await getUserOrganization(user.id)

    expect(organization).not.toBeUndefined()
    expect(organization?.owner_id).toBe(user.id)
    expect(organization?.organizationRoles[0].role).toBe('SUPERADMIN')
  })

  it('returns validationErrors in body when a validation error occurs', async () => {
    const response = await request(app).post(targetUri).send({})

    expect(response.body.errors).not.toBeUndefined()
  })

  it('returns 400 when password is shorter than 8 characters with Password should be 8 characters at least', async () => {
    const response = await request(app).post(targetUri).send({
      firstName: 'first_name_test',
      lastName: 'last_name_test',
      email: 'test@gmail.com',
      phone: 123123123,
      password: 'Passw',
    })

    expect(response.status).toBe(400)
    expect(response.body.errors[0].message).toBe('Password should be 8 characters at least')
  })

  it('returns 400 when email is not valid with message Email must be valid', async () => {
    const response = await request(app).post(targetUri).send({
      firstName: 'first_name_test',
      lastName: 'last_name_test',
      email: 'testsdasd',
      phone: 123123123,
      password: 'Password1234',
    })

    expect(response.status).toBe(400)
    expect(response.body.errors[0].message).toBe('Email must be valid')
  })

  it('returns 400 when email is already in use with message Email is already in use', async () => {
    await userRepository.create({
      firstName: 'first_name_test',
      lastName: 'last_name_test',
      email: 'test@gmail.com',
      phone: 123123123,
      password: 'Password1234',
    })
    const response = await postValidUser()

    expect(response.status).toBe(400)
    expect(response.body.errors[0].message).toBe('Email is already in use')
  })

  it.each([
    ['firstName', 'firstName is required'],
    ['lastName', 'lastName is required'],
    ['email', 'Email is required'],
    ['password', 'Password is required'],
  ])('when %s is not given %s show as error', async (field, expectedErrorMessage) => {
    const user: Partial<UserCreate> = {
      firstName: 'first_name_test',
      lastName: 'last_name_test',
      email: 'test@gmail.com',
      phone: 123123123,
      password: 'Password1234',
    }

    user[field as keyof UserCreate] = undefined
    const response = await request(app).post(targetUri).send(user)

    expect(response.status).toBe(400)
    expect(response.body.errors[0].message).toBe(expectedErrorMessage)
  })
})
