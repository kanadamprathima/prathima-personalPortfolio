import AnimatedLetters from "../../Components/AnimatedLetters";
import "./index.scss";
import { useState, useEffect } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

const AboutPage = () => {
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
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", "  ", "m", "e"]}
              idx={15}
            />
          </h1>
          {/* <p>
            As an ambitious engineering graduate with a passion for frontend
            development, I am determined to kickstart my career.{" "}
          </p>
          <p>
            I have a strong drive to pursue my goals and achieve what I set my
            mind to.
          </p> */}
          <p>
            {/* I believe in continuous learning and improvement, always striving to
            grow and evolve in my field. */}
            <li>Certified Full Stack Developer </li>
            <li>Ambitious and passionate about frontend development</li>
            <li>
              Holding an HSM visa, legally able to work in the NL (No
              Sponsorship required)
            </li>
            <li>Enthusiastic, committed, and always willing to learn</li>
            <li>Confident in making a meaningful impact in a company.</li>
            <li>
              Proactive in seeking new opportunities and expressing interest in
              companies aligning with values and career goals
            </li>
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D2A" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default AboutPage;
