import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '../component/Routes/Routes'
import Authprovider from '../component/Providers/Authprovider'
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <Authprovider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto bg-slate-100">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>,
)
