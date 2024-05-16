import styles from "../styles/components/navbar/navBar.module.css";
import Link from "next/link";
import Image from "next/image";
import {NavDropdown} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {IoMoonOutline} from "react-icons/io5";
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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link
          href="https://www.linkedin.com/in/ben-workman-ds/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </Link>
        <Link href="https://github.com/benw2k" target="_blank" rel="noreferrer">
          GitHub ↗
        </Link>
      </Nav>
      <div className={styles["navbar-icons"]}>
        <Button className={styles["night-mode-button"]}>
          <IoMoonOutline className={styles["night-mode-moon"]} />
        </Button>
        <a className={styles["connect-button"]} href="#">
          <span className={styles["connect-button__icon-wrapper"]}>
            <svg
              width="10"
              className={styles["connect-button__icon-svg"]}
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>

            <svg
              className={
                styles[
                  "connect-button__icon-svg  connect-button__icon-svg--copy"
                ]
              }
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </span>
          Explore All
        </a>
        {/* <Button href="/contact" className={styles["nav-button"]}>
          <span>Contact Me ↗</span>
        </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
