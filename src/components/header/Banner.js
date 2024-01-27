//import hooks
import React, { useEffect, useState } from "react";
//import component
import { Col, Row } from "react-bootstrap";
import Downloader from "./Downloader";
import { motion } from "framer-motion";

//import img
import { FiArrowRightCircle } from "react-icons/fi";
import headerimg from "../../assets/img/header-img.webp";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  //text is the text that being proceed
  const [text, setText] = useState("");
  //delta is the time btweeen charcher
  const toRotate = [
    "FrontEnd Devloper ",
    "Javascript Devloper",
    "React Devloper",
  ];
  //period is the time between words

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, 100);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // let tick = () => {
  //   //on init loopnum 0 torotate.length =  2
  //   let i = loopNum % toRotate.length;
  //   //on init fulltext will be first word
  //   let fullText = toRotate[i]; //devloper
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);
  //   setText(updatedText);

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //   }
  // };

  let imgvariant = {
    animate: {
      y: [0, -70, 0],
      transition: {
        duration: 4.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="banner" id="home">
      <Row>
        <Col xs={12} md={6} xl={7} className="align">
          <div className="">
            <div className="tagline"> welcome to my proraflio</div>
            <h1>
              {"Hi i'm a Sife"}
              {/* <div className="wrap">{text}</div> */}
            </h1>
            <p>
              hello Iam sife sife Ashfraf iam front end devloper that started
              front joyrny from year and have iam now 20 years old and at collge{" "}
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
        </Col>
        <Col xs={12} md={6} xl={5}>
          <div className="header-img">
            <motion.img
              layout
              variants={imgvariant}
              animate="animate"
              src={headerimg}
              alt="Header img"
              style={{ width: "100%" }}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}
