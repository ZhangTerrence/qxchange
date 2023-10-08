import { Navbar } from "../components/Navbar.jsx";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {
  motion,
  useScroll,
  useTransform,
  useAnimationControls,
} from "framer-motion";
import "../css/Landing.css";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([]);
  const { scrollYProgress } = useScroll();
  const fadeControls = useAnimationControls();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.25]);
  const pos = useTransform(scrollYProgress, [0, 1], [0, -500]);

  useEffect(() => {
    async function fetchApi() {
      const response = await axios.get("http://localhost:6060/api/subject/");
      setSubjects(response.data.subjects);
    }
    fetchApi();
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollYProgress.current >= 0.4) {
      fadeControls.start({
        opacity: 1,
        transition: { duration: 0.3 },
      });
      document.querySelector("img.arrow").style.opacity = 0;
    } else if (
      scrollYProgress.current < 0.4 &&
      scrollYProgress.current > 0.05
    ) {
      document.querySelector("img.arrow").style.opacity = 1;
      fadeControls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [fadeControls, scrollYProgress]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  function attach() {
    document.querySelector("img.arrow").addEventListener("click", () => {
      window.scrollTo({
        top: 330,
        behavior: "smooth",
      });
    });
  }

  return (
    <div className="index">
      <Navbar />
      <motion.div
        layoutScroll
        className="project-name"
        style={{ scale, translateY: pos }}
      >
        <motion.div
          layout
          className="project-name-child"
          style={{ fontSize: scrollYProgress }}
        />
        RUddit
      </motion.div>
      <motion.img
        animate={{
          translateY: [0, 10, 0],
        }}
        whileHover={{
          scale: 1.2,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.3,
          repeatDelay: 1,
        }}
        className="arrow"
        alt="Arrow"
        onLoad={attach}
        src="https://cdn.animaapp.com/projects/65217f2625a5f136eb81c527/releases/65217fdf819c5f5f1d286d06/img/arrow-1-1@2x.png"
      />
    <motion.div animate={fadeControls} className="subjects-body" style={ {opacity: 0}}>
            <p>Choose your subject:</p>
            <div className="row">
              <div className="column" >
                {subjects.map((subject, i) => {return <motion.div key={i} whileHover={{scale: 1.1}} whileTap={{scale:0.9}} className="subject-container" onClick={()=> {
                  navigate("/dashboard", {state:{subject:subject.subject}})
                }}><motion.img whileHover={{scale : 1.5, transition: { duration: 0.3 }}} src={subject.image}></motion.img><h1>{subject.subject}</h1></motion.div>})}
              </div>
            </div>
          </motion.div>
    </div>
  );
};
