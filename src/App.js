import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



export default function App() {
  // state = {displayContact: false}

  // displayContact = () =>{
  //   this.setState({
  //     displayContact: !this.state.displayContact
  //   })
  // }

  return (
    <main className="text-goldGolden bg-richBlack body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact/>
    </main>
  );
}
