import { Link, useLoaderData } from 'react-router-dom'
import { ProductsResponse } from '../utils'

const ProductsGrid = () => {
  const { data: products} = useLoaderData as ProductsResponse
  
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { title, price, image } = product.attributes
        const poundsAmount = formatAsPounds(price)

        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            
          </Link>
          
        )
      })}
      
    </div>
  )
}

export default ProductsGrid

