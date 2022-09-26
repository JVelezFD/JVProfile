import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {     
  return (
  <main className="text-goldGolden bg-richBlack bg-inherit body-font">
    <Router>
     <Navbar />
       <Routes>       
        <Route path ="/about" element={<About/>}/>
        <Route path ="/projects" element={<Projects/>} />
        <Route path ="/skills" element={<Skills/>}/>
        <Route path ="/contact" element={<Contact/>}/> 
        <Route path ="/" exact element={<About/>}/>
        </Routes>
    </Router>   
    </main> 
  );
}


