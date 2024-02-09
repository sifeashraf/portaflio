//import component
import {
  Container,
  Stack,
  Box,
  Typography,
  Link,
  useMediaQuery,
  styled,
} from "@mui/material";
import { BsLinkedin, BsWhatsapp, BsFacebook } from "react-icons/bs";

//import

//import style & img
import { iconContainer, iconBox } from "../ComponentStyle";
import "./end.css";

import logo from "../../assets/img/my-logo.webp";

const IconContainer = styled(Box)(iconContainer);
const Iconbox = styled(Link)(iconBox);

let datenow = new Date().getFullYear();
export default function Footer() {
  let screenwidth = useMediaQuery("(max-width:600px)");
  return (
    <Container
      maxWidth={false}
      className="footer"
      sx={{
        padding: "15px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${require("../../assets/img/footer-bg.webp")})`,
      }}
    >
      <Stack
        spacing={screenwidth ? 2 : 0}
        direction={screenwidth ? "column" : "row"}
        sx={{
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", sm: "50%" },
            maxWidth: "300px",
          }}
        >
          <img src={logo} style={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "45%" },
            display: screenwidth && "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconContainer sx={{ flexGrow: 1 }}>
            <Iconbox href="#">
              <div className="overlay" />
              <BsLinkedin className="icon" />
            </Iconbox>
            <Iconbox href="#">
              <div className="overlay" />
              <BsWhatsapp className="icon" />
            </Iconbox>
            <Iconbox href="#">
              <div className="overlay" />
              <BsFacebook className="icon" />
            </Iconbox>
          </IconContainer>
          <Typography variant="subtitle1" sx={{ textAlign: "right" }}>
            Copy Right @{datenow} for SifeAshraf
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
