// Custom hooks
// Empiezan con la palabra USE
// Son funciones
// Deben usar otros hooks

import { useContext } from 'react'
import { ProductContext } from '@/context/productsContext'

// PAso 3: crear un custom hooks para usar el contexto

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProductContext debe usarse dentro de ProductsProvider')
  }

  return context
}
