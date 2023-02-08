import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoLink from "./LogoLink";
import MappedNav from "../operations/MappedNav";
import { navList } from "../../data/navList";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <nav>
      <div className={`nav-left ${inView ? "fade" : null}`} ref={ref}>
        <LogoLink logoSrc={logo} className="logo" />
      </div>
      <div className={`nav-right ${inView ? "fade" : null}`} ref={ref}>
        <div className="nav-list">
          <MappedNav array={navList} className="nav-list-item" />
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger"
            title="open navigation"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
