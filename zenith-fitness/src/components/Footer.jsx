import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Zenith Fitness. All rights reserved.</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
}

export default Footer;