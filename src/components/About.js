import React, { useState } from "react";
import { Link } from "react-router-dom"
import MyModal from "./MyModal";

export default function About() {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  return (
    <section  id="about" className="bg-richBlack">
      <div className="container bg-richBlack mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-goldGolden">
            Hi, I'm Jesus.
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-goldGolden">
            I'm a Full Stack Dev, Artist, and Gamer. Always learning is my mantra.
          </p>
          <div className="flex justify-center">
            <Link to= "/contact">
            <div className="inline-flex text-goldGolden bg-oxfordBlue border-0 py-2 px-6 focus:outline-none hover:bg-prussianBlue rounded text-lg">
              Contact Me
            </div>
            </Link>
            <Link>
            <div>
              <a
              href="https://drive.google.com/file/d/1d59YgJpDZGpWoIft2JxOtftd8EtksXB5/view?usp=sharing"
              className=" ml-4 inline-flex text-goldGolden bg-oxfordBlue border-0 py-2 px-6 focus:outline-none hover:bg-prussianBlue rounded text-lg">
              Resume
              </a>
            </div>
            </Link>
            <Link to= '/projects'>
            <div className="ml-4 inline-flex text-oxfordBlue bg-lightGrey border-0 py-2 px-6 focus:outline-none hover:bg-prussianBlue hover:text-goldGolden rounded text-lg">
              See My Projects
            </div>
            </Link>
          </div>
        </div>

        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
            />
            <button onClick = {() => setShowMyModal(true)} className= "inline-flex text-goldGolden bg-oxfordBlue border-1 py-2 px-6 focus:outline-none hover:bg-prussianBlue rounded text-lg">More About Me</button>
            <div>
              <MyModal onClose ={handleOnClose} visible={showMyModal}/>
            </div>
        </div>
      </div>
    </section>
  );
}
