import { HashLink as Link } from "react-router-hash-link";
import heroImage from "../../assets/images/laptop.png";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <div className="hero-text-container">
            <h1 className="hero-heading-h1">Sarah</h1>
            <h1 className="hero-heading-h1">Salvatore</h1>
            <h2 className="hero-heading-h2">Full Stack Developer</h2>
            <Link to="/#about-section" className="black-button">
              Learn More
            </Link>
          </div>
        </div>
        <div className="header-right">
          <img
            src={heroImage}
            className="hero-image"
            alt="A laptop and tablet device with transparent screens projected around them."
            title="Hello World!"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
