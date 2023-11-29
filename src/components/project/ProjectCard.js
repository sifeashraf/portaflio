//import component
import { Col } from "react-bootstrap";

//import style

import "bootstrap/dist/css/bootstrap.min.css";

export default function ProjectCard({ imgurl, title, description, icon }) {
  return (
    <Col sm={6} md={6} lg={4} className="main" key={Math.floor(Math.random() * 10000)}>
      <div className="project-box">
        <span className="icon">{icon}</span>
        <img src={imgurl} alt="project img" />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
