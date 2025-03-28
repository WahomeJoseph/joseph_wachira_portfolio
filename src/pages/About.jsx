/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Animate } from '../components/Animate';

export default function About() {

  return (
    <motion.div className="flex flex-col w-full min-h-screen font-montserrat px-4">
      <h2 className="text-[2rem] font-bold uppercase text-[#ddd6cb] mt-24 mb-4 text-center">About Me</h2>
      <span className='text-base font-semi-bold text-[#ddd6cb] mb-4 text-center'>𝓦𝓱𝓪𝓽 𝓘 𝓭𝓸</span>

      <div className="flex flex-col md:flex-row w-full px-4 md:px-8 gap-4 items-center justify-center">
        {/* <motion.img
          src="././DSC_6976.jpg"
          alt="jw"
          whileHover={{ scale: 1.12 }}
          className="w-64 h-64 rounded-tr-xl rounded-bl-xl object-cover float-right md:w-1/3 md:h-auto" /> */}

        <div className="flex flex-col px-4 sm:px-2 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 z-1 opacity-100 items-center">

            <div className="flex flex-col items-center justify-center p-6 border border-pink-700/30 rounded-xl h-full 
                hover:scale-[1.02] hover:shadow-lg 
                transition-all duration-300 ease-in-out 
                bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                group cursor-default">
              <div className="p-4 mb-4 rounded-full bg-pink-700/10 group-hover:bg-pink-700/20 transition-colors duration-300">
                <FaCode className="text-3xl text-pink-400 group-hover:text-pink-300" />
              </div>

              <h3 className="text-xl font-semibold text-center text-white mb-2">
                Frontend Development & Design
              </h3>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['HTML5', 'CSS3', 'React', 'Tailwind', 'SCSS', 'Next.js', 'MUI'].map((skill) => (
                  <span key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-gray-700/60 text-gray-200 
                       group-hover:bg-pink-900/30 group-hover:text-pink-100
                       transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* backend */}
            <div className="flex flex-col items-center justify-center p-6 border border-pink-700/30 rounded-xl h-full 
                hover:scale-[1.02] hover:shadow-lg 
                transition-all duration-300 ease-in-out 
                bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                group cursor-default">
              <div className="p-4 mb-4 rounded-full bg-pink-700/10 group-hover:bg-pink-700/20 transition-colors duration-300">
                <FaCode className="text-3xl text-pink-400 group-hover:text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-3">
                Backend Development
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Node.js', 'Express', 'PHP', 'MySQL', 'MongoDB', 'REST API'].map((skill) => (
                  <span key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-gray-700/60 text-gray-200 
                       group-hover:bg-pink-900/30 group-hover:text-pink-100
                       transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* QA/QE */}
            <div className="flex flex-col items-center justify-center p-6 border border-pink-700/30 rounded-xl h-full 
                hover:scale-[1.02] hover:shadow-lg 
                transition-all duration-300 ease-in-out 
                bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                group cursor-default">
              <div className="p-4 mb-4 rounded-full bg-pink-700/10 group-hover:bg-pink-700/20 transition-colors duration-300">
                <FaCode className="text-3xl text-pink-400 group-hover:text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-3">
                Quality Assurance
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Cypress', 'Jest', 'Jira', 'Manual Testing', 'API Testing', 'Code Review'].map((skill) => (
                  <span key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-gray-700/60 text-gray-200 
                       group-hover:bg-pink-900/30 group-hover:text-pink-100
                       transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* tech */}
            <div className="flex flex-col items-center justify-center p-6 border border-pink-700/30 rounded-xl h-full 
                hover:scale-[1.02] hover:shadow-lg 
                transition-all duration-300 ease-in-out 
                bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                group cursor-default">
              <div className="p-4 mb-4 rounded-full bg-pink-700/10 group-hover:bg-pink-700/20 transition-colors duration-300">
                <FaCode className="text-3xl text-pink-400 group-hover:text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-3">
                Technical User Support
              </h3>
              <p className="text-center text-sm text-gray-300 px-4 group-hover:text-blue-100 transition-colors">
                Provide user support ensuring proper hardware and software functionality
              </p>
            </div>
          </div>

          <div className="relative max-w-3xl mx-auto p-6 md:p-10">
            <ul role="list" className="space-y-6">
              <Animate>
                <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-200">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-700/20 text-pink-700 font-bold">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#ddd6cb] mb-1">Full Stack Web Development</h3>
                    <p className="text-txtcolor leading-relaxed">
                      JavaScript specialist with expertise in React, Node.js, and Express.
                      Strong computer science foundation with excellent problem-solving skills.
                      Collaborative team player passionate about building scalable web applications.
                    </p>
                  </div>
                </li>
              </Animate>

              <Animate>
                <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-200">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-700/20 text-pink-700 font-bold">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#ddd6cb] mb-1">Quality Assurance</h3>
                    <p className="text-txtcolor leading-relaxed">
                      Experienced in both manual and automated testing with Cypress and Jest.
                      Detail-oriented bug hunter with expertise in test case design and defect tracking.
                      Committed to delivering flawless user experiences through rigorous testing.
                    </p>
                  </div>
                </li>
              </Animate>

              <Animate>
                <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-200">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-700/20 text-pink-700 font-bold">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#ddd6cb] mb-1">Technical User Support</h3>
                    <p className="text-txtcolor leading-relaxed">
                      Customer-focused troubleshooter with hardware/software expertise.
                      Proven track record of resolving complex technical issues efficiently.
                      Passionate about delivering exceptional support and improving user satisfaction.
                    </p>
                  </div>
                </li>
              </Animate>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
