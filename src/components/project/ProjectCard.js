import React from "react";
//import style
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

//import icon
import { SiFirebase } from "react-icons/si";

// import icon
import { AiFillGithub } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

import { Grid, Paper, Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

let iconstyle = {
  position: "absolute",
  right: "-40px",
  fontSize: "32px",
  zIndex: 3,
  color: "white",
};

let mainvariant = {
  view: {
    y: [40, 0],
    opacity: [0, 1],
  },
};

const Item = styled(Paper)({
  textAlign: "center",
});
let ProjectCard = (
  {
    imgurl,
    title,
    description,
    projectlink,
    tecnology,
    githublink,
    imgurl_small,
    index,
  },
  ref
) => {
  let handlehover = (e) => {
    //   let temp;
    //   if (e.target.parentNode.classList.value === "project-box") {
    //     temp = e.target.parentNode;
    //   } else if (
    //     e.target.parentNode.parentNode.classList.value === "project-box"
    //   ) {
    //     temp = e.target.parentNode.parentNode;
    //   }
    //   if (e.type === "mouseenter") {
    //     document.querySelectorAll(".project-box").forEach((card) => {
    //       if (card !== temp) {
    //         card.classList.add("filter");
    //       }
    //     });
    //   } else if (e.type === "mouseleave") {
    //     document.querySelectorAll(".project-box").forEach((card) => {
    //       card.classList.remove("filter");
    //     });
    //   }
  };
  return (
    <Grid
      xs={12}
      sm={6}
      lg={4}
      component={motion.div}
      className="main"
      layout
      transition={{ duration: 1 }}
      variants={mainvariant}
      whileInView="view"
      item
    >
      <Item
        className="project-box"
        onMouseEnter={(e) => handlehover(e)}
        onMouseLeave={(e) => handlehover(e)}
        id={Math.floor(Math.random() * 10_000)}
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${require(`../../assets/img/project_image/${imgurl_small}`)})`,
          position: "relative",
          overflow: "hidden",
          borderRadius: "15px",
          "&::before": {
            content: '""',
            width: "100%",
            height: "0%",
            position: "absolute",
            top: 0,
            left: 0,
            background:
              "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)",
            transition: "1s ease-in-out all",
            overflow: "hidden",
            zIndex: 1,
          },
          "&:hover": {
            "&::before": {
              height: "100%",
              opacity: "0.7",
            },
          },
          "&:hover .icon": {
            right: "8px",
          },
        }}
      >
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Box
            style={{ transition: " 0.15s all linear" }}
            top={4}
            href="#"
            sx={iconstyle}
            className="icon"
          >
            {tecnology === "React" ? <GrReactjs /> : <SiJavascript />}
          </Box>
          <Link
            style={{ transition: " 0.5s all linear" }}
            top={45}
            sx={iconstyle}
            href={githublink}
            className="icon"
            target="_blank"
          >
            <AiFillGithub />
          </Link>
          {projectlink && (
            <Link
              style={{ transition: " 0.80s all linear" }}
              sx={iconstyle}
              top={90}
              href={projectlink}
              className="icon"
              target="_blank"
            >
              <SiFirebase />
            </Link>
          )}
        </Box>

        <img
          style={{ opacity: 0 }}
          className="img"
          loading="lazy"
          src={require(`../../assets/img/project_image/${imgurl}`)}
          alt="image of project"
          id={index}
          ref={ref}
        />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </Item>
    </Grid>
  );
};
export default React.forwardRef(ProjectCard);
