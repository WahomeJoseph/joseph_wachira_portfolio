/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

export default function Skills() {
  const work = [
    {position: 'Software Engineering Intern', organization: 'Power Learn Africa', duration: 'Aug 2024 - Dec 2024', description: 'During this period, I gained several skills including HTML5, CSS3. For my project I successfully developed a telemedicine application aimed at improving healthcare accessibility, utilizing MYSQL, Node JS HTML CSS. This experience honed my skills in coding, teamwork, communication, entrepreneurship and innovative problem-solving.'},
    {position: 'Frontend Developer', organization: 'Dedan Kimathi', duration: 'Oct 2021 - Dec 2024', description: 'Worked on various personal web development projects, enhancing UI/UX with modern design principles. Gained proficiency in React, JavaScript, and HTML CSS.'},
    {position: 'Technical User Support', organization: 'University Of Nairobi', duration: 'Aug 2024 - Dec 2024', description: ''},
  ];

  return (
    <div className="container flex flex-col bg-bgcolor min-h-screen items-center justify-center px-2 py-6 md:px-8">
      <h2 className="text-center text-2xl md:text-3xl text-uscgold m-4">Skills & Experience</h2>
      <div className="relative w-full max-w-4xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 border-r-2 border-uscgold rounded-sm h-full"></div>
        {work.map((work, index) => (
          <div key={index} className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full text-justify`}>
            <div className='w-full md:w-1/2 flex justify-center'>
              <div className='bg-transparent p-4 border-2 border-uscgold rounded-md shadow-customglow w-full md:w-3/4'>
                <div className='flex items-center mb-2'>
                  <FaBriefcase className='text-uscgold text-xl'/>
                  <span className='ml-2 text-xl font-semibold text-uscgold'>{work.position}</span>
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
    </div>
  );
}
