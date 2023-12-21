import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Components/Pages/Main";
import SignUp from "../Components/Pages/SignUp/SignUp";

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
        }
      ]
    },
  ]);

