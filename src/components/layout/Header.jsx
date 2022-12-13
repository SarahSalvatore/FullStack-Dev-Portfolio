import Button from "../buttons/Button";
import workinprogress from "../../assets/images/workinprogress2.png";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <div className="hero-text-container">
          <h1 className="hero-heading">Hi, I'm Sarah</h1>
          <h2 className="hero-heading">Full Stack Developer</h2>
          <Button title="Learn More" className="blue-button" />
        </div>
      </div>
      <div className="header-right">
        <img
          src={workinprogress}
          className="hero-image"
          alt="A white, 3d computer monitor with 3d items surrounding it including: a white magnifying glass, a white chat bubble with text, a white notification icon with a heart inside it, a white bell notification icon, and colour logos for JavaScript, TypeScript and React"
          title="Welcome to my website!"
        ></img>
      </div>
    </header>
  );
};

export default Header;
