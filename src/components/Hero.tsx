import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import HeroCarousel from './HeroCarousel'

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-medium tracking-tight sm:text-6xl'>Redefining The Ways You Shop</h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>Discover furniture that transforms your space. At e-Bazaar, style meets comfort with expertly crafted pieces designed for modern living. Elevate your home effortlessly — shop now for quality, affordability, and timeless elegance. Your dream space awaits</p>
        <Button 
          asChild
          size='lg'
          className='mt-10 uppercase'
        >
          <Link to='./products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero

