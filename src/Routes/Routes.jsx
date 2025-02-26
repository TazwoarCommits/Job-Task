import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "../Layouts/MainLayout";

import Home from "../Pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import EditTask from "../Pages/EditTask";
import MyTasks from "../Pages/MyTasks";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
          path : "/" , 
          element : <Home></Home>
        },
        {
            path : "/my-task",
            element : <PrivateRoutes><MyTasks></MyTasks></PrivateRoutes>
        },
        {
            path : "/edit-task/:id",
            element : <PrivateRoutes><EditTask></EditTask></PrivateRoutes>
        },
      ]
    },
    {
      path : "/login",
      element : <Login></Login>
    },
  ]);

export default Routes;