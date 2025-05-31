import { Link, useLoaderData } from 'react-router-dom'
import { formatAsPounds, type ProductsResponse } from '../utils'
import { Card, CardContent } from './ui/card'

const ProductsList = () => {
  const { data: products } = useLoaderData() as ProductsResponse

  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image, company} = product.attributes
        const poundsAmount = formatAsPounds(price)

        return (
          <Link 
            key={product.id}
            to={`/products/${product.id}`}
          >
            <Card>
              <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                
              </CardContent>
            </Card>

          </Link> 
        )
      })}      
    </div>
  )
}

export default ProductsList

