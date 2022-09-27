import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { ChipIcon } from "@heroicons/react/solid";

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
        <Route path ="/" exact element={<Home/>}/>
        </Routes>
    </Router>   
    </main> 
  );
}


const Home = () => {
  return (
    <section id="skills" className = "bg-richBlack">
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20 text-goldGolden">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-goldGolden mb-4">
          Welcome to my Porfolio</h1>
      </div>
      </div>
      </section>)
        
};