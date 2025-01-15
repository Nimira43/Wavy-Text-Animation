import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
function Cart() {
  return (
    <div>
      <h1 className='text-3xl'>Cart Page</h1>
      <Link to='/' className='text-2xl text-[#ff4500]'>
        Back Home
      </Link>
      <Button asChild size='lg'>
        <Link to='/'>Home</Link>
      </Button>
    </div>
  )
}
export default Cart