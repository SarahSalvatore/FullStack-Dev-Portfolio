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
            name={item.projectName}
            desc={item.projectDesc}
          />
        );
      })}
    </section>
  );
};

export default Projects;
