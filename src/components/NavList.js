import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavList() {

  return (
    <>
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </Nav>
    </>
  );
};

export default NavList;