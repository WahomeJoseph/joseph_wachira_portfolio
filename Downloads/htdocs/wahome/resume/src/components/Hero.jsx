/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaAnglesDown, FaXTwitter } from "react-icons/fa6";

function Hero() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShowMore(!showMore);
    navigate("/about");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-bgcolor text-txtcolor">
      <nav id="navbar" className="w-full p-6 bg-transparent bg-opacity-90 shadow-customglow z-10 fixed top-0 border-b-2 border-b-gpoppy rounded-b-sm">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-4 md:p-6">
          <li className="text-xl md:text-2xl hover:text-underline-gpoppy">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl md:text-2xl hover:text-underline-gpoppy">
            <Link to="/about">About Me</Link>
          </li>
          <li className="text-xl md:text-2xl hover:text-underline-gpoppy">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="text-xl md:text-2xl hover:text-underline-gpoppy">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-xl md:text-2xl hover:text-underline-gpoppy">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <p className="text-center text-xl md:text-2xl font-semibold text-txtcolor p-4">
          <span>Hello, I&apos;m</span> <br />
          <span className="text-2xl md:text-3xl text-gpoppy">Joseph Wachira</span> <br />
          <span className="text-xl md:text-2xl text-txtcolor">a Software Developer</span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 m-4 md:m-8">
          <button className="w-44 h-12 text-lg md:text-xl font-semibold px-4 py-2 rounded-md shadow-md hover:bg-hgold hover:shadow-lg transition duration-300 bg-gbrown text-bgcolor">
            Download Resume
          </button>
          <Link to="/contact">
            <button className="w-44 h-12 text-lg md:text-xl font-semibold px-4 py-2 rounded-md shadow-md hover:bg-hgold hover:shadow-lg transition duration-300 bg-gbrown text-bgcolor">
              Hire Me
            </button>
          </Link>
        </div>

        {showMore && (
          <p className="text-uscgold text-lg md:text-xl text-center">Read More</p>
        )}

        <button onClick={handleShow} className="flex flex-col items-center mt-4 md:mt-8">
          <FaAnglesDown className="text-xl md:text-2xl text-uscgold hover:text-gpoppy transition duration-300" />
          <span className="text-uscgold text-lg md:text-xl mt-2">{showMore ? "Show Less" : "Show More"}</span>
        </button>

        <ul className="flex flex-row flex-wrap items-center justify-center space-x-4 md:space-x-6 mt-6">
          <a
            href="https://github.com/WahomeJoseph"
            className="text-xl md:text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-wachira-202a7023"
            className="text-xl md:text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://mail.google.com/mail/"
            className="text-xl md:text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/sayjo.e?igshid=YzljYTk1ODg3Zg=="
            className="text-xl md:text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/WachiraJoseph17?t=KGERM4FElIAFfhTfLpCMyw&s=09"
            className="text-xl md:text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaXTwitter />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
