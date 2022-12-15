import { skillsList } from "../../data/skillsList";
import Badge from "../badges/Badge";

const Skills = () => {
  return (
    <section className="skills-container">
      {skillsList.map((item) => {
        return (
          <Badge
            key={skillsList.indexOf(item)}
            className="skills-badge"
            title={item}
          />
        );
      })}
    </section>
  );
};

export default Skills;
