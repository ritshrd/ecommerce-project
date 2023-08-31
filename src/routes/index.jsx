import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SingleProduct from '../components/SingleProduct/SingleProduct'

const RoutesIndex = () => {
  return (
    /*<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/:id' Component={SingleProduct} />

      </Routes>
    </BrowserRouter>*/
  )
}

export default RoutesIndex
