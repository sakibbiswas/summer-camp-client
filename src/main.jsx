import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '../component/Routes/Routes'
import Authprovider from '../component/Providers/Authprovider'
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <Authprovider>
        <div className="max-w-screen-xl mx-auto ">
          <RouterProvider router={router} />
        </div>
      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>,
)
