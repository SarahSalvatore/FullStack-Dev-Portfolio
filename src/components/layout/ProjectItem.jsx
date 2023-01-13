import { HashLink as Link } from "react-router-hash-link";
import wordleImg from "../../assets/images/wordle-screenshot.jpg";

const ProjectItem = ({ name, desc }) => {
  return (
    <div className="section-container">
      <div className="project-left">
        <img className="project-img" src={wordleImg} alt="Wordle" />
      </div>
      <div className="project-right">
        <h1 className="small-heading">{name}</h1>
        <div>Badges go here</div>
        <p>{desc}</p>
        <Link to="/project" className="pink-text-link">
          Demo
        </Link>
        <Link to="/project" className="pink-text-link">
          Code
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
