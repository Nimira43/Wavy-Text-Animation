import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

function Cart() {
  return (
    <div>
      <h1 className='text-3xl'>Cart Page</h1>
      <Link
        className='uppercase'
        to='/'
      >
        Back Home
      </Link>
      <Button asChild size='lg'>
        <Link
          className='uppercase'
          to='/'
        >
          Home
        </Link>
      </Button>
    </div>
  )
}
export default Cart