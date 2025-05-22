import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import AddTask from "../Pages/AddTask";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import PostedTasks from "../Pages/PostedTasks";
import UpdatedTask from "../Pages/UpdatedTask";
import MyProfile from "../Components/MyProfile";
import BrowseTasks from "../Pages/BrowseTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
   children: [
    {
    path : "/",
    element: <Home></Home>,
   },
   {
    path: "/add-task",
    element: <PrivateRoute>
        <AddTask></AddTask>
    </PrivateRoute>,
   },
   {
    path:"/my-posted-tasks",
    loader: () => fetch("http://localhost:3000/tasks"),
    element: <PrivateRoute>
        <PostedTasks></PostedTasks>
    </PrivateRoute>,
   },
   {
    path:"/update-task/:id",
    loader: () => fetch("http://localhost:3000/tasks"),
    element: <PrivateRoute>
        <UpdatedTask></UpdatedTask>
    </PrivateRoute>,
   },
   {
    path: "/profile",
    element: <PrivateRoute>
        <MyProfile></MyProfile>
    </PrivateRoute>,
   },
   {
    path: "/browse-tasks",
    loader: () => fetch("http://localhost:3000/tasks"),
    element: <BrowseTasks></BrowseTasks>,
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
