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

export class UserNotFound extends CustomError {
  statusCode = 404
  reason = 'User not found'

  constructor() {
    super('User not found')

    Object.setPrototypeOf(this, UserNotFound.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}

export class NotAuthorized extends CustomError {
  statusCode = 403
  reason = 'Insufficient Permissions'

  constructor() {
    super('Insufficient Permissions')

    Object.setPrototypeOf(this, NotAuthorized.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}
