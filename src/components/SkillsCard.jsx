/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaGitAlt, FaGithub, FaDatabase, FaBriefcase } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostman, SiExpress } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { VscAzure } from "react-icons/vsc";

export default function SkillsCard() {
  const work = [
    { id: 1, position: 'Software Engineering Intern', organization: 'Power Learn Project Africa', duration: '4 months', description: 'During this period, I gained several skills. For my project I successfully developed a telemedicine application aimed at improving healthcare accessibility, utilizing MYSQL,NodeJS,HTML,CSS. This experience honed my skills in coding,teamwork,communication and innovative problem-solving.' },
    { id: 2, position: 'Frontend Developer', organization: 'Self Taught DeKUT', duration: '3 months', description: 'Worked on various personal web development projects, enhancing UI/UX with modern design principles. Gained proficiency in React, JavaScript, and HTML CSS.' },
    { id: 3, position: 'Quality Analyst Trainee', organization: 'Qace Academy', duration: '2 months', description: 'Conducted thorough testing of web applications, identifying and documenting bugs. Collaborated with developers to ensure high-quality software delivery. Enhanced skills in manual and automated testing, and gained experience with tools like Selenium and JIRA.' },
    { id: 4, position: 'Technical User Support', organization: 'UON IT Dept', duration: '3 months', description: 'Provided technical user support at the University of Nairobi, assisting staff and students with IT-related issues. Gained hands-on experience in troubleshooting hardware and software problems, network configuration, and system maintenance.' },
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
    <div className="flex w-full flex-col min-h-screen items-center justify-center px-20 py-4">
      <section className="sticky w-full bg-transparent p-6">
        {work.map((work, index) => (
          <div key={work.id} className={`mb-8 -my-6 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full text-justify`}>
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-caveat font-medium text-2xl text-blue-700 mb-1 sm:mb-0">
                {work.position}
              </div>
              
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time
                  className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-bold uppercase w-20 h-10 mb-2 sm:mb-0 text-gray-950 bg-[#ddd6cb] rounded-full">
                  {work.duration}
                </time>
                <div className="text-xl font-bold text-[#ddd6cb]">
                  {work.organization}
                </div>
              </div>
              <div className="text-gray-500">
                {work.description}
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
