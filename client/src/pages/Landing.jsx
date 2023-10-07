import React from "react";
import "../css/landing.css";
import { Navbar } from "../components/Navbar.jsx";
import {motion, useScroll, useTransform } from "framer-motion";

export const Landing = () => {
  // var fontString = document.querySelector("div.project-name").style.fontSize;
  // let fontS = parseInt(fontString);
  // var prevScrollPos = 0;

  // document.addEventListener("scroll", (scroll) => {
  //   // console.log(window.scrollY);
  //   var fontS = parseInt(document.querySelector("div.project-name").style.fontSize)
  //   if(window.scrollY > prevScrollPos) {
  //     fontS = fontS - (window.scrollY - prevScrollPos)/10;
  //   } else {
  //     fontS = fontS + (prevScrollPos - window.scrollY)/10;
  //   }
  //   document.querySelector("div.project-name").style.fontSize = fontS + "px";
  //   prevScrollPos = window.scrollY;
  //   console.log(window.scrollY)

  // })

  var { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.25]);
  const pos = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    
    <div className="index">
        <Navbar/>
        <motion.div layoutScroll className="project-name" 
        // animate={{
        //   rotate: 180
        // }}
        // transition={{
        //   repeat: 1,
        //   repeatType: "mirror",
        //   duration: 2,
        //   type: "keyframes"
        // }}
        style={{scale, translateY: pos}}>
          <motion.div layout className="project-name-child" style={ {fontSize: scrollYProgress}}/>
          HackRU Goated Project
          </motion.div>
        <img
          className="arrow"
          alt="Arrow"
          src="https://cdn.animaapp.com/projects/65217f2625a5f136eb81c527/releases/65217fdf819c5f5f1d286d06/img/arrow-1-1@2x.png"
        />
    </div>
  );
};

