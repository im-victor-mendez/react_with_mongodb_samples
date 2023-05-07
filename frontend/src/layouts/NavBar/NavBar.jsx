import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav id="navbar">
      <NavLink className="nav-link" to="/airbnb">
        AirBnb
      </NavLink>
    </nav>
  )
}
export default NavBar