import { Request, Response, NextFunction } from 'express'

import { createOrganizationService } from '../services/organization.service'

import { NotFoundError } from '../errors/http.error'
import { AuthUser } from '../interfaces'

const organizationService = createOrganizationService()

export async function organizationMiddleware(req: Request, res: Response, next: NextFunction) {
  const user = req.user as AuthUser
  const { id: organizationId } = req.params
  const organizationExists = await organizationService.exists(organizationId)

  if (!organizationExists || !user) return next(new NotFoundError('Organization Not Found'))

  const role = await organizationService.getRole(organizationId, user.id)

  if (!role) return next(new NotFoundError('Organization Not Found'))

  req.user = { ...req.user, role: role.role }

  return next()
}
