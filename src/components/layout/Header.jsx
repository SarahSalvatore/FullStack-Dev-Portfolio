import { HashLink as Link } from "react-router-hash-link";
import heroImage from "../../assets/images/hero-image.webp";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <div className="hero-text-container">
            <hr className="hero-hr" />
            <h1 className="hero-heading-h1">Hi, I'm Sarah</h1>
            <h2 className="hero-heading-h2">Full Stack Developer</h2>
            <Link to="/#about-section" className="blue-button">
              Learn More
            </Link>
          </div>
        </div>
        <div className="header-right">
          <img
            src={heroImage}
            className="hero-image"
            alt="A white, 3d computer monitor with 3d items surrounding it including: a white magnifying glass, a white chat bubble with text, a white notification icon with a heart inside it, a white bell notification icon, and colour logos for JavaScript, TypeScript and React"
            title="Welcome to my website!"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
