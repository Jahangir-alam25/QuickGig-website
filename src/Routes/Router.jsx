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
import TaskDetails from "../Pages/TaskDetails";
import Loading from "../Pages/Loading";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome";
import AboutUs from "../Pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },


      {
        path: "/profile",
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>,
      },
      {
        path: "/browse-tasks",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://a10-freelance-task-marketplace-server-ph.vercel.app/tasks"),
        element: <BrowseTasks></BrowseTasks>,
      },
     {
        path: "task-details/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) => fetch(`https://a10-freelance-task-marketplace-server-ph.vercel.app/tasks/${params.id}`),
        element: <PrivateRoute>
          <TaskDetails></TaskDetails>
        </PrivateRoute>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
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
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute>
          <DashboardHome></DashboardHome>
        </PrivateRoute>,
      },
      {
        path: "add-task",
        element: <PrivateRoute>
          <AddTask></AddTask>
        </PrivateRoute>,
      },
      {
        path: "/dashboard/my-posted-tasks",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://a10-freelance-task-marketplace-server-ph.vercel.app/tasks"),
        element: <PrivateRoute>
          <PostedTasks></PostedTasks>
        </PrivateRoute>,
      },
      {
        path: "/dashboard/update-task/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) => fetch(`https://a10-freelance-task-marketplace-server-ph.vercel.app/tasks/${params.id}`),
        element: <PrivateRoute>
          <UpdatedTask></UpdatedTask>
        </PrivateRoute>,
      },
       
    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  }
]);
