import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2><i>JobPortal</i></h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Jobs">Jobs</Link>
        <Link to="/JobDetails">JobDetails</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;