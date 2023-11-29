//import component
import { Col, Row, Container } from "react-bootstrap";

//import img
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
//import style
import "bootstrap/dist/css/bootstrap.min.css";

import "./end.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon fix-icon">
              <a href="#">
                <img src={navIcon1} alt="icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="icon" />
              </a>
              <p>copy right 2023@ Reserved for Sife Ashraf</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
