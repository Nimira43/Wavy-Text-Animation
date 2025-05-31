import { useLoaderData } from 'react-router-dom'
import { ProductsResponse } from '../utils'
import { useState } from 'react'

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState<'grid | 'list>
  
  return (
    <div>
      <h1>Products Container</h1>      
    </div>
  )
}

export default ProductsContainer
