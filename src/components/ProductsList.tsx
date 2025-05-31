import { useLoaderData } from 'react-router-dom'
import { formatAsPounds, type ProductsResponse } from '../utils'

const ProductsList = () => {
  const { data: products } = useLoaderData() as ProductsResponse

  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image, company} = product.attributes
        const poundsAmount = formatAsPounds(price)
      })}      
    </div>
  )
}

export default ProductsList

