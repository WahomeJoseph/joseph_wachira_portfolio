// import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostman, SiExpress, SiNextdotjs } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { VscAzure } from "react-icons/vsc";

const SkillsCard = () => {
  const workExperience = [
    {
      id: 1,
      position: 'Software Engineering Intern',
      organization: 'Power Learn Project Africa',
      duration: '4 months',
      description: 'Developed a telemedicine application using MySQL, Node.js, HTML, and CSS that improved healthcare accessibility. Enhanced skills in full-stack development, teamwork, and innovative problem-solving.',
      icon: <FaBriefcase className="text-blue-500" />
    },
    {
      id: 2,
      position: 'Frontend Developer',
      organization: 'Self Taught Projects',
      duration: '3 months',
      description: 'Created multiple web applications with modern UI/UX principles using React, JavaScript, and CSS. Focused on responsive design and user experience optimization.',
      icon: <FaReact className="text-blue-400" />
    },
    {
      id: 3,
      position: 'Quality Analyst Trainee',
      organization: 'Qace Academy',
      duration: '2 months',
      description: 'Performed comprehensive testing of web applications, documented bugs, and collaborated with developers. Gained expertise in manual/automated testing with Selenium and JIRA.',
      icon: <FaDatabase className="text-green-500" />
    },
    {
      id: 4,
      position: 'Technical Support',
      organization: 'UON IT Department',
      duration: '3 months',
      description: 'Provided IT support for university staff and students, troubleshooting hardware/software issues and maintaining systems. Developed strong technical communication skills.',
      icon: <FaBriefcase className="text-purple-500" />
    }
  ];

  const skills = [
    { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'PHP', icon: <FaPhp className="text-purple-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-600" /> },
    { name: 'REST APIs', icon: <FaDatabase className="text-gray-700" /> },
    { name: 'Azure AI', icon: <VscAzure className="text-blue-700" /> }
  ];

  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-8 max-w-6xl mx-auto">
      <section className="relative">
        <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-[#000fff]/60 to-pink-700/80 transform -translate-x-1/2 hidden md:block"></div>

        {workExperience.map((work, index) => (
          <motion.div 
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full`}
          >
            <div className="hidden md:flex w-1/2 justify-center relative">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#000fff]/60 to-pink-700/80 border-4 border-white dark:border-gray-900 z-10"></div>
            </div>

            <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
              <div className="bg-gray-900/60 rounded-xl shadow-lg p-6 relative group">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {work.icon}
                </div>
                
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-blue-800/20 text-[#000fff]/80 rounded-full">
                  {work.duration}
                </span>
                
                <h3 className="text-xl font-bold text-[#ddd6cb] mb-1">
                  {work.position}
                </h3>
                
                <p className="text-[#000fff]/80 font-medium mb-3">
                  {work.organization}
                </p>
                
                <p className="text-[#ddd6cb]">
                  {work.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Skills Section */}
<section className="mt-12">
  <h2 className="text-[1.5rem] font-bold text-center text-[#ddd6cb] mb-8">
    𝓣𝓮𝓬𝓱𝓷𝓲𝓬𝓪𝓵 𝓢𝓴𝓲𝓵𝓵𝓼
  </h2>
  
  {/* Marquee Container */}
  <div className="relative overflow-hidden w-full">
    {/* Gradient Fades */}
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0C090A] to-transparent z-10"></div>
    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0C090A] to-transparent z-10"></div>
    
    <div className="flex w-[200%] py-4 animate-marquee whitespace-nowrap">
      <div className="flex space-x-4 w-[100%]">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 bg-gray-900/60 px-4 py-2 rounded-full border border-pink-700/20 transition-all duration-300 ease-in-out">
            <div className="text-xl text-[#000fff]">
              {skill.icon}
            </div>
            <span className="font-medium text-[#ddd6cb]">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
      
      {/* Duplicated Skills for seamless looping */}
      {/* <div className="flex space-x-4 w-[100%]">
        {skills.map((skill, index) => (
          <motion.div
            key={`copy-${index}`}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-gray-900/60 px-4 py-2 rounded-full border border-pink-700/30 transition-all">
            <div className="text-xl text-[#000fff]">
              {skill.icon}
            </div>
            <span className="font-medium text-[#ddd6cb]">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div> */}
    </div>
  </div>
</section>
    </div>
  );
};

export default SkillsCard;