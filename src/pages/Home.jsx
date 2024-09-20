import { Cursor, useTypewriter } from "react-simple-typewriter";
import { aboutData } from "../data/about";
import "./Home.css";
const Home = () => {
  const [text] = useTypewriter({
    words: aboutData.role,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="home d-flex justify-content-between">
      <div className="home-info">
        <h2>
          Hello &#128075;, <br />
          This is <span>{aboutData.name}</span>
        </h2>
        <h4>
          I am a <span className="role">{text}</span>
          <Cursor />
        </h4>
        <p className="justify">{aboutData.about}</p>
      </div>
      <div className="home-stats d-flex justify-content-end flex-column align-items-center">
        {aboutData.stats.map((stat) => {
          return (
            <div key={stat.title} className="home-stat">
              <p className="m-0">{stat.title}</p>
              <p className="m-0 fw-bold fs-4">{stat.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
