import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom"



export default function Footer() {
  return (
    <footer className="bg-oxfordBlue md:sticky bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="md:mr-auto md:ml-4 md:py-0 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-goldGolden justify-center">
        <div>         
          <a
           href="https://www.linkedin.com/in/j-velez-fiserv/" className="mr-5 ">
          <img className="object-cover object-center rounded mt-6"
            alt="hero"
            src="./linkedin-social-media-svgrepo-com.svg"></img>           
          </a> 
       </div>
       {/* <div>
       <a
           href="https://github.com/JVelezFD" className="mr-5 ">
          <img className="object-cover object-center rounded mt-6"
            alt="hero"
            src="./github.png"></img>           
          </a>
          </div>  */}
        </div>
      
   
        
      </div>
    </footer>
  );
}
