import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-oxfordBlue md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-olivine mb-4 md:mb-0">
          <Link to= "/about">
          <div className="ml-3 text-xl">
            Jesus Velez
          </div>
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-goldGolden justify-center">
          <Link to="/projects" >
          <div  className="mr-5 hover:text-pumpkin">
            Past Work
          </div>
          </Link>
          <Link to="/about" >
          <div  className="mr-5 hover:text-pumpkin">
            About Me
          </div>
          </Link>
          <Link to="/skills">
          <div  className="mr-5 hover:text-pumpkin">
            Skills
          </div>
          </Link>
          <div href="https://drive.google.com/file/d/15yObUP2aK-ncIojno4sWBFgwKeRukSKC/view" className="mr-5 hover:text-pumpkin">
            Resume
          </div>
          <div>
         
          <div
           href="https://www.linkedin.com/in/j-velez-fiserv/" className="mr-5 ">

          <img className="object-cover object-center rounded mt-6"
            alt="hero"
            src="./linkedin-social-media-svgrepo-com.svg"></img>
           
          </div>
         
          </div>
        </nav>
      
        
      <Link to= "/contact">
        <div className="inline-flex items-center bg-oxfordBlue border-0 py-1 px-3 focus:outline-none hover:bg-prussianBlue rounded text-goldGolden mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </div> 
      </Link>
        
      </div>
    </header>
  );
}
