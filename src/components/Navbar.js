import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";


export default function Navbar() {
  // let [contact] = useState(false);

  // const handleContactClick = () => {
  //   contact = true;
  //   console.log('They Want to contact me');
  // };

  return (
    <header className="bg-oxfordBlue md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-olivine mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jesus Velez
          </a>
         
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-goldGolden justify-center">
          <a href="#projects" className="mr-5 hover:text-pumpkin">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-pumpkin">
            Skills
          </a>
          <a href="https://drive.google.com/file/d/15yObUP2aK-ncIojno4sWBFgwKeRukSKC/view" className="mr-5 hover:text-pumpkin">
            Resume
          </a>
          <div>
         
          <a
           href="https://www.linkedin.com/in/j-velez-fiserv/" className="mr-5 ">

          <img className="object-cover object-center rounded mt-6"
            alt="hero"
            src="./linkedin-social-media-svgrepo-com.svg"></img>
           
          </a>
         
          </div>
        </nav>
      
        <button className="inline-flex items-center bg-oxfordBlue border-0 py-1 px-3 focus:outline-none hover:bg-prussianBlue rounded text-goldGolden mt-4 md:mt-0" >
      
        <a
          href="#contact"
          className="inline-flex items-center bg-oxfordBlue border-0 py-1 px-3 focus:outline-none hover:bg-prussianBlue rounded text-goldGolden mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> </button>
      </div>
    </header>
  );
}
 //</div>onClick={handleContactClick}