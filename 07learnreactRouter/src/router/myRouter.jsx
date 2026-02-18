import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'


function myRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Home,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: 'about',
          Component: About
        },
        {
          path: 'login',
          Component: Login
        }
      ]
    }
  ])
  return router
}

export default myRouter
