//import hooks
import React, { useEffect, useState } from "react";

//import icon

import { GrReactjs } from "react-icons/gr";
//import files
import ProjectCard from "./ProjectCard";
import ProjectCardtab from "./ProjectCardtab";
import "./project.css";
import { project } from "../data";
//import boot strap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  let [projectCard, setProjectCard] = useState([]);

  let tabscount = Math.ceil(project.length / 6);
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
      //there will be one project more if this is disable
      if (i <= project.length - 1) {
        show.push(<ProjectCard {...project[i]} />);
      }
    }

    setProjectCard(show);
  };
  useEffect(() => {
    showprojects(0, 6);
    document.querySelector(".tab-box").classList.add("active");
  }, []);
  return (
    <section className="projects" id="projects">
      <Container fluid={"xxl"}>
        <div className="project-header">
          <h2>Projects {<GrReactjs />}</h2>
          <p>this is my projects made with js&React </p>
        </div>
        <ProjectCardtab
          tabclickhandler={tabclickhandler}
          tabscount={tabscount}
        />
        <div className="project-card-container">{projectCard}</div>
      </Container>
    </section>
  );
}
export default Projects;
