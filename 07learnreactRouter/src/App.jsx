import { RouterProvider } from 'react-router-dom'
import myRouter from './router/myRouter'
import Navbar from './components/Navbar'
import Footer from './components/footer'


export default function App() {
  const router = myRouter()
  return (
    <>
       <Navbar />
      <div>
      <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  )
}
