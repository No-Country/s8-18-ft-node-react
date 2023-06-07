import {useState,} from 'react'
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Navigate, Outlet } from 'react-router-dom'

export type PropsProtected = {
  children: React.ReactNode
}

export const ProtectedRoute = ():JSX.Element => {
 
  const user = useSelector((state:RootState)=>state.user)
  
  return (
    <>
    {user?<Outlet />:<Navigate to={'/'}/> }
    </>
    )
}
