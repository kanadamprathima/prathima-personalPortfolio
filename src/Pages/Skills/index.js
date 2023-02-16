import AnimatedLetters from "../../Components/AnimatedLetters";
import { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSiRedux } from "react-icons/fa";
import {
  faAngular,
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faGitAlt,
  faBootstrap,
  faSass,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
const SkillsPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["S", "k", "i", "l", "l", "s"]}
            idx={15}
          />
        </h1>
        <div
          className="fa-5x "
          style={{ display: "flex", gap: "20px", padding: "20px" }}
        >
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />

          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D2A" />
          <FontAwesomeIcon icon={faBootstrap} color="#28A4D9" />
          <FontAwesomeIcon icon={faSass} color="pink" />
          <FontAwesomeIcon icon={faPython} color="purple" />
          {/* <FaSiRedux /> */}
        </div>
      </div>
    </div>
  );
};
export default SkillsPage;
