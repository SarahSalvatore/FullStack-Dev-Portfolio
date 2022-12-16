import { HashLink as Link } from "react-router-hash-link";

const ProjectItem = () => {
  return (
    <div className="section-container">
      <div className="project-right">
        <h1 className="small-heading">Project Name</h1>
        <div>Badges go here</div>
        <p>Project description goes here.</p>
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
