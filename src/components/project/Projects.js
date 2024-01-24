//import hooks
import React, { useEffect, useState } from "react";

//import icon

import { GrReactjs } from "react-icons/gr";
//import files
import ProjectCard from "./ProjectCard";
import ProjectCardtab from "./ProjectCardtab";
import "./project.css";
import data from "../data.json";
//import boot strap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

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
    <section className="projects" id="projects">
      <Container fluid={"xxl"}>
        <div className="data-header">
          <h2>Projects {<GrReactjs />}</h2>
          <p>this is my projects made with js&React </p>
        </div>
        <ProjectCardtab
          tabclickhandler={tabclickhandler}
          tabscount={tabscount}
        />
        <div className="data-card-container">{projectCard}</div>
      </Container>
    </section>
  );
}
export default Projects;
