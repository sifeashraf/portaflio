//import component

//import style
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

//import icon
import { SiFirebase } from "react-icons/si";

export default function ProjectCard({
  imgurl,
  title,
  description,
  projectlink,
  icon,
  githubicon,
  githublink,
}) {
  // let scroll = function (pramter) {
  //   setTimeout(() => {
  //     pramter();
  //   }, 60);
  // };
  let timeout = function (parameter) {
    setTimeout(() => parameter(), 1000);
};


let [data,setdata] = useState(false)



let target = document.querySelectorAll(".project-card-container .main");

let isElementOnScreen = (element) => {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function handleScroll() {
    target.forEach(function (element) {
        if (isElementOnScreen(element)) {
 
            if (!element.classList.contains("visible")) {
            element.classList.add("visible");
          }
          return
        } else {
            // Optionally, you can remove the class if the element is not on the screen
            element.classList.remove("visible");
        }
    });
    timeout(handleScroll);
}

// Initial invocation to check visibility on page load
timeout(handleScroll);

  let handlehover = (e) => {
    let temp;
    if (e.target.parentNode.classList.value === "project-box") {
      temp = e.target.parentNode;
    } else if (
      e.target.parentNode.parentNode.classList.value === "project-box"
    ) {
      temp = e.target.parentNode.parentNode;
    }

    if (e.type === "mouseenter") {
      document.querySelectorAll(".project-box").forEach((card) => {
        if (card !== temp) {
          card.classList.add("filter");
        }
      });
    } else if (e.type === "mouseleave") {
      document.querySelectorAll(".project-box").forEach((card) => {
        card.classList.remove("filter");
      });
    }
  };

  return (
    <motion.div
      className="main"
      key={Math.floor(Math.random() * 10000)}
      layout
      transition={{ duration: 0.5 }}
      initial={{ transform: `translateY(40px)`, opacity: 0.1 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
    >
      <div
        className="project-box"
        onMouseEnter={(e) => handlehover(e)}
        onMouseLeave={(e) => handlehover(e)}
        id={Math.floor(Math.random() * 10000)}
      >
        <div
          style={{ top: "4px", transition: " 0.15s all linear" }}
          href="#"
          className="icon"
        >
          {icon}{" "}
        </div>
        <a
          style={{
            top: "45px",
            color: "white",
            transition: " 0.3s all linear",
          }}
          href={githublink}
          className="icon"
          target="_blank"
        >
          {githubicon}
        </a>
        {projectlink && (
          <a
            style={{
              top: "90px",
              color: "white",
              transition: " 0.5s all linear",
            }}
            href={projectlink}
            className="icon"
            target="_blank"
          >
            {<SiFirebase />}
          </a>
        )}
        <div className="img" style={{ backgroundImage: `url(${imgurl})` }} />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </motion.div>
  );
}
