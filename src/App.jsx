import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Header from './components/Header/Header'
import { ProductsProvider } from './context/productsContext'
import SingleProduct from './components/SingleProduct/SingleProduct'
import { AdminProvider } from './context/AdminContext'

const App = () => {
  return (
    <>
      <AdminProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route
                path='/dashboard' element={

                  <Dashboard />
}
              />
              <Route path='/:id' Component={SingleProduct} />

            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </AdminProvider>
    </>
  )
}

export default App
