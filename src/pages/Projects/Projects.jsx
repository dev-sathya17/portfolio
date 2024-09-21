import Card from "../../components/Card/Card";
import { projectsData } from "../../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects" name="projects">
      <h1 className="title">Projects</h1>
      <div className="card-container">
        {projectsData.map((project, index) => {
          return <Card project={project} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
