import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom'
import { Button } from '../components/ui/button'

function Error() {
  const error = useRouteError()
  console.log(error)
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center px-8'>
        <div className='text-center'>
          <p className='text-9xl font-semibold text-primary'>404</p>
          <h1
            className='mt-4 text-3xl font-medium tracking-tight sm:text-5xl'
          >
            Page Not Found
          </h1>
          <p className='mt-6 text-lg leading-7'>We cannot find the page that you are looking for.</p>
        </div>
        <div className='mt-10'>
          <Button
            asChild 
            size='lg'  
          >
            <Link
              to='/'
              className='uppercase'
            >
              Home
            </Link>
          </Button>
        </div>
      </main>
    )
  }
  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
      <h4 className='text-center font-semibold text-4xl'>There was an unexpected error...</h4>
    </main>
  )
}
export default Error