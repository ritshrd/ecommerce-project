import React from 'react'
import { useProductContext } from '../../Hooks/useProductsContext'
import { useParams, Link } from 'react-router-dom'

const SingleProduct = () => {
  const { id } = useParams()
  const { products } = useProductContext()

  // Buscar el producto con el ID correspondiente
  const selectedProduct = products.find(product => product.id === id)

  if (!selectedProduct) {
    return <div>Producto no encontrado.</div>
  }

  return (
    <>
      <Link to='/'>Back</Link>
      <div>Detalles del producto:</div>
      <h4>{selectedProduct.product_name}</h4>
      <div><img src={selectedProduct.image} alt='' /></div>
      <h5>Price: ${selectedProduct.price}</h5>
      <h5>{selectedProduct.description}</h5>
      <div><button>Add to cart</button></div>
    </>
  )
}

export default SingleProduct
