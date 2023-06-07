import axios from "axios"
import { UserInfo } from "../interfaces"
const baseUrl = "http://localhost:3000/api/1.0/"

export type LoginType = (email:string, password:string)=> boolean

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${baseUrl}auth/login`, { email, password })
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
    return (error)
  }
}
export const signup = async (newUser: UserInfo ) => {
  const res = await axios.post(`${baseUrl}auth/signup`, newUser)
  console.log(res.data)
  return res.data
}
export const logout = async () => {
  const res = await axios.get(`${baseUrl}auth/logout`)
  console.log(res.data)
  return res.data
}
