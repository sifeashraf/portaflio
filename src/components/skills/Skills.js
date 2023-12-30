//import component
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Percentgecircle from "./PircntgeCircle";
import { motion } from "framer-motion";

//import img
import colorSharp from "../../assets/img/color-sharp.png";

//import style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./skills.css";

export default function Skills() {
  var settings = {
    loops: false,
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 0,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          Infinity: false,
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let textvariant = {
    initial: {
      opacity: 0,
      y: 70,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      className="skills"
      id="skills"
      variants={textvariant}
      initial="initial"
      animate="animate"
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className="skill-box inside">
              <h2 className="skill-header">Skills</h2>
              <p className="skill-header-text">
                this is my Knowledge of programming langue over time
              </p>

              <Slider {...settings} className="slider-inner">
                <Percentgecircle
                  colors={"white"}
                  off={90}
                  skill={"html"}
                  boxShadow={"green"}
                  id={1}
                />
                <Percentgecircle
                  colors={"white"}
                  off={85}
                  skill={"css"}
                  boxShadow={"green"}
                  id={2}
                />
                <Percentgecircle
                  colors={"white"}
                  off={70}
                  skill={"javascript"}
                  boxShadow={"green"}
                  id={3}
                />
                <Percentgecircle
                  colors={"white"}
                  off={60}
                  skill={"react"}
                  boxShadow={"green"}
                  id={4}
                />
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="back " />
    </motion.section>
  );
}
