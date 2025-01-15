import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <header>Header</header>
      <nav>Navbar</nav>
      <Outlet />
    </>
  )
}
export default HomeLayout