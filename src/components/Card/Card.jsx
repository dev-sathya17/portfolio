import { GoArrowUpRight } from "react-icons/go";
import "./Card.css";
import { FaGithub } from "react-icons/fa";

const Card = ({ project }) => {
  return (
    <div className="custom-card">
      <div className="custom-card-header">
        <p className="project-title">{project.title}</p>
        <div className="tech-stack">
          {project.techStack.map((tech) => (
            <img src={tech} alt={tech} className="custom-card-img" />
          ))}
        </div>
      </div>
      <div className="keywords">
        {project.keywords.map((keyword) => (
          <p className="keyword">{keyword}</p>
        ))}
      </div>
      <div>
        <p className="proj-desc">{project.description}</p>
      </div>
      <div className="card-actions">
        <a href={project.frontendLink} className="link-btn" target="_blank">
          <span>
            <FaGithub />
          </span>
          <span>Frontend</span>
        </a>
        <a href={project.backendLink} className="link-btn" target="_blank">
          <span>
            <FaGithub />
          </span>
          <span>Backend</span>
        </a>

        <a href={project.liveLink} className="link-btn" target="_blank">
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default Card;
