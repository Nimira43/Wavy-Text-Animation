import { useLoaderData } from 'react-router-dom'
import { ProductsResponse } from '../utils'
import { useState } from 'react'
import { Button } from './ui/button'
import { IoGridOutline, IoList  } from 'react-icons/io5'

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')

  return (
    <section>
      <div className='flex justify-between items-center mt-8'>
        <h4 className='font-medium text-md'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gap-x-4'>
          <Button
            onClick={() => setLayout('grid')}
            variant={layout === 'grid' ? 'default' : 'ghost'}
            size='icon'
          >
            <IoGridOutline />
          </Button>
          <Button
            onClick={() => setLayout('list')}
            variant={layout === 'list' ? 'default' : 'ghost'}
            size='icon'
          >
            <IoList />
          </Button>
        </div>
      </div>      
    </section>
  )
}

export default ProductsContainer
