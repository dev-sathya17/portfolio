import "./Navbar.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-scroll";
import Favicon from "../../assets/favicon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="custom-navbar">
        <div className="logo-container">
          <img src={Favicon} alt="logo" className="logo" />
          <a
            href="https://drive.google.com/file/d/1TBYQRs6ArhxATV5mC9S7fz7r5AzgOSSV/view?usp=sharing"
            target="_blank"
            className="resume-btn"
          >
            RESUME
          </a>
        </div>
        <ul className="custom-nav-items">
          <li className="custom-nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-78}
              duration={600}
              className="custom-nav-link"
              containerId="app"
            >
              Home
            </Link>
          </li>
          <li className="custom-nav-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-45}
              duration={600}
              className="custom-nav-link"
              containerId="app"
            >
              Skills
            </Link>
          </li>
          <li className="custom-nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
              className="custom-nav-link"
              containerId="app"
            >
              Projects
            </Link>
          </li>
          <li className="custom-nav-item">
            <Link
              to="professional-summary"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              className="custom-nav-link"
              containerId="app"
            >
              Work Experience
            </Link>
          </li>
          <li className="custom-nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              className="custom-nav-link"
              containerId="app"
            >
              Contact
            </Link>
          </li>
        </ul>
        {!isMenuOpen && (
          <RxHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
        )}
      </nav>

      {isMenuOpen && (
        <div className="custom-nav-mob">
          <RxCross2
            className="hamburger-icon close-icon"
            onClick={toggleMenu}
          />
          <ul className="custom-nav-body-mob">
            <li className="custom-nav-item" onClick={toggleMenu}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-78}
                duration={600}
                className="custom-nav-link"
                containerId="app"
              >
                Home
              </Link>
            </li>
            <li className="custom-nav-item" onClick={toggleMenu}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-45}
                duration={600}
                className="custom-nav-link"
                containerId="app"
              >
                Skills
              </Link>
            </li>
            <li className="custom-nav-item" onClick={toggleMenu}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}
                className="custom-nav-link"
                containerId="app"
              >
                Projects
              </Link>
            </li>
            <li className="custom-nav-item" onClick={toggleMenu}>
              <Link
                to="professional-summary"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                className="custom-nav-link"
                containerId="app"
              >
                Professional Summary
              </Link>
            </li>
            <li className="custom-nav-item" onClick={toggleMenu}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                className="custom-nav-link"
                containerId="app"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
