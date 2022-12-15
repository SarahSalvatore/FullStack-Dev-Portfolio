import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <img
          className="logo"
          src={logo}
          alt="blue elipse with a pink outline and a white S."
          title="Sarah Salvatore | Full Stack Developer"
        />
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Projects</li>
          <li className="nav-list-item">Blog</li>
          <li className="nav-list-item">Resume</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
