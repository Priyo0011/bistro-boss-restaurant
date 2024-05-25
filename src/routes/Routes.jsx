import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItems from "../pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

    ],
  },
  {
    path: 'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
        // admin
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>,
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ]
  }
]);
