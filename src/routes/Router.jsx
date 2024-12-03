import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/Home";
import AddSchedule from "../components/AddSchedule";
import AllSchedule from "../components/AllSchedule";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path:'/addSchedule',
        element:<AddSchedule></AddSchedule>
      },
      {
        path:'/allSchedule',
        element:<AllSchedule></AllSchedule>,
        loader:()=>fetch('http://localhost:5000/schedule')
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }
    ],
  },
]);

export default Router;
