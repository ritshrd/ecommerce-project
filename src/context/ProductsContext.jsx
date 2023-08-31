import { createContext, useState, useEffect } from 'react'
// import canciones from '../../assets/listaCanciones.json'
import { listAllProductsService } from '@/api/productsService'

// context - provider - consumer

// Paso 1: CRear contexto
const ProductContext = createContext()

// Paso 2: Proveedor del contexto
// El proveedor maneja de donde se obtiene la informacion y como se comparte
// El proov es un componente que envuelve a los componentes que van a usar el contexto

function ProductsProvider (props) {
  const [products, setProducts] = useState([]) // lista productos
  const [loading, setLoading] = useState(true) // comprueba si esta cargando
  const [selectedProduct, setSelectedProduct] = useState({}) // producto seleccionada
  const [search, setSearch] = useState('') // guarda la palabra

  //  llamada a la api

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const { data } = await listAllProductsService()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProductsData()
  }, [])

  // crear un obj con la informacion que va a tener el contexto

  const data = {
    products,
    loading,
    selectedProduct,
    setSelectedProduct,
    search,
    setSearch
  }
  return (
    <ProductContext.Provider value={data}>
      {props.children}
    </ProductContext.Provider>

  )
}

// Exportar funciones para que puedan accederse

export {
  ProductContext,
  ProductsProvider
}

// uso context
// paso4: ir a un componente de orden superior  (home.jsx) y envolverlo con el proveedor del contexto con la etiqueta <SongProvider>
