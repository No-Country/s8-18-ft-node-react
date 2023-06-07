import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/register/Register";
import {ProtectedRoute} from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element:<Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element:<ProtectedRoute />,
    children:[
      {
        path: "auth",
        element:<Home />,
      }
    ]
  }
])