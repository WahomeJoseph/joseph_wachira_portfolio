import React from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div className="bg-bgcolor flex-col w-full min-h-screen p-4 md:p-12 space-y-4"
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.2} }}>
      <h2 className="text-xl md:text-2xl font-semibold text-uscgold text-center">About Me</h2>

      <div className="flex flex-col md:flex-row w-full px-4 md:px-8 gap-4 items-center justify-center">
        <img src="./MAU_0026.JPG" alt="" className="w-48 h-48 md:w-96 md:h-96 rounded-full"/>

        <div className="flex flex-col px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 m-2 w-full items-center justify-between">
            <div className="flex flex-col items-center justify-center space-x-2 p-4 m-4 shadow-lg border-b-2 border-b-uscgold rounded-b-md">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-[#cccccc] text-center">Web Development & Design</span>
            </div>
            <div className="flex flex-col items-center justify-center space-x-2 p-4 m-4 shadow-lg border-b-2 border-b-uscgold rounded-b-md">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-[#cccccc] text-center">Backend Development</span>
            </div>
            <div className="flex flex-col items-center justify-center space-x-2 p-4 m-4 shadow-xl border-b-2 border-b-uscgold rounded-b-md">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-txtcolor text-center">Technical User Support</span>
            </div>
          </div>

          <div className="items-center">
            <p className="text-justify text-txtcolor">
              I am a Full Stack Web Developer with a background in Computer Science and a passion for creating web applications. I have experience in building web applications using JavaScript, React, Node.js, and Express. I am a fast learner and a team player with excellent communication skills. I am excited to bring my skills to a team that values collaboration and creativity.
            </p> 
            <br />
            <p className="text-justify text-txtcolor">
              I am a Full Stack Web Developer with a background in Computer Science and a passion for creating web applications. I have experience in building web applications using JavaScript, React, Node.js, and Express. I am a fast learner and a team player with excellent communication skills. I am excited to bring my skills to a team that values collaboration and creativity.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
