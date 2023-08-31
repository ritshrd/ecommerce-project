import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '@/Hooks/useProductsContext'
import './header.scss'
const Header = () => {
  const { products, setSelectedProduct, setSearch } = useProductContext()

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <header>
        <div>Logo</div>
        <nav>
          <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Buscar...'
            onChange={handleSearch}
          />

        </div>

      </header>

    </>
  )
}

export default Header
