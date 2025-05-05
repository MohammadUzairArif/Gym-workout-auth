import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        { path: '/', element: <Home/> },
        { path: 'about', element: <About/> },
        
      ]
    }

    
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App