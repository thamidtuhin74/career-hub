import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  Await,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import {categoryLoader } from './Loader/loadingData';
import JobDetails from './Component/JobDetails/JobDetails';
// import {categoryLoader} from './Loader/loadingData';


export const routerContext = createContext([]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        
        
        loader: categoryLoader,
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
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/public/jobs.json')
      },
      {
        path: '/job_details/:jobID',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch(`/public/job${params.jobID}.json`)
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
