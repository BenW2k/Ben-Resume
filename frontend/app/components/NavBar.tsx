import styles from "../styles/navBar.module.css";
import Link from "next/link";
import Image from "next/image";
import {NavDropdown} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import darkModeIcon from "../assets/img/moon-dark-theme.svg";
import darkModeLogo from "../assets/img/figma-logo-white.svg";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <Image
          src={darkModeLogo}
          alt="dark-mode-logo"
          className={styles["night-main-logo"]}
        />
      </a>
      <Nav className={styles["nav-links"]}>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
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
      <div className="navbar-icons">
        <button className={styles["night-mode-button"]}>
          <Image
            src={darkModeIcon}
            alt="dark-mode-toggle-icon"
            className={styles["night-mode-moon"]}
          />
        </button>
        <button className="nav-button">
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
