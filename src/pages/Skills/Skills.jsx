import { skillsData } from "../../data/skills";
import "./Skills.css";
const Skills = () => {
  return (
    <>
      <h1 className="skills-title">Skills</h1>
      <section
        id="carouselExample"
        className="skills carousel slide m-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="skill-wrapper">
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
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
    </>
  );
};

export default Skills;
