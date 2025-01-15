import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages'

import { Button } from './components/ui/button'
import { useAppSelector } from './hooks'

function App() {
  const { name } = useAppSelector((state) => state.userState)
  console.log(name)
  return (
    <div>
      <h1 className='text-3xl font-bold logo'>E-Bazaar</h1>
      <Button
        onClick={() => console.log('Test worked')}
      >
        Submit
      </Button>
    </div>
  )
}
export default App
