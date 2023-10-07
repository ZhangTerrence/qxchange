import { Navbar } from "../components/Navbar.jsx";
import { motion, useScroll, useTransform, useAnimationControls} from "framer-motion";
import "../css/landing.css";
import { AuthButton } from "../components/AuthButton.jsx";

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
  const fadeControls = useAnimationControls();

  // useEffect(() => {
  //   async function fetchApi() {
  //     const response = await axios.get("http://localhost:4000/api/subject/");
  //     console.log(response.data.subjects);
  //   }
  //   fetchApi();
  // }, []);

  function attach() {
    document.querySelector("img.arrow").addEventListener("click", () => {
      window.scrollTo({
        top: 315,
        behavior: "smooth",
      });
    });
  }
 
  document.addEventListener("scroll", () => {
    console.log(scrollYProgress.current)
    if(scrollYProgress.current >= 0.4) {
      fadeControls.start({
       opacity: 1,
        transition: { duration: 0.3 },
      })
      document.querySelector("img.arrow").style.opacity = 0;
    } else {
      document.querySelector("img.arrow").style.opacity = 1;
      fadeControls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      })
    }
  })

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
        HackRU Goated Project
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
            <h1>Choose your subject:</h1>
            <div className="row">
              <div className="column">
                <div className="subject-container">Math</div>
                <div className="subject-container">English</div>
                <div className="subject-container">Chemistry</div>
                <div className="subject-container">History</div>
              </div>
              <div className="column">
                <div className="subject-container">Biology</div>
                <div className="subject-container">Physics</div>
                <div className="subject-container">Foreign Languages</div>
              </div>
            </div>
          </motion.div>
    </div>
  );
};
