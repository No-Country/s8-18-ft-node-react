import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodError } from 'zod'
import { ValidationError } from '../errors/validation.error'

export const validate =
  (extractFrom: 'body' | 'params' | 'query', schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let requestTarget: any

      switch (extractFrom) {
        case 'params':
          requestTarget = req.params
          break
        case 'query':
          requestTarget = req.query
          break
        default:
          requestTarget = req.body
      }

      await schema.parseAsync(requestTarget)
      return next()
    } catch (error) {
      const e = error as ZodError
      return next(new ValidationError(e))
    }
  }
