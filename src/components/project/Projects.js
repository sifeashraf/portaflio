//import hooks
import React, { useEffect, useState } from "react";

//import img
import project1 from "../../assets/img/project-img1.png";
import project2 from "../../assets/img/project-img2.png";
import project3 from "../../assets/img/project-img3.png";
//import icon
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
//import files
import ProjectCard from "./ProjectCard";
import ProjectCardtab from "./ProjectCardtab";
import "./project.css";
//import boot strap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  let [display, setdisplay] = useState([]);
  let project = [
    {
      key: 1,
      title: "start up project",
      description: `made with javascript`,
      imgurl: project1,
      icon: <SiJavascript />,
    },
    {
      key: 2,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project2,
      icon: <GrReactjs />,
    },
    {
      key: 3,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project3,
      icon: <GrReactjs />,
    },
    {
      key: 4,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project2,
      icon: <GrReactjs />,
    },
    {
      key: 5,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project3,
      icon: <GrReactjs />,
    },
    {
      key: 6,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project1,
      icon: <GrReactjs />,
    },
    {
      key: 7,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project2,
      icon: <GrReactjs />,
    },
    {
      key: 8,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project3,
      icon: <GrReactjs />,
    },
    {
      key: 9,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project1,
      icon: <GrReactjs />,
    },
    {
      key: 10,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project3,
      icon: <GrReactjs />,
    },
    {
      key: 11,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project2,
      icon: <GrReactjs />,
    },
    {
      key: 12,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project1,
      icon: <GrReactjs />,
    },
    {
      key: 13,
      title: "start up project",
      description: `made with javascript  `,
      imgurl: project3,
      icon: <GrReactjs />,
    },
  ];
  let tabscount = Math.ceil(project.length / 6);
  let tabclickhandler = (e, start, end) => {
    document.querySelectorAll(".tab-box").forEach((box) => {
      box.classList.remove("active");
    });
    e.target.classList.add("active");
    showusers(start, end);
  };
  let showusers = (start, end) => {
    let show = [];

    for (let i = start; i < end; i++) {
      if (i <= project.length - 1) {
        show.push(<ProjectCard {...project[i]} />);
      }
    }

    setdisplay(show);
  };
  //loop to add the projects-tabs on top of project

  useEffect(() => {
    showusers(0, 6);
    document.querySelector(".tab-box").classList.add("active");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects {<GrReactjs />}</h2>
            <p>this is my projects made with js&React </p>
            <ProjectCardtab tabclickhandler={tabclickhandler} tabscount={tabscount} />
            <div className="project-displayer">
              <Row>{display}</Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Projects;
