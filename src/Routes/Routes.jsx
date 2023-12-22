import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Components/Pages/Main";
import SignUp from "../Components/Pages/SignUp/SignUp";
import LogIn from "../Components/Pages/Login/Login";
import DashboardLayout from "../Components/Pages/DashBoard/DashboardLayout";
import CreateTask from "../Components/Pages/CreateTask/CreateTask";
import AllTask from "../Components/Pages/AllTask/AllTask";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        }
      ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
            },
            {
                path: "allTask",
                element: <PrivateRoute><AllTask></AllTask></PrivateRoute>
            }
        ]
    }
  ]);

