import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">


        <Link to="/" className="logo">
          Akm
        </Link>

        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">AboutUs</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>


    </nav>





  );
}
export default Navbar;