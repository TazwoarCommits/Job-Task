import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "../Layouts/MainLayout";
import MyTasks from "../Pages/MyTasks";
import Home from "../Pages/Home";

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
            element : <MyTasks></MyTasks>
        }
      ]
    },
    {
      path : "/login",
      element : <Login></Login>
    },
  ]);

export default Routes;