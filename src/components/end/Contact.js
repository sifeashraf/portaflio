// import React & hook
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // import imgs
import { createPortal } from "react-dom";
//import copmponents
import {
  Container,
  Box,
  Stack,
  Input,
  Typography,
  styled,
} from "@mui/material";
import Message from "./Message";
// immport style & img
import "./end.css";
import contactimg from "../../assets/img/contact-img.webp";

const ContactImgBox = styled(Box)({
  width: "60%",
  alignItems: "center",
  justifyContent: "center",
});
const ContactBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  flexGrow: 1,
});

export default function Contact() {
  const form = useRef(null);
  let [message, setMessage] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0m0qu9m",
        "template_9f2mldw",
        form.current,
        "T4GO531suqorlu4wu"
      )
      .then(
        () => {
          setMessage("ok");
        },
        () => {
          setMessage("bad");
        }
      );
  };
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 6000);
    }
  }, [message]);
  return (
    <Container sx={{ display: "flex" }} className="contact" maxWidth={false}>
      <ContactImgBox sx={{ display: { md: "flex", xs: "none" } }}>
        <img
          src={contactimg}
          alt="contact us"
          className="contact-image"
          style={{ width: "100%" }}
        />
      </ContactImgBox>
      <ContactBox className="contact-box">
        <Typography variant="h2">Conatact Me</Typography>
        <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
          <Stack
            direction={{ lg: "row", sm: "row", xs: "column" }}
            justifyContent="space-around"
          >
            <Input
              type="text"
              name="from_name"
              placeholder="Your Name OR Company Name"
              sx={{
                width: { xs: "98%", sm: "49%", lg: "49%" },
                "&::before": {
                  display: "none",
                },
                "&::after": {
                  display: "none",
                },
              }}
            />
            <Input
              type="email"
              name="from_email"
              placeholder="Your Email OR Company Email"
              sx={{
                width: { xs: "98%", sm: "49%", lg: "49%" },
                "&::before": {
                  display: "none",
                },
                "&::after": {
                  display: "none",
                },
              }}
            />
          </Stack>
          <Stack>
            <textarea rows={6} placeholder="Enter Message" name="message" />
          </Stack>
          <button type="submit" value="Send">
            <span>Submit</span>
          </button>
        </form>
      </ContactBox>
      {message &&
        createPortal(
          <Message status={message} />,
          document.querySelector("body")
        )}
    </Container>
  );
}
