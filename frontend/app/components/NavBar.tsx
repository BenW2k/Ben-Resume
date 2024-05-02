import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import {NavDropdown} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

export const Navbar = () => {
  return (
    <div>
      <Nav className="me-auto">
        <Link href="/Home">Home</Link>
        <Link
          href="https://www.linkedin.com/in/ben-workman-ds/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Link>
        <Link href="https://github.com/benw2k" target="_blank" rel="noreferrer">
          GitHub
        </Link>
      </Nav>
    </div>
  );
};

export default Navbar;
