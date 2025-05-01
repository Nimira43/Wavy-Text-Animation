import { useRouteError } from 'react-router-dom'

function ErrorElement() {
  const error = useRouteError()
  console.log(error)

  return (
    <h1 className='font-semibold text-4xl text-prime uppercase'>There was an error!</h1>
    
  )
}

export default ErrorElement
