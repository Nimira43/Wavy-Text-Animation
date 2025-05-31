import { useLoaderData } from 'react-router-dom'
import { formatAsPounds, type ProductsResponse } from '../utils'

const ProductsList = () => {
  const { data: products } = useLoaderData() as ProductsResponse

  return (
    <div>
      <h1>Products List</h1>      
    </div>
  )
}

export default ProductsList

