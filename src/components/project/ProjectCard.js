//import style
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

//import icon
import { SiFirebase } from "react-icons/si";

// import icon
import { AiFillGithub } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

export default function ProjectCard({
  imgurl,
  title,
  description,
  projectlink,
  tecnology,
  githublink,
  imgurl_small,
}) {
  console.log(imgurl_small);
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
  let mainvariant = {
    view: {
      y: [40, 0],
      opacity: [0, 1],
    },
  };

  return (
    <motion.div
      className="main"
      key={Math.floor(Math.random() * 10000)}
      layout
      transition={{ duration: 1 }}
      variants={mainvariant}
      whileInView="view"
    >
      <div
        className="project-box"
        onMouseEnter={(e) => handlehover(e)}
        onMouseLeave={(e) => handlehover(e)}
        id={Math.floor(Math.random() * 10000)}
        // style={{
        //   backgroundImage: require(`url(../../assets/img/project_image/${imgurl_small})`),
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div
          style={{ top: "4px", transition: " 0.15s all linear" }}
          href="#"
          className="icon"
        >
          {tecnology === "React" ? <GrReactjs /> : <SiJavascript />}
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
          <AiFillGithub />
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
        <img
          className="img"
          loading="lazy"
          src={require(`../../assets/img/project_image/${imgurl}`)}
          alt="img of"
        />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </motion.div>
  );
}
