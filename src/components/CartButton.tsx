import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { IoCartOutline } from 'react-icons/io5'

function CartButton() {
  const numItemsInCart = 2
  
  return (
      <Button
        asChild
        variant='outline'
        size='icon'
        className='flex justify-center items-center relative'
      >
        <Link to='/cart'>
            <IoCartOutline />
            <span
              className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs' 
            >
              {numItemsInCart}
            </span>
        </Link>
      </Button>    
  )
}

export default CartButton
