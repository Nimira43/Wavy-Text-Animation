import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

const carouselImages = [hero1, hero2, hero3, hero4]

function HeroCarousel() {
  return (
    <div className='hidden bg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default HeroCarousel
