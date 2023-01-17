import SectionHeading from "./SectionHeading";
import ProjectItem from "./ProjectItem";
import { projectList } from "../../data/projectList";

const Projects = () => {
  return (
    <section className="section-container-column" id="projects-section">
      <SectionHeading title="Projects" />
      {projectList.map((item) => {
        return (
          <ProjectItem
            key={item.index}
            image={item.projectImg}
            name={item.projectName}
            badges={item.tags}
            desc={item.projectDesc}
            demoHref={item.demoLink}
            repoHref={item.repoLink}
          />
        );
      })}
    </section>
  );
};

export default Projects;
