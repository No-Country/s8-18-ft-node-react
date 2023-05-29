import { ZodError } from 'zod'
import CustomError from './customError'

export class ValidationError extends CustomError {
  statusCode = 400
  reason = 'Bad Request'
  validationError: ZodError

  constructor(validationError: ZodError) {
    super('Bad Request')

    this.validationError = validationError

    Object.setPrototypeOf(this, ValidationError.prototype)
  }

  serializeErrors() {
    return this.validationError.issues.map((error) => ({
      field: `${error.path}`,
      message: error.message,
    }))
  }
}
