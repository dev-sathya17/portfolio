import { skillsData } from "../../data/skills";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills">
      <h1 className="skills-title">Skills</h1>
      <div className="d-flex justify-content-between flex-wrap">
        {skillsData.map((skill, index) => {
          return (
            <div key={index} className="skill">
              <p>{skill.title}</p>
              <hr className="line" />
              <div className="skill-list mt-4">
                {skill.skills.map((item, index) => (
                  <div key={index} className="pill">
                    <img
                      className="skill-img"
                      src={item.icon}
                      alt={item.name}
                    />
                    <li key={item.id}>{item.name}</li>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
