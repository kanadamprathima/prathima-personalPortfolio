import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../../Components/AnimatedLetters/index";

import "./index.scss";

const HomePage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["P", "r", "a", "t", "h", "i", "m", "a"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  // useEffect(() => {
  //   const getTimeout = () => {
  //     return setTimeout(() => {
  //       setLetterClass("text-animate-hover");
  //     }, 4000);
  //   };
  //   getTimeout();
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // useEffect(() => {
  //   setLetterClass("text-animate-hover");
  // }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>{" "}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer /Full stack web developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default HomePage;
