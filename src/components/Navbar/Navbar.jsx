// import "./Navbar.css";
// // import { NavLink } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";
// const Navbar = () => {
//   const [view, setView] = useState(false);

//   const handleToggle = () => setView(!view);

//   return (
//     <>
//       <nav className="custom-navbar">
//         {!view && (
//           <RxHamburgerMenu className="hamburger-icon" onClick={handleToggle} />
//         )}
//         <ul className="custom-nav-items">
//           <li className={`custom-nav-item`}>
//             <a href="#">Home</a>
//           </li>
//           <li className="custom-nav-item">
//             <a href="#">Skills</a>
//           </li>
//           <li className="custom-nav-item">
//             <a href="#">Projects</a>
//           </li>
//           <li className="custom-nav-item">
//             <a href="#">Professional Summary</a>
//           </li>
//           <li className="custom-nav-item">
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       {view && (
//         <div className="nav-mob">
//           <div className="nav-mob-header">
//             {/* <Header /> */}
//             <RxCross2 className="hamburger-icon" onClick={handleToggle} />
//           </div>
//           <ul className="nav-body-mob">
//             <li className={`custom-nav-item`}>
//               <a href="#">Home</a>
//             </li>
//             <li className="custom-nav-item">
//               <a href="#">Skills</a>
//             </li>
//             <li className="custom-nav-item">
//               <a href="#">Projects</a>
//             </li>
//             <li className="custom-nav-item">
//               <a href="#">Professional Summary</a>
//             </li>
//             <li className="custom-nav-item">
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import "./Navbar.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="custom-navbar">
        <div className="logo-container">
          <p>Logo</p>
        </div>
        <ul className="custom-nav-items">
          <li className="custom-nav-item">
            <a href="#" className="custom-nav-link">
              Home
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="#" className="custom-nav-link">
              Skills
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="#" className="custom-nav-link">
              Projects
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="#" className="custom-nav-link">
              Professional Summary
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="#" className="custom-nav-link">
              Contact
            </a>
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
              <a href="#" className="custom-nav-link">
                Home
              </a>
            </li>
            <li className="custom-nav-item">
              <a href="#" className="custom-nav-link">
                Skills
              </a>
            </li>
            <li className="custom-nav-item">
              <a href="#" className="custom-nav-link">
                Projects
              </a>
            </li>
            <li className="custom-nav-item">
              <a href="#" className="custom-nav-link">
                Professional Summary
              </a>
            </li>
            <li className="custom-nav-item">
              <a href="#" className="custom-nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;