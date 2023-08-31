import './productsList.scss'
import { useProductContext } from '../../Hooks/useProductsContext'
import { Link } from 'react-router-dom'

const ProductsList = () => {
  const { products, loading, setSelectedProduct, search } = useProductContext()
  const filterProducts = products.filter(
    item => item.product_name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='productList'>
      {loading
        ? <h1>Loading</h1>
        : filterProducts.map((item) => (

          <div
            className='productList__singleItem'
            key={item.id}
            onClick={() => { setSelectedProduct(item); console.log('click') }}
          >
            <h3 className='productList__title'>{item.product_name}</h3><br />
            <span><img src={item.image} alt='' /></span><br />
            <span>{item.category}</span><br />
            <span className='productList__description'>{item.description}</span><br />
            <span>{item.price}</span><br />
            <Link to={`/${item.id}`}>Más</Link>
          </div>

        ))}
    </div>
  )
}

export default ProductsList
