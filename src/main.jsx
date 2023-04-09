import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
      ,
      {
        path: '/statistic',
        element: <Blog></Blog>
      },
      {
        path: '/applied_jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '*',
        element: <div>404 Page not Found!</div>
      }


    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
