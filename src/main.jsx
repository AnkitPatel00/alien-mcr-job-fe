import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import JobPostings from './Pages/JobPostings.jsx'
import PostAJob from './Pages/PostAJob.jsx'
import JobPostDetails from './Pages/JobPostDetails.jsx'
import JobsContextProvider from './Context/JobsContext.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        path: "/",
        element:<JobPostings />
      },
      {
        path: "/postjobdetails/:jobId",
        element:<JobPostDetails />
      },
      {
        path: "/postjob",
        element:<PostAJob />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobsContextProvider>
 <RouterProvider router={router} />
    </JobsContextProvider>
   
  </StrictMode>,
)
