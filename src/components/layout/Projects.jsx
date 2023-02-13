import SectionHeading from "./SectionHeading";
import ProjectItem from "./ProjectItem";
import { projectList } from "../../data/projectList";

const Projects = () => {
  return (
    <section className="section-container-column" id="projects-section">
      <SectionHeading title="Portfolio" />
      {projectList.map((item) => {
        return (
          <ProjectItem
            key={item.index}
            image={item.projectImg}
            name={item.projectName}
            badges={item.tags}
            desc={item.projectDesc}
            demoHref={item.demoLink ? item.demoLink : null}
            repoHref={item.repoLink}
          />
        );
      })}
    </section>
  );
};

export default Projects;
