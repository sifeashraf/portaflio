//import component
import NavBar from "./components/header/NavBar.js";
import Banner from "./components/header/Banner.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/project/Projects.js";
import Contact from "./components/end/Contact.js";
import Footer from "./components/end/Footer.js";

//import style
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
