import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Components/Pages/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

