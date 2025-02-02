/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaAnglesDown, FaXTwitter } from "react-icons/fa6";
import { SiAlx } from "react-icons/si";
import { motion } from "framer-motion";

function Hero() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const messages = useMemo(() => ['React JS Development', 'Next JS Development', 'Node JS Development', 'Tailwind CSS', 'Shadcn & Material UI'], []);
  const [message, setMessage] = useState(messages[0])
  const [messageIndex, setMessageIndex] = useState(0)
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % messages.length)
      setMessage(messages[messageIndex])
    }, 4000)

    return () =>  clearTimeout(timer)
  }, [messageIndex, messages])

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects(prev => (prev < 20 ? prev + 2 : prev));
      setExperience(prev => (prev < 3 ? prev + 1 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleShow = () => {
    setShowMore(!showMore);
    navigate("/about" , "/skills" , "/projects");
  };

  return (
    <motion.div
      className="flex flex-col px-12  md:flex-row items-center justify-center w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-txtcolor bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >
      <div className="flex flex-col items-center space-y-10 text-center md:items-start justify-center w-full md:w-1/2 p-6">
        <p className="text-center md:text-left text-xl md:text-2xl font-semi-bold text-txtcolor p-4">
          <span>Hello, <br /> I&apos;m &nbsp;</span>
          <span className="text-4xl md:text-4xl font-sans text-gpoppy">
            Joseph&nbsp;Wachira
          </span>{" "}
          <span className="text-xl md:text-2xl text-txtcolor">&nbsp;
            with&nbsp; +2 &nbsp;years&nbsp;of&nbsp;experience&nbsp;in {''} 
          </span>
          <span className="text-xl md:text-2xl font-sans text-gpoppy">
          {message}
          </span>{" "}
          <br />
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 m-4 md:m-8">
          <a href="https://docs.google.com/document/d/1rursKgMsUPkF0H77KJoMRdbUY6sdk8KrTn_Vli2eCtg/edit?usp=sharing">
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ type: "tween", duration: 1 }}
              className="w-44 h-12 text-lg md:text-xl font-semibold px-4 py-2 rounded-md shadow-md hover:bg-hgold hover:shadow-lg transition duration-300 bg-gbrown text-bgcolor">
              Resume
            </motion.button>
          </a>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ type: "tween", duration: 1 }}
              className="w-44 h-12 text-lg md:text-xl font-semibold px-4 py-2 rounded-md shadow-md hover:bg-hgold hover:shadow-lg transition duration-300 bg-gbrown text-bgcolor">
              Hire Me
            </motion.button>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          {/* <div className="flex gap-4">
            <span className="text-xl md:text-2xl text-txtcolor">Projects: {projects}</span>
            <span className="text-xl md:text-2xl text-txtcolor">Years of Experience: {experience}</span>
          </div> */}
          <motion.button
            transition={{ type: "spring", bounce: 5 }}
            onClick={handleShow}
            className="flex flex-col justify-center pl-28 items-center mt-2 md:mt-4" /* Reduced margin-top */ >
            <FaAnglesDown className="text-xl md:text-2xl text-uscgold hover:text-gpoppy transition duration-300" />
            <span className="text-uscgold text-lg md:text-xl mt-2">
              {showMore ? "Show Less" : "Show More"}
            </span>
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
        <motion.img
          src='/public/MAU_0026.JPG'
          alt="Animated"
          whileHover={{ scale: 1.12 }}
          className="w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 border-b-4 border-gpoppy rounded-full object-cover"/>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-6 space-x-6 md:space-x-4 mt-10" /* Reduced margin-top */>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://github.com/WahomeJoseph"
            className="text-xl md:text-2xl text-white hover:text-gpoppy">
            <FaGithub />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://www.linkedin.com/in/joseph-wachira-202a7023"
            className="text-xl md:text-2xl text-white hover:text-gpoppy">
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://mail.google.com/mail/"
            className="text-xl md:text-2xl text-white hover:text-gpoppy">
            <FaEnvelope />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://x.com/WachiraJoseph17?t=KGERM4FElIAFfhTfLpCMyw&s=09"
            className="text-xl md:text-2xl text-white hover:text-gpoppy">
            <FaXTwitter />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://ehub.alxafrica.com/profile/9478f7ba-427f-430b-9e77-5d952f10f284"
            className="text-xl md:text-2xl text-white hover:text-gpoppy">
            <SiAlx />
          </motion.a>
        </ul>
      </div>
    </motion.div>
  );
}

export default Hero;
