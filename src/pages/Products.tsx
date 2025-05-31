import Filters from '../components/Filters'
import PaginationContainer from '../components/PaginationContainer'
import ProductsContainer from '../components/ProductsContainer'
import { customFetch, type ProductsResponse }  from '../utils'
import { type LoaderFunction } from 'react-router-dom'

const ProductsList = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default ProductsList