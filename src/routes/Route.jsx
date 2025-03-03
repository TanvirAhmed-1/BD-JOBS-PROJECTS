import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../share/Login";
import Register from "../share/Register";
import ApplyJob from "../components/ApplyJob";
import MyApply from "../components/MyApply";
import AddJob from "../components/AddJob";
import PrivateRoute from './PrivateRoute';
import JobDetails from "../components/JobDetails";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path:"addJobs",
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:"/apply/:id",
        element:<PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>,
      },
      {
        path:"myApplication",
        element:<PrivateRoute><MyApply></MyApply></PrivateRoute>
      },
      {
        path:"/jobDetails/:id",
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      }
    ],
  },
]);

export default Route;
