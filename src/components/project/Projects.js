//import hooks
import React, { useEffect, useState } from "react";

//import icon & component
import { GrReactjs } from "react-icons/gr";

import { AiFillGithub } from "react-icons/ai";
import { SiJavascript, SiFirebase } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import ProjectCardtab from "./ProjectCardtab";

import { Container, Box, Typography, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

//import files & css
import "./project.css";
import data from "../data.json";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 730,
      lg: 1100,
    },
  },
});
function Projects() {
  let [projectCard, setProjectCard] = useState([]);
  let tabscount = Math.ceil(data.length / 6);
  let tabclickhandler = (e, start, end) => {
    document.querySelectorAll(".tab-box").forEach((box) => {
      box.classList.remove("active");
    });
    e.target.classList.add("active");
    showprojects(start, end);
  };
  let showprojects = (start, end) => {
    let show = [];

    for (let i = start; i < end; i++) {
      //there will be one data more if this is disable
      if (i <= data.length - 1) {
        show.push(<ProjectCard {...data[i]} />);
      }
    }

    setProjectCard(show);
  };
  useEffect(() => {
    showprojects(0, 6);
    document.querySelector(".tab-box").classList.add("active");
  }, []);

  return (
    <Box component={"section"} className="projects" id="projects">
      <Container maxWidth={"xl"}>
        {/*Heading*/}
        <Box>
          <Typography variant="h4" color="#fff" textAlign={"center"}>
            My Projects {<GrReactjs />}
          </Typography>
          <Typography variant="body1" color="#fff">
            this is my projects made with JS & React{" "}
            <Button
              sx={{
                color: "white",
                "&:hover .pop-up": { display: "block" },
                position: "relative",
              }}
            >
              ?
              <Box
                className="pop-up"
                sx={{
                  left: "12px",
                  width: "250px",
                  bottom: "37px",
                  display: "none",
                  position: "absolute",
                  backgroundColor: "black",
                  padding: "3px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    height: "0",
                    width: 0,
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "15px solid black",
                    bottom: "-11px",
                    left: "10px",
                  },
                }}
              >
                <Typography variant="overline">
                  Hover card to find This Icons
                </Typography>
                <Typography variant="overline" display={"block"}>
                  <AiFillGithub /> link to project repository
                </Typography>
                <Typography variant="overline" display={"block"}>
                  <SiJavascript /> <GrReactjs />
                  used Technology
                </Typography>
                <Typography variant="overline" display={"block"}>
                  <SiFirebase />
                  link To Hosted Demo
                </Typography>
              </Box>
            </Button>
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
