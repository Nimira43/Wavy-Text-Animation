// import { Filters, ProductsContainer, PaginationContainer } from '../components'
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
