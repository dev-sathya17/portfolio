import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
      <div className="socials">
        <div>Developed by Sathyanarayanan.V</div>
        <a href="https://github.com/dev-sathya17" target="_blank">
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sathyanarayanan-v-/"
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
