export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: number
  password: string
}

export interface AuthUser {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: number
}

export interface UserCreate {
  firstName: string
  lastName: string
  email: string
  phone: number
  password: string
}

export interface UserSearch extends Partial<User> {}
