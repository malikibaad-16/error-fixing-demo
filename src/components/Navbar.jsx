import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-title">ErrorFix Demo</span>
      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
