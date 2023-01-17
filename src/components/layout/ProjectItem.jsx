import { HashLink as Link } from "react-router-hash-link";
import Badge from "../badges/Badge";

const ProjectItem = ({ name, image, badges, desc, demoHref, repoHref }) => {
  return (
    <div className="section-container">
      <div className="project-left">
        <img
          className="project-img"
          src={require(`../../assets/images/${image}`)}
          alt="Wordle"
        />
      </div>
      <div className="project-right">
        <h1 className="small-heading">{name}</h1>
        <div className="build-badge-container">
          {badges.map((tag) => {
            return <Badge className={`build-badge ${tag}`} title={tag} />;
          })}
        </div>
        <p className="project-desc">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
