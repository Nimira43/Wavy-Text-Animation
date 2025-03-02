import { links } from './utils'
import { NavLink } from 'react-router-dom'

function NavLinks() {
  return (
    <div className='hidden lg:flex justify-center items-center gap-x-4'>
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            className={({ isActive }) => {
              return `uppercase font-medium hover:text-teal tracking-wide ${
                isActive ? 'text-teal' : ''
              }`
            }}
            key={link.label}
          >
            {link.label}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
