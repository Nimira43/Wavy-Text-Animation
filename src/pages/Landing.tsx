import { Hero, FeaturedProducts } from '../components'
import { customFetch, type ProductsResponse } from '../utils'
import { useLoaderData, type LoaderFunction } from 'react-router-dom'

const url = '/products?featured=true'

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing