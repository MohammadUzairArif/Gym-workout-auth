import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'

import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        { path: '/', element: <Home/> },
        { path: 'login', element: <Login/> },
        {path: 'signup', element: <Signup/> }
        
      ]
    }

    
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App