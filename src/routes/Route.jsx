import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../share/Login";
import Register from "../share/Register";

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
    ],
  },
]);

export default Route;
