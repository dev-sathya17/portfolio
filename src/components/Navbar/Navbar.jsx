import "./Navbar.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="custom-navbar">
        <div className="logo-container">
          <p>Logo</p>
          <a href="" className="resume-btn">
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
              activeClass="active"
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
              activeClass="active"
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
              activeClass="active"
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
              activeClass="active"
              containerId="app"
            >
              Professional Summary
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
              activeClass="active"
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
            <li className="custom-nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="custom-nav-link"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="custom-nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="custom-nav-link"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li className="custom-nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="custom-nav-link"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li className="custom-nav-item">
              <Link
                to="professional-summary"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="custom-nav-link"
                onClick={toggleMenu}
              >
                Professional Summary
              </Link>
            </li>
            <li className="custom-nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="custom-nav-link"
                onClick={toggleMenu}
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
