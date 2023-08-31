import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { ProductsProvider } from './context/productsContext'
import { AdminProvider } from './context/AdminContext'
import RoutesIndex from './routes'

const App = () => {
  return (
    <>
      <AdminProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Header />
            <RoutesIndex />
          </BrowserRouter>
        </ProductsProvider>
      </AdminProvider>
    </>
  )
}

export default App
