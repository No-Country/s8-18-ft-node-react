import CustomError from './customError'

export class InvalidCredentialsError extends CustomError {
  statusCode = 401
  reason = 'Email or password are invalid'

  constructor() {
    super('Email or password are invalid')

    Object.setPrototypeOf(this, InvalidCredentialsError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}
