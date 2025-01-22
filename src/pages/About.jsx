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
          <div className="grid grid-cols-3 md:grid-cols-2 gap-4 p-4 m-2 w-full items-center justify-between">
            <div className="flex bg-bgcard shadow-md shadow-gpoppy flex-col items-center justify-center space-x-2 p-4 m-4">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-txtcolor text-center">Web Development & Design</span>
              <span className='text-center font-bold text-xl text-txtgpoppy'>HTML5, CSS3, React Js, TailWind CSS, SCSS</span>
            </div>
            <div className="flex bg-bgcard shadow-md shadow-gpoppy flex-col items-center justify-center space-x-2 p-4 m-4">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-txtcolor text-center">Backend Development</span>
              <span className='text-center font-bold text-xl text-txtgpoppy'>Node Js, Express Js, PHP, MYSQL, Mongo DB</span>
            </div>
            <div className="flex bg-bgcard shadow-md shadow-gpoppy flex-col items-center justify-center space-x-2 p-4 m-4">
              <FaCode className="text-xl text-uscgold" />
              <span className="text-txtcolor text-center">Quality Assuarance</span>
              <span className='text-center font-bold text-xl text-txtgpoppy'>Cypress, Jest, Manual Testing.Currently learning</span>
            </div>
          </div>

          <div className="items-center p-6 font-semibold">
            <p className="text-justify text-txtcolor">
              Full Stack Web Developer with a background in Computer Science. Skilled in JavaScript, React, Node.js, and Express. Fast learner and team player with strong communication skills. Excited to join a team that values collaboration and creativity.
            </p> <br />
            <p className="text-justify text-txtcolor">
              Have my hands on Quality Assurance and Software Testing. To gain experience in manual and automated testing, bug tracking, and test case design. I am detail-oriented, a problem solver, and a team player. Excited to ensure product quality and enhance user satisfaction.
            </p> <br />
            <p className="text-justify text-txtcolor">
              Have skills in Technical User Support. Experienced in troubleshooting, resolving issues, and providing exceptional customer service. Proficient in various software and hardware solutions. Excited to enhance user satisfaction and ensure seamless technical operations.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
