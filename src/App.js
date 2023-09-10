import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Bot from "./components/Bot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hireme from "./components/Hireme";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;