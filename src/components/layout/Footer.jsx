import { HashLink as Link } from "react-router-hash-link";
import Badge from "../badges/Badge";
import { navList } from "../../data/navList";
import logo from "../../assets/logo/footer-logo.webp";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          className="footer-logo"
          src={logo}
          alt="blue elipse with a pink outline and a white S."
        />
        <h1 className="footer-heading-font">Sarah Salvatore</h1>
        <p className="paragraph-text">
          © 2022 | Built with: <Badge title="React" />,
          <Badge title="JavaScript" />, <Badge title="HTML" />,
          <Badge title="CSS" />
        </p>
      </div>
      <div className="footer-links-container">
        <div className="footer-links-list">
          <hr />
          <h2>EXPLORE</h2>

          {navList.map((item) => {
            return (
              <Link to={item.linkTo} key={item.index} className="footer-link">
                {item.linkName}
              </Link>
            );
          })}
        </div>
        <div>
          <hr />
          <h2>LINKS</h2>
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Resume (pdf)</li>
          </ul>
        </div>
        <div>
          <hr />
          <h2>CONTACT</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
