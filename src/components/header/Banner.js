//import hooks
import React, { useEffect, useState } from "react";
//import component
import { Col, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Downloader from "./Downloader";
//import img
import { FiArrowRightCircle } from "react-icons/fi";
import headerimg from "../../assets/img/header-img.svg";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  //text is the text that being prooced
  const [text, setText] = useState("");
  //delta is the time btweeen charcher
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "FrontEnd Devloper ",
    "Javascript Devloper",
    "React Devloper",
  ];
  //period is the time between words

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 100);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  let tick = () => {
    //on init loopnum 0 torotate.length =  2
    let i = loopNum % toRotate.length;
    //on init fulltext will be first word
    let fullText = toRotate[i]; //devloper
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevdelta) => prevdelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Row>
        <Col xs={12} md={6} xl={7} className="align">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <div className="tagline"> welcome to my proraflio</div>
                <h1>
                  {"Hi i'm a Sife "}
                  <div className="wrap">{text}</div>
                </h1>
                <p>
                  hello Iam sife sife Ashfraf iam front end devloper that
                  started front joyrny from year and have iam now 20 years old
                  and at collge{" "}
                  <a href="https://www.facebook.com/profile.php?id=100068730871445">
                    Faculty of Sharia and Law, Al-Azhar
                  </a>{" "}
                  and i live on Alex
                </p>
                <button className="button">
                  <span>
                    <Downloader />
                    <FiArrowRightCircle size={25} />
                  </span>
                </button>
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <img
                  src={headerimg}
                  alt="Header img"
                  style={{ width: "100%" }}
                />
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </section>
  );
}
