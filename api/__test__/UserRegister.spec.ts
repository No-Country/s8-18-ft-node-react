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
  it('returns 200 OK when signup request is valid', (done) => {
    request(app)
      .post(targetUri)
      .send({
        first_name: 'name_test',
        last_name: 'last_name_test',
        email: 'test@gmail.com',
        phone_number: 123123123,
        password: 'Password1234',
      })
      .expect(200, done)
  })

  it('returns success message when signup request is valid', (done) => {
    request(app)
      .post(targetUri)
      .send({
        first_name: 'name_test',
        last_name: 'last_name_test',
        email: 'test@gmail.com',
        phone_number: 123123123,
        password: 'Password1234',
      })
      .then((res) => {
        expect(res.body.message).toBe('User registered')
        done()
      })
  })

  it('saves the user to database', (done) => {
    request(app)
      .post(targetUri)
      .send({
        first_name: 'name_test',
        last_name: 'last_name_test',
        email: 'test@gmail.com',
        phone_number: 123123123,
        password: 'Password1234',
      })
      .then(() => {
        userRepository.findAll().then((userList) => {
          expect(userList.length).toBe(1)
          done()
        })
      })
  })

  it('saves the first_name, last_name, email and phone number correctly', (done) => {
    request(app)
      .post(targetUri)
      .send({
        first_name: 'name_test',
        last_name: 'last_name_test',
        email: 'test@gmail.com',
        phone_number: 123123123,
        password: 'Password1234',
      })
      .then(() => {
        userRepository.findAll().then((userList) => {
          const savedUser = userList[0]
          expect(savedUser.first_name).toBe('name_test')
          expect(savedUser.last_name).toBe('last_name_test')
          expect(savedUser.email).toBe('test@gmail.com')
          expect(savedUser.phone_number).toBe(123123123)
          done()
        })
      })
  })
})
