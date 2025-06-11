import { NavLink, Link } from 'react-router-dom';
import '../styles/_global.scss';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">Zenith Fitness</Link></div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/plans">Plans</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;