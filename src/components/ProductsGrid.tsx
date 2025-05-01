import { useLoaderData } from 'react-router-dom'
import { ProductsResponse } from '../utils'

const ProductsGrid = () => {
  const { data: products} = useLoaderData as ProductsResponse
  
  return (
    <div>
      
    </div>
  )
}

export default ProductsGrid

