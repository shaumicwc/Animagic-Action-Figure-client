// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
)
