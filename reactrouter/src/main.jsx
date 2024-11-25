import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './layout';
import Home from '../components/home/Home';
import About from '../components/About/About';
import Contact from '../components/contact/ContactUs';
import User from '../components/User/User';
import GitHub from '../components/Github/Github';


const router = createBrowserRouter([
  {
    path:'/',
    element : <Layout></Layout>,
    children:[
      {
        path : "",
        element:<Home></Home>
      },
      {
        path :"about",
        element:<About></About>
      },
      {
        path :'contact-us',
        element:<Contact></Contact>
      },
      {
        path :'user/:id',
        element:<User></User>
      },
      {
        path :'github-counts',
        element:<GitHub></GitHub>
        
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
