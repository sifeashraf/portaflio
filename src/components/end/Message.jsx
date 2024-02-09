// import  hook
import { useState } from "react";
// import component & icon
import { BiXCircle, BiCheckCircle } from "react-icons/bi";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
export default function Message({ status }) {
  let [statusMessage, setStatusMessage] = useState(status);
  let text = status;
  const messagevariants = {
    in: {
      width: [0, 270],
      y: [30, 0],
    },
    out: {
      width: "270px",
      y: 0,
      x: "350px",
    },
  };
  setTimeout(() => {
    setStatusMessage(null);
  }, 5000);
  return (
    <Box
      component={motion.div}
      variants={messagevariants}
      animate={`${statusMessage ? "in" : "out"}`}
      transition={{ duration: 1 }}
      sx={{
        background: "white",
        position: "fixed",
        top: "90px",
        right: "15px",
        padding: "8px",
        borderRadius: "10px",
        color: "black",
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        width: 270,
      }}
    >
      {text === "ok" ? (
        <div>
          <BiCheckCircle
            style={{ color: "green", width: "35px", height: "30px" }}
          />
          Your message has been sent
        </div>
      ) : (
        text === "bad" && (
          <div>
            <BiXCircle
              style={{ color: "red", width: "35px", height: "30px" }}
            />
            <span>Error please contact me via face book</span>
          </div>
        )
      )}
    </Box>
  );
}
