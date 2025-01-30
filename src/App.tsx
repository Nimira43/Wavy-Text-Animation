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
  const { name } = useAppSelector((state) => state.userState);
  console.log(name)

  return (
    <div>
      <h1 className='text-4xl font-bold '>E-Bazaar</h1>
      <Button
        size='lg'
        onClick={() => console.log('Test Button')}
      >
        Submit
      </Button>
      <Cart />
    </div>
  )
}

export default App

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomeLayout />,

//     children: [
//       {
//         index: true,
//         element: <Landing />,
//       },
//       {
//         path: 'products',
//         element: <Products />,
//       },
//       {
//         path: 'products/:id',
//         element: <SingleProduct />,
//       },
//       {
//         path: 'cart',
//         element: <Cart />,
//       },
//       { 
//         path: 'about', 
//         element: <About /> },
//       {
//         path: 'checkout',
//         element: <Checkout />,
//       },
//       {
//         path: 'orders',
//         element: <Orders />,
//       },
//     ],
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/register',
//     element: <Register />,
//   },
// ])

// const App = () => {
//   return <RouterProvider router={router} />;
// }
// export default App