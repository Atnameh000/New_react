import { Outlet, RouterProvider, createBrowserRouter } from 'react-router'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'
import Login from './components/Login.jsx'
import Learnparams from './components/Learnparams.jsx'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>),
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        loader: async () =>{
          const response = await fetch("https://api.github.com/users/hiteshchoudhary")
          return response.json()
        },
        path: '/github',
        element: <Github/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/params',
        element: <Learnparams/>,
      },
      {
        path: '/params/:pid',
        element: <User/>,
      }
    ]
  }
])

const App = () => {
  return (
    <div className='h-screen w-full'>
      <RouterProvider router={router}/> 
    </div>
  )
}

export default App
