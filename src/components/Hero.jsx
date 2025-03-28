/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiAlx } from "react-icons/si";
import { motion } from "framer-motion";

function Hero() {
  const messages = useMemo(() => ['React JS Development', 'Next JS Development', 'Tailwind CSS & CSS3', 'Shadcn & Material UI', 'Node JS Development', 'Quality Analyst'], []);
  const [message, setMessage] = useState(messages[0])
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % messages.length)
      setMessage(messages[messageIndex])
    }, 4000)

    return () => clearTimeout(timer)
  }, [messageIndex, messages])

  return (
    <div className="flex flex-col px-12 items-center justify-center w-full h-[100%] text-txtcolor bg-cover bg-center">
      <div>
        <img src='DSC_6976.jpg'
          alt="mine"
          className="w-60 h-60 mt-28 rounded-full object-cover" />
          {/* motion-scale-in-[1.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[1.5s]/scale motion-duration-[1.2s]/opacity motion-duration-[1.2s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier */}
      </div>
      <div className="flex flex-col items-center space-y-5 text-center justify-center w-full p-6">
        <p className="text-center text-[1.5rem] font-semi-bold text-txtcolor p-4 focus-in">
          <span className="text-[1.5rem] text-gpoppy">
            𝑰&apos;𝒎 𝑱𝒐𝒔𝒆𝒑𝒉 𝑾𝒂𝒄𝒉𝒊𝒓𝒂 𝙁𝙪𝙡𝙡 𝙎𝙩𝙖𝙘𝙠 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧
          </span> <br />
          <span className="text-[1.2rem] text-center tracking-wide text-[#ddd6cb] focus">&nbsp;
            with &nbsp; 3+ years of experience &nbsp; in {''}
          </span> <br />
          <span className="relative inline-block focus-in">
            <span className="text-[2rem] font-bold tracking-wide text-center whitespace-nowrap text-gpoppy overflow-hidden border-r border-[#ddd6cb] focus-in typing">
              {message}
            </span>
          </span>
        </p>

        <div className="flex sm:gap-10 items-center justify-between gap-6 p-2">
          <a href="https://docs.google.com/document/d/1rursKgMsUPkF0H77KJoMRdbUY6sdk8KrTn_Vli2eCtg/edit?usp=sharing">
            <button className="w-44 h-12 text-xl font-semi-bold bg-[#000fff] text-[#ddd6cb] slide-in-left rounded-md hover:border hover:border-[#ddd6cb] transform-all transition-ease-in-out duration-300">
              𝑹𝒆𝒔𝒖𝒎𝒆
            </button>
          </a>
          <Link to="/contact">
            <button className="w-44 h-12 text-xl font-semi-bold bg-transparent slide-in-right border border-gray-800 text-[#ddd6cb] rounded-md hover:bg-[#ddd6cb] hover:border hover:text-[#000] hover:border-[#ddd6cb] transform-all transition-ease-in-out duration-300">
              𝑯𝒊𝒓𝒆 𝑴𝒆
            </button>
          </Link>
        </div>
      </div>

      {/* image part */}
      <div className="flex flex-col items-center sticky justify-center w-full p-4">
        <ul className="flex flex-row flex-wrap items-center justify-center gap-6 space-x-6">
          <motion.a
            animate={{ rotate: 360 }}
            transition={{ type: "tween", duration: 0.4 }}
            whileHover={{ scale: 1.5 }}
            href="https://github.com/WahomeJoseph"
            className="text-xl md:text-2xl text-[#ddd6cb] ">
            <FaGithub />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://www.linkedin.com/in/joseph-wachira-202a7023"
            className="text-xl md:text-2xl text-[#ddd6cb]">
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://x.com/WachiraJoseph17?t=KGERM4FElIAFfhTfLpCMyw&s=09"
            className="text-xl md:text-2xl text-[#ddd6cb] ">
            <FaXTwitter />
          </motion.a>
          <motion.a
            transition={{ type: "tween", duration: 0.8 }}
            whileHover={{ scale: 1.5 }}
            href="https://ehub.alxafrica.com/profile/9478f7ba-427f-430b-9e77-5d952f10f284"
            className="text-xl md:text-2xl text-[#ddd6cb] ">
            <SiAlx />
          </motion.a>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
