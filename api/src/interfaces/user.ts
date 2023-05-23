export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  phone_number: number
}

export interface UserCreate {
  first_name: string
  last_name: string
  email: string
  phone_number: number
  password: string
}
