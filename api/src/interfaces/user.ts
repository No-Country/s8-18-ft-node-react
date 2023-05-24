export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  phone_number: number
}

export interface UserCreate {
  firstName: string
  lastName: string
  email: string
  phone: number
  password: string
}
