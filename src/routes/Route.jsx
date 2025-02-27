import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';

import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

const Route =createBrowserRouter([
    {
     path:"/",
     element:<Root></Root>,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {

        }
     ]
    }
])


export default Route;