/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaGitAlt, FaGithub, FaDatabase, FaBriefcase } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostman, SiExpress } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { VscAzure } from "react-icons/vsc";

export default function SkillsCard() {
  const work = [
    { id: 1, position: 'Software Engineering Trainee', organization: 'Power Learn Project Africa', duration: 'Aug 2024 - Dec 2024', description: 'During this period, I gained several skills. For my project I successfully developed a telemedicine application aimed at improving healthcare accessibility, utilizing MYSQL,NodeJS,HTML,CSS. This experience honed my skills in coding,teamwork,communication and innovative problem-solving.' },
    { id: 2, position: 'Frontend Developer', organization: 'Dedan Kimathi', duration: 'Oct 2021 - Dec 2024', description: 'Worked on various personal web development projects, enhancing UI/UX with modern design principles. Gained proficiency in React, JavaScript, and HTML CSS.' },
    { id: 3, position: 'Quality Analyst', organization: 'Qace Academy', duration: 'Jan 2025 - Feb 2025', description: 'Conducted thorough testing of web applications, identifying and documenting bugs. Collaborated with developers to ensure high-quality software delivery. Enhanced skills in manual and automated testing, and gained experience with tools like Selenium and JIRA.' },
    { id: 4, position: 'Technical User Support', organization: 'University Of Nairobi', duration: 'Aug 2024 - Dec 2024', description: 'Provided technical user support at the University of Nairobi, assisting staff and students with IT-related issues. Gained hands-on experience in troubleshooting hardware and software problems, network configuration, and system maintenance.' },
  ];

  const skills = [
    { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-500 text-3xl" /> },
    { name: 'React JS', icon: <FaReact className="text-blue-500 text-3xl" /> },
    { name: 'Next JS', icon: <FaReact className="text-blue-500 text-3xl" /> },
    { name: 'Node JS', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
    { name: 'PHP', icon: <FaPhp className="text-purple-600 text-3xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-600 text-3xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-3xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500 text-3xl" /> },
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-600 bg-[#f1f1f1] text-3xl" />, altIcon: <FaGithub className="text-black text-3xl" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-600 text-3xl" /> },
    { name: 'APIs', icon: <FaDatabase className="text-gray-700 text-3xl" /> },
    { name: 'Azure AI', icon: <VscAzure className="text-blue-700 text-3xl" /> }
  ];

  return (
    <div className="flex w-full flex-col min-h-screen items-center justify-center px-2 py-6 md:px-8">
      <section className="sticky w-full bg-transparent p-6">
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 border-r-2 border-gpoppy rounded-sm h-full hidden md:block"></div> */}
        {work.map((work, index) => (
          <div key={work.id} className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full text-justify`}>
            <div className='w-full md:w-1/2 flex justify-center'>
              <div className='bg-transparent p-4 border border-gpoppy rounded-sm w-full md:w-3/4'>
                <div className='flex items-center mb-2'>
                  {/* <FaBriefcase className='text-uscgold text-xl' /> */}
                  <span className='text-xl text-[#f1f1f1] text-center font-bold'>{work.position}</span>
                </div>
                <div className='text-gpoppy text-center'>{work.organization}</div>
                <div className='text-gpoppy text-center'>{work.duration}</div>
                <div className='text-txtcolor text-justify'>{work.description}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills Marquee */}
      <div className="mt-8 w-full overflow-visible">
        <div className="marquee-container">
          <div className="marquee-content flex space-x-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-2xl bg-transparent text-txtcolor px-4 py-2 rounded-md shadow-xl whitespace-nowrap justify-center flex items-center space-x-2">
                {skill.icon || skill.altIcon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
