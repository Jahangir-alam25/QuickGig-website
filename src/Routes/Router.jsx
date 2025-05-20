import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import AddTask from "../Pages/AddTask";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
   children: [
    {
    path : "/",
    element: <h2>Home</h2>,
   },
   {
    path: "/add-task",
    element: <PrivateRoute>
        <AddTask></AddTask>
    </PrivateRoute>,
   }
]
    
    
  },
   {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      }
    
    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  }
]);
