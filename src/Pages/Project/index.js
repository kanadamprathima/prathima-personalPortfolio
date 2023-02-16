import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../../Components/AnimatedLetters";
import "./index.scss";
import projectsData from "../../assets/projectData/project.json";
const ProjectPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  console.log(projectsData);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderProjects = (projectsData) => {
    return (
      <div className="images-container">
        {projectsData.map((project, i) => {
          return (
            <div className="img-box" key={i}>
              <img
                src={project.cover}
                alt="project pic"
                className="portfolio-img"
              />
              {project.title}
              <p>{project.description}</p>
              <button onClick={() => window.open(project.url)}>VIEW</button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
            idx={15}
          />
        </h1>
        <div>{renderProjects(projectsData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default ProjectPage;
