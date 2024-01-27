//import hooks
import React, { useEffect, useState, useRef } from "react";

//import icon

import { GrReactjs } from "react-icons/gr";
//import files
import ProjectCard from "./ProjectCard";
import ProjectCardtab from "./ProjectCardtab";
import "./project.css";
import data from "../data.json";
//import boot strap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Box, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
function Projects() {
  let imagesRef = useRef([]);
  let [imageState, setImageState] = useState();
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 730,
        lg: 1100,
      },
    },
  });
  let [projectCard, setProjectCard] = useState([]);
  let tabscount = Math.ceil(data.length / 6);
  let tabclickhandler = (e, start, end) => {
    document.querySelectorAll(".tab-box").forEach((box) => {
      box.classList.remove("active");
    });
    e.target.classList.add("active");
    showprojects(start, end);
  };

  useEffect(() => {
    showprojects(0, 6);
    document.querySelector(".tab-box").classList.add("active");
  }, []);

  let addrefitem = (img) => {
    if (imagesRef.current.includes(img)) {
      return;
    } else {
      imagesRef.current.push(img);
      setImageState(imagesRef.current);
    }
  };

  useEffect(() => {
    console.log(imageState);
  }, [imageState]);

  // useEffect(() => {
  //   if (projectCard.length > 0) {
  //     elemnt = elemnt.current;
  // let imgesContainer = elemnt.querySelectorAll(".main");
  // console.log(imgesContainer);
  //   }
  // }, []);

  // imgesContainer.forEach((imges) => {
  //   let img = imges.querySelector("img");
  //   console.log(img);
  //   if (img.complete) {
  //     img.classList.add("loaded");
  //   } else {
  //     img.addEventListener("load", () => {
  //       img.classList.add("loaded");
  //     });
  //   }
  // });

  let showprojects = (start, end) => {
    let show = [];

    for (let i = start; i < end; i++) {
      //there will be one data more if this is disable
      if (i <= data.length - 1) {
        show.push(<ProjectCard {...data[i]} index={i} ref={addrefitem} />);
      }
    }

    setProjectCard(show);
  };

  return (
    <Box component={"section"} className="projects" id="projects">
      <Container maxWidth={"xl"}>
        {/*Heading*/}
        <Box>
          <Typography variant="h4" color="#fff" textAlign={"center"}>
            My Projects {<GrReactjs />}
          </Typography>
          <Typography variant="body1" color="#fff">
            this is my projects made with js&React {<GrReactjs />}
          </Typography>
        </Box>
        {/* project tab bar*/}
        <ProjectCardtab
          tabclickhandler={tabclickhandler}
          tabscount={tabscount}
        />
        {/* cards */}
        <ThemeProvider theme={theme}>
          <Grid container className="data-card-container" sx={{ flexGrow: 1 }}>
            {projectCard}
          </Grid>
        </ThemeProvider>
      </Container>
    </Box>
  );
}
export default Projects;
