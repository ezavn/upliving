import Benefit from "./components/Benefit";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Owner from "./components/Owner";
import Pro from "./components/Pro";
import Problem from "./components/Problem";
import Projects from "./components/Projects";
import Seminar from "./components/Seminar";
import Strategy from "./components/Strategy";
import Testi from "./components/Testi";
import Value from "./components/Value";
import Register from "./components/Register";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Expense from "./components/Expense";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    document.querySelectorAll("img").forEach((img) =>
      img.addEventListener("load", () => {
        AOS.refresh();
      })
    );
  }, []);
  return (
    <>
      <Hero />
      <Problem />
      <Value />
      <Strategy />
      <Owner />
      <Intro />
      <Benefit />
      <Projects />
      <Seminar />
      <Pro />
      <Expense />
      <Testi />
      <Register />
      <Footer />
    </>
  );
}

export default App;
