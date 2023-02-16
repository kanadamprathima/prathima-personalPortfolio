import AnimatedLetters from "../../Components/AnimatedLetters";
import { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSiRedux } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import {
  faAngular,
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faGitAlt,
  faBootstrap,
  faSass,
  faNpm,
  faPython,
  faNodeJs,
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
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            faAnimationDuration: "1s",
          }}
        >
          <FontAwesomeIcon
            icon={faHtml5}
            color="#F06529"
            className="fa-i-cursor  fa-beat"
          />
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          <FontAwesomeIcon
            icon={faReact}
            color="#5ED4F4"
            className="fa-spin"
            style={{
              faAnimationDuration: "15s",
              faAnimationIterationCount: "1",
            }}
          />
          <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D2A" />
          <FontAwesomeIcon icon={faBootstrap} color="#28A4D9" />
          <FontAwesomeIcon icon={faSass} color="pink" />
          <FontAwesomeIcon icon={faPython} color="purple" />
          <FontAwesomeIcon icon={faNpm} color="red" />
          <FontAwesomeIcon icon={faNodeJs} color="green" />
        </div>
      </div>
    </div>
  );
};
export default SkillsPage;
