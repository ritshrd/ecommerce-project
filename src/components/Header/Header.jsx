import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useProductContext } from '@/Hooks/useProductsContext'
import './header.scss'
import { useAdminContext } from '../../Hooks/useAdmin'

const Header = () => {
  const { isAdmin, logout } = useAdminContext()
  const { products, setSelectedProduct, setSearch } = useProductContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <header>
        <div>&#9751; SupaStore</div>
        <nav>
          <ul className='nav-links'>
            <li className='header__list-item'>
              <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
            </li>
            {
          !isAdmin &&
            <li className='header__list-item'>
              <NavLink to='/signup' className={({ isActive }) => linkIsActive(isActive)}>Signup</NavLink>
            </li>
}
            {
          !isAdmin &&
            <li className='header__list-item'>
              <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
            </li>
}
            {
          isAdmin &&
            <li className='header__list-item'>
              <NavLink to='/dashboard' className={({ isActive }) => linkIsActive(isActive)}>Dashboard</NavLink>
            </li>
              }
            {
          isAdmin &&
            <li className='header__list-item'>
              <NavLink to='/' onClick={logout} className='header__item-link'>Log Out</NavLink>
            </li>
}
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
