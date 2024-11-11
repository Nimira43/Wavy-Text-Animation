import { Link } from 'react-router-dom'
import { BringToFront } from 'lucide-react'

function Logo() {
  return (
    <Link to='/' className='hidden lg:flex justify-center items-center bg-[#ff4500] text-[#111] p-2 rounded-full'>
      <BringToFront className='w-8 h-8' />
    </Link>  
  )
}

export default Logo
