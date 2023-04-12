import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJob from './Components/AppliedJob.jsx/AppliedJob';
import Blog from './Components/Blog/Blog';

import JobCatagories from './Components/JobCatagoriesList/JobCatagories';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import FeaturesJob from './Components/FeaturesJob/FeaturesJob';
import JobDetails from './Components/JobDetails/JobDetails';
import AppliedJobDetails from './Components/AppliedJobDetails/AppliedJobDetails';
const router = createBrowserRouter([
  {
    'path': '/',
    "element":<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    "children":
      [
        {
          path:'/',
          element:<JobCatagories></JobCatagories>,
          loader:()=>fetch('/jobCatagories.json'),
          
          
        },
        {
          path:'JobDetails/:JobDetailsID',
          element:<JobDetails></JobDetails>,
          // loader:({params})=>console.log(params.JobDetailsID),
          loader:({params})=>fetch('/featuresjJob.json')
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/appliedJob',
          element:<AppliedJob></AppliedJob>,
          loader:({params})=>fetch('/featuresjJob.json')
        },{
          path:'/appliedJob/:JobDetailsID',
          element:<AppliedJobDetails></AppliedJobDetails>,
          loader:({params})=>fetch('/featuresjJob.json')
        },

        {
          path:'/blog',
          element:<Blog></Blog>
        },

      ],
      

  },

  {
    path:'/appliedJob',
    element:<AppliedJob></AppliedJob>
  },
  {
    path:'/blog',
    element:<Blog></Blog>
  }



]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
