import { Navbar } from "../components/Navbar.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion, useScroll, useTransform, useAnimationControls} from "framer-motion";
import "../css/landing.css";
import {useNavigate} from 'react-router-dom'


export const Landing = () => {
  const navigate = useNavigate();

  var { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.25]);
  const pos = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const fadeControls = useAnimationControls();
  var height = 0;
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const response = await axios.get("http://localhost:6060/api/subject/");
      setSubjects(response.data.subjects);
    }
    fetchApi();
  }, []);

  function attach() {
    document.querySelector("img.arrow").addEventListener("click", () => {
      window.scrollTo({
        top: 330,
        behavior: "smooth",
      });
    });
  }
 
  document.addEventListener("scroll", () => {
    if(scrollYProgress.current >= 0.4) {
        fadeControls.start({
          opacity: 1,
           transition: { duration: 0.3 },
         })
      
      document.querySelector("img.arrow").style.opacity = 0;
    } else if(scrollYProgress.current < 0.4 && scrollYProgress.current > 0.05) {
      document.querySelector("img.arrow").style.opacity = 1;
        fadeControls.start({
          opacity: 0,
           transition: { duration: 0.3 },
         })
    }
  })

  const variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1, 
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="index">
      <Navbar />
      <motion.div
        layoutScroll
        className="project-name"
        // animate={{
        //   rotate: 180
        // }}
        // transition={{
        //   repeat: 1,
        //   repeatType: "mirror",
        //   duration: 2,
        //   type: "keyframes"
        // }}

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
                {subjects.map((subject, i) => {return <div key={i} whilehover={{scale: 1.1}} whiletap={{scale:0.9}} className="subject-container" onClick={()=> {
                  navigate("/dashboard", {state:{subject:subject.subject}})
                }}><h1>{subject.subject}</h1></div>})}
              </div>
            </div>
          </motion.div>
    </div>
  );
};
