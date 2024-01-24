// import hook
import React, { useState } from "react";
// import imgs
import contactimg from "../../assets/img/contact-img.webp";
//import copmponents
import { Col, Row, Container } from "react-bootstrap";
// immport style
import "bootstrap/dist/css/bootstrap.min.css";
import "./end.css";
export default function Contact() {
  let [formationdetail, setformationdetail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    messgae: "",
  });
  let [buttontext, setbuttontext] = useState("send");
  let [state, setstate] = useState({});
  let formationchange = (e) => {
    let Name = e.target.name;
    let value = e.target.value;
    setformationdetail({ ...formationdetail, [Name]: value });
  };
  let submithandler = async (e) => {
    e.preventDefault();
    setbuttontext("sendding...");
    let respone = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formationdetail),
    });
    let result = await respone.json();
    if (result.code === 200) {
      setstate({ success: true, messgae: "Message sent successfully" });
    } else {
      setstate({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactimg} alt="contact us" className="contact-image" />
          </Col>
          <Col md={6} className="right">
            <h2>Get In Touch</h2>
            <form onSubmit={submithandler}>
              <Row>
                <Col sm={6} className="">
                  <input
                    type="text"
                    value={formationdetail.firstname}
                    name="firstname"
                    placeholder="first Name"
                    onChange={(e) => formationchange(e)}
                  />
                </Col>
                <Col sm={6} className="">
                  <input
                    type="text"
                    value={formationdetail.lastname}
                    name="lastname"
                    placeholder="last Name"
                    onChange={(e) => formationchange(e)}
                  />
                </Col>
                <Col sm={6} className="">
                  <input
                    type="email"
                    value={formationdetail.email}
                    name="email"
                    placeholder="email"
                    onChange={(e) => formationchange(e)}
                  />
                </Col>
                <Col sm={6} className="">
                  <input
                    type="tell"
                    value={formationdetail.phone}
                    name="phone"
                    placeholder="phone"
                    onChange={(e) => formationchange(e)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={formationdetail.messgae}
                    placeholder="enter text"
                    name="messgae"
                    onChange={(e) => formationchange(e)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttontext}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
