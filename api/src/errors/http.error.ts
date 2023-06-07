import CustomError from './customError'

export class NotFoundError extends CustomError {
  statusCode = 404
  reason = 'Not found'

  constructor(reason: string) {
    super(reason)

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}
