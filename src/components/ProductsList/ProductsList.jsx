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

            <div><span><img src={item.image} alt='' /></span><br /></div>
            <div><span className='product_category'>{item.category}</span><h3 className='productList__title'>{item.product_name}</h3></div>
            <div className='productList__price'><span>Price ${item.price}</span><br /></div>
            <div className='producList__moreInfo'><Link to={`/${item.id}`}>More info</Link></div>
          </div>

        ))}
    </div>
  )
}

export default ProductsList
