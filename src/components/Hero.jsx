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

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % messages.length)
      setMessage(messages[messageIndex])
    }, 4000)

    return () => clearTimeout(timer)
  }, [messageIndex, messages])

  const handleShow = () => {
    setShowMore(!showMore);
    navigate("/about");
  };

  return (
    <motion.div
      className="flex flex-col px-12 md:flex-row items-center font-montserrat justify-center w-full h-screen text-txtcolor bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>

      <div className="flex flex-col items-center space-y-10 text-center md:items-start justify-center w-full mt-12 md:w-1/2 p-6">
        <p className="text-center md:text-left text-xl md:text-2xl font-semi-bold text-txtcolor p-4 motion-scale-in-[0.5] motion-rotate-in-[-0.2deg] motion-blur-in-[10px] motion-delay-[1s]/rotate motion-delay-[1s]/blur">
          <span className="text-[4rem] font-sans text-gpoppy">I&apos;m &nbsp;</span>
          <span className="text-[3.5rem] font-montserrat text-gpoppy">
            Joseph&nbsp;Wachira
          </span><br />
          <span className="text-xl md:text-2xl tracking-wide text-txtcolor motion-preset-typewriter-[24]">&nbsp;
            with&nbsp; +2 &nbsp;years&nbsp;of&nbsp;experience&nbsp;in {''}
          </span> <br />
          <span className="text-xl tracking-wide md:text-2xl font-sans text-gpoppy">
            {message}
          </span>{" "}
          <br />
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 m-4 md:m-8">
          <a href="https://docs.google.com/document/d/1rursKgMsUPkF0H77KJoMRdbUY6sdk8KrTn_Vli2eCtg/edit?usp=sharing">
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ type: "tween", duration: 1 }}
              className="w-44 h-12 text-lg md:text-xl font-semibold border border-[#000fff] text-white rounded-md shadow-md transition-all duration-300 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
              Resume
            </motion.button>
          </a>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ type: "tween", duration: 1 }}
              className="w-44 h-12 text-lg md:text-xl font-semibold border border-[#000fff] text-white rounded-md shadow-md transition-all duration-300 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
              Hire Me
            </motion.button>
          </Link>
        </div>

        <div className="flex flex-col bg-transparent justify-center">
          <motion.div
            onClick={handleShow}
            className="flex flex-col justify-center pl-28 items-center mt-2" >
            <FaAnglesDown className="text-2xl text-txtspan transition-all duration-300" />
            <span className="text-txtspan text-lg md:text-xl mt-2">
              {showMore ? "Show Less" : "Show More"}
            </span>
          </motion.div>
        </div>
      </div>

      {/* image part */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
        <motion.img
          src='/public/MAU_0026.JPG'
          alt="Animated"
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.12 }}
          className="w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 border-b-4 border-gpoppy rounded-full object-cover motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[1s]/scale motion-duration-[1s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier" />

        <ul className="flex flex-row flex-wrap items-center justify-center gap-6 space-x-6 md:space-x-4 mt-10">
          <motion.a
            animate={{ rotate: 360 }}
            transition={{ type: "tween", duration: 0.4 }}
            whileHover={{ scale: 1.5 }}
            href="https://github.com/WahomeJoseph"
            className="text-xl md:text-2xl text-white hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
            <FaGithub />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://www.linkedin.com/in/joseph-wachira-202a7023"
            className="text-xl md:text-2xl text-white hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://mail.google.com/mail/"
            className="text-xl md:text-2xl text-white hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
            <FaEnvelope />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://x.com/WachiraJoseph17?t=KGERM4FElIAFfhTfLpCMyw&s=09"
            className="text-xl md:text-2xl text-white hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
            <FaXTwitter />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://ehub.alxafrica.com/profile/9478f7ba-427f-430b-9e77-5d952f10f284"
            className="text-xl md:text-2xl text-white hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
            <SiAlx />
          </motion.a>
        </ul>
      </div>
    </motion.div>
  );
}

export default Hero;
