import './NavBar.scss'
import { NavLink } from "react-router-dom"
import NavButtons from './NavButtons'

function NavBar() {
  return (
    <nav id="navbar">
      {NavButtons.map(
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