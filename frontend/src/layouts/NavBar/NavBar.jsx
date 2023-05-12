import './NavBar.scss'
import { NavLink } from "react-router-dom"

function NavBar({ links }) {
  return (
    <nav id="navbar">
      {links.map(
        button => {
          const { name, to } = button

          return <NavLink
            key={`nav-link-${name}`}
            id={`nav-link-${name}`}
            className='nav-link'
            to={to}
          >
            {name}
          </NavLink>
        }
      )}
    </nav>
  )
}
export default NavBar