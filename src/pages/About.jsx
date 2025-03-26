/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Animate } from '../components/Animate';

export default function About() {

  return (
    <motion.div className="flex flex-col w-full min-h-screen font-montserrat px-4">
      <h2 className="text-4xl font-bold uppercase text-[#ddd6cb] mt-24 mb-4 text-center">About Me</h2>
      <span className='text-base font-semi-bold text-[#ddd6cb] mb-4 text-center'>𝓦𝓱𝓪𝓽 𝓘 𝓭𝓸</span>

      <div className="flex flex-col md:flex-row w-full px-4 md:px-8 gap-4 items-center justify-center">
        {/* <motion.img
          src="././DSC_6976.jpg"
          alt="jw"
          whileHover={{ scale: 1.12 }}
          className="w-64 h-64 rounded-tr-xl rounded-bl-xl object-cover float-right md:w-1/3 md:h-auto" /> */}

        <div className="flex flex-col px-4 sm:px-2 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 z-1 opacity-100 items-center">
            <div className="flex sm:text-sm sm:p-2 md:p-3 border border-[#000fff] shadow-md rounded-md h-full shadow-gpoppy flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-200 space-y-2 m-4">
              <FaCode className="text-2xl" />
              <span className="text-txtcolor text-xl text-center">Frontend Development & Design</span>
              <span className="text-center font-semi-bold text-sm text-txtspan">HTML5 &nbsp; CSS3 &nbsp; React Js &nbsp; TailWind CSS &nbsp; SCSS &nbsp; Next JS &nbsp; Material UI</span>
            </div>
            <div className="flex sm:text-sm sm:p-2 md:p-3 border border-[#000fff] sm:p-2 shadow-md rounded-md h-full shadow-gpoppy flex-col items-center justify-center  hover:scale-105 transition-all ease-in-out duration-200 space-y-2 m-4">
              <FaCode className="text-2xl" />
              <span className="text-txtcolor text-xl text-center">Backend Development</span>
              <span className="text-center font-semi-bold text-sm text-txtspan">Node Js &nbsp; Express Js &nbsp; PHP &nbsp; MYSQL &nbsp; Mongo DB &nbsp; Restful API</span>
            </div>
            <div className="flex sm:text-sm sm:p-2 md:p-3 border border-[#000fff] sm:p-2 shadow-md rounded-md h-full shadow-gpoppy flex-col items-center justify-center  hover:scale-105 transition-all ease-in-out duration-200 space-y-2 m-4">
              <FaCode className="text-2xl" />
              <span className="text-txtcolor text-xl text-center">Quality Assurance</span>
              <span className="text-center font-semi-bold text-sm text-txtspan">Cypress &nbsp; Jest &nbsp; Docker &nbsp;Jira &nbsp; Manual Testing &nbsp; APIs Testing &nbsp; code review</span>
            </div>
            <div className="flex sm:text-sm sm:p-2 md:p-3 border border-[#000fff] sm:p-2 shadow-md rounded-md h-full shadow-gpoppy flex-col items-center justify-center  hover:scale-105 transition-all ease-in-out duration-200 space-y-2 m-4">
              <FaCode className="text-2xl" />
              <span className="text-txtcolor text-xl text-center">Technical User Support</span>
              <span className="text-center font-semi-bold text-sm text-txtspan">Provide user support ensuring proper hardware and software working.</span>
            </div>
          </div>

          <div className="relative items-center p-10 font-semi-bold">
            <ul role='list' className="space-y-4 py-6 text-gray-600">
              <Animate>
                <li className='flex items-center space-x-2'>
                  <span className="text-[#000fff] text-base font-bold">&#10003;</span>
                  <p className="text-justify text-txtcolor">
                    Full Stack Web Developer with a background in Computer Science. Skilled in JavaScript, React, Node.js, and Express. Fast learner and team player with strong communication skills. Excited to join a team that values collaboration and creativity.
                  </p>
                </li>
              </Animate>
              <Animate>
                <li className='flex items-center space-x-2'>
                  <span className="text-[#000fff] text-base font-bold">&#10003;</span>
                  <p className="text-justify text-txtcolor">
                    Have my hands on Quality Assurance and Software Testing. To gain experience in manual and automated testing, bug tracking, and test case design. I am detail-oriented, a problem solver, and a team player. Excited to ensure product quality and enhance user satisfaction.
                  </p>
                </li>
              </Animate>
              <Animate>
                <li className='flex items-center space-x-2'>
                  <span className="text-[#000fff] text-base font-bold">&#10003;</span>
                  <p className="text-justify text-txtcolor">
                    Have skills in Technical User Support. Experienced in troubleshooting, resolving issues, and providing exceptional customer service. Proficient in various software and hardware solutions. Excited to enhance user satisfaction and ensure seamless technical operations.
                  </p>
                </li>
              </Animate>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
