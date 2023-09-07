import React from 'react'
import { useProductContext } from '../../Hooks/useProductsContext'
import { useParams, Link } from 'react-router-dom'
import './singleProduct.css'

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
      <div className='singleProductContainer'>
        <div className='singleProductContainer__all'>
          <div className='singleProduct__back'><Link to='/'> &#10094; Back</Link></div>
          <div className='singleProduct'>
            <div><h4>{selectedProduct.product_name}</h4>
              <img className='singleProduct__image' src={selectedProduct.image} alt='' />
            </div>
            <div className='singleProduct__description'>
              <h5>{selectedProduct.description}</h5>
              <h5>Price: ${selectedProduct.price}</h5>
              <div><button>Add to cart</button></div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
