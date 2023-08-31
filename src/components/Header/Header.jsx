import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '@/Hooks/useProductsContext'
import './header.scss'
import { useAdminContext } from '../../Hooks/useAdmin'

const Header = () => {
  const { logout } = useAdminContext()
  const { products, setSelectedProduct, setSearch } = useProductContext()
  const { active, setActive } = useState

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
            <li><Link to='/' onClick={logout}>Log Out</Link></li>
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
