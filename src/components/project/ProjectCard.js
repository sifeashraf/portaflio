//import hook
import React from "react";
//import style
import { motion } from "framer-motion";

//import icon

// import component and icon
import { Grid, Paper, Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ItemStyle } from "../ComponentStyle";

import { AiFillGithub } from "react-icons/ai";
import { SiJavascript, SiFirebase } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

const iconstyle = {
  position: "absolute",
  right: "-40px",
  fontSize: "32px",
  zIndex: 3,
  color: "white",
  transitionDelay: 5,
};

const mainvariant = {
  view: {
    y: [40, 0],
    opacity: [0, 1],
  },
};

const Item = styled(Paper)(ItemStyle);
export default function ProjectCard({
  imgurl,
  title,
  description,
  projectlink,
  tecnology,
  githublink,
  imgurl_small,
}) {
  return (
    <Grid
      xs={12}
      sm={6}
      lg={4}
      component={motion.div}
      className="main"
      layout
      transition={{ duration: 1 }}
      key={Math.floor(Math.random() * 10_0000)}
      variants={mainvariant}
      whileInView="view"
      item
    >
      <Item
        className="project-box"
        id={Math.floor(Math.random() * 10_000)}
        sx={{
          backgroundImage: `url(${require(`../../assets/img/project_image/${imgurl_small}`)})`,
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
          className="img"
          loading="lazy"
          src={require(`../../assets/img/project_image/${imgurl}`)}
          alt="image of project"
        />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </Item>
    </Grid>
  );
}
