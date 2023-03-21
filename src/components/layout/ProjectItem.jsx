import { useInView } from "react-intersection-observer";
import Badge from "../badges/Badge";

const ProjectItem = ({ name, image, badges, desc, demoHref, repoHref }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`section-container ${inView ? "fade-up" : null}`}>
      <div className="project-left">
        <a
          href={demoHref ? demoHref : repoHref}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="project-img"
            src={require(`../../assets/images/${image}`)}
            alt="project screenshot"
          />
        </a>
      </div>
      <div className="project-right">
        <h1 className="small-heading">{name}</h1>
        <div className="build-badge-container">
          {badges.map((tag) => {
            return <Badge className={`build-badge ${tag}`} title={tag} />;
          })}
        </div>
        <p className="project-desc">{desc}</p>
        <div className="project-link-container">
          {demoHref ? (
            <a
              href={demoHref}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Demo
            </a>
          ) : null}
          <a
            href={repoHref}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
