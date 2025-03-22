import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom'
import { Button } from '../components/ui/button'

function Error() {
  const error = useRouteError()
  console.log(error)
  if (isRouteErrorResponse(error) && error.status === 404) {
    <h1>404 Error</h1>
  }
  return <h1 className='text-2xl'>Error Page</h1>
}
export default Error