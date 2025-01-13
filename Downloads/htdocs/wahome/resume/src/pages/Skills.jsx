import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGitAlt, FaGithub, FaDatabase, FaBriefcase } from 'react-icons/fa'; 
import { SiMongodb, SiMysql, SiMariadb, SiPostman, SiExpress, SiJavascript, SiAzuredevops } from 'react-icons/si';

export default function Skills() {
  const work = [
    {position: 'Software Engineering Intern', organization: 'Power Learn Project Africa', duration: 'Aug 2024 - Dec 2024', description: 'During this period, I gained several skills including HTML5, CSS3. For my project I successfully developed a telemedicine application aimed at improving healthcare accessibility, utilizing MYSQL,NodeJS,HTML,CSS. This experience honed my skills in coding,teamwork,communication,entrepreneurship and innovative problem-solving.'},
    {position: 'Frontend Developer', organization: 'Dedan Kimathi', duration: 'Oct 2021 - Dec 2024', description: 'Worked on various personal web development projects, enhancing UI/UX with modern design principles. Gained proficiency in React, JavaScript, and HTML CSS.'},
    {position: 'Technical User Support', organization: 'University Of Nairobi', duration: 'Aug 2024 - Dec 2024', description: 'Provided technical user support at the University of Nairobi, assisting staff and students with IT-related issues. Gained hands-on experience in troubleshooting hardware and software problems, network configuration, and system maintenance.'},
  ];

  const skills = [ 
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 text-3xl" /> }, 
    { name: 'React JS', icon: <FaReact className="text-blue-500 text-3xl" /> }, 
    { name: 'Node JS', icon: <FaNodeJs className="text-green-600 text-3xl" /> }, 
    { name: 'PHP', icon: <FaPhp className="text-purple-600 text-3xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> }, 
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-3xl" /> }, 
    { name: 'Express', icon: <SiExpress className="text-gray-600 text-3xl" /> }, 
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-3xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500 text-3xl" /> }, 
    { name: 'MariaDB', icon: <SiMariadb className="text-blue-600 text-3xl" /> }, 
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-600 text-3xl" />, altIcon: <FaGithub className="text-black text-3xl" /> }, 
    { name: 'Postman', icon: <SiPostman className="text-orange-600 text-3xl" /> }, 
    { name: 'APIs', icon: <FaDatabase className="text-gray-700 text-3xl" /> }, 
    { name: 'Azure AI', icon: <SiAzuredevops className="text-blue-700 text-3xl" /> } 
  ];

  return (
    <div className="flex w-full flex-col bg-bgcolor min-h-screen items-center justify-center px-2 py-6 md:px-8">
      <h2 className="text-center text-2xl md:text-3xl text-uscgold m-4">Skills & Experience</h2>
      <div className="relative w-full max-w-4xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 border-r-2 border-uscgold rounded-sm h-full"></div>
        {work.map((work, index) => (
          <div key={index} className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full text-justify`}>
            <div className='w-full md:w-1/2 flex justify-center'>
              <div className='bg-transparent p-4 border-2 border-uscgold rounded-md shadow-customglow w-full md:w-3/4'>
                <div className='flex items-center mb-2'>
                  <FaBriefcase className='text-uscgold text-xl'/>
                  <span className='ml-2 text-xl font-semibold text-gpoppy'>{work.position}</span>
                </div>
                <div className='text-gpoppy text-center'>{work.organization}</div>
                <div className='text-gpoppy text-center'>{work.duration}</div>
                <div className='text-txtcolor text-justify'>{work.description}</div>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
              <div className='w-4 h-4 bg-uscgold rounded-full'></div>
            </div>
          </div>
        ))}
      </div>
      {/* Skills Marquee */}
      <div className="mt-8 w-full overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content flex space-x-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-xl bg-gpoppy text-bgcolor px-4 py-2 rounded-md shadow-xl whitespace-nowrap flex items-center space-x-2">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
