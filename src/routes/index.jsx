import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Signup, Dashboard } from '../pages'
import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useAdminContext } from '../Hooks/useAdmin'

const RoutesIndex = () => {
  const { isAdmin } = useAdminContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/Dashboard' element={
        isAdmin
          ? <Dashboard />
          : <Navigate to='/' />
        }
      />
      <Route path='/:id' Component={SingleProduct} />

    </Routes>
  )
}

export default RoutesIndex
