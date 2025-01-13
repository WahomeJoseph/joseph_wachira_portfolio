/* eslint-disable no-unused-vars */
import React from "react";
import { FaCode } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex flex-col w-full container min-h-screen bg-bgcolor justify-between items-center p-4 md:p-6">
      <h2 className="text-xl md:text-2xl text-uscgold font-semibold text-center">
        My Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center w-full bg-transparent gap-6 p-4 md:p-8">
        <div className="flex flex-col items-center space-y-2 rounded-md shadow-lg border-b-2 border-b-uscgold px-6 py-4 bg-transparent text-txtcolor">
          <FaCode className="text-xl md:text-2xl text-center text-uscgold" />
          <span className="text-lg md:text-xl font-semibold text-center">
            Dental Clinic Management System
          </span>
          <img src="" alt="" className="w-full h-auto" />
          <p className="text-center">Built a comprehensive dental clinic management system using the MERN (MongoDB, Express.js, React, Node.js). The system streamlines appointment scheduling, patient records management, billing and payment, and staff coordination. It includes a responsive interface for both administrators and patients, ensuring efficient clinic operations and an improved user experience.</p>
          <a href="https://github.com/WahomeJoseph/MY-DENTAL_CLINIC.git"><button className="w-full md:w-44 h-10 bg-gold text-bgcolor text-lg md:text-xl rounded-md hover:bg-gpoppy transition duration-300">
            View More
          </button>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-md shadow-lg border-b-2 border-b-uscgold px-6 py-4 bg-transparent text-txtcolor">
          <FaCode className="text-xl md:text-2xl text-center text-uscgold" />
          <span className="text-lg md:text-xl font-semibold text-center">Booking System</span>
          <img src="" alt="" className="w-full h-auto" />
          <p className="text-center">
          Developed a modern booking application using React.js and Vite. The platform enables users to browse services, check availability, and make reservations with ease. It features a fast-loading, responsive design optimized for seamless performance across various devices, ensuring a smooth and user-friendly booking experience.
          </p>
          <a href="https://github.com/WahomeJoseph/booking-assets.git"><button className="w-full md:w-44 h-10 bg-gold text-bgcolor text-lg md:text-xl rounded-md hover:bg-gpoppy transition duration-300">
            View More
          </button>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-md shadow-lg border-b-2 border-b-uscgold px-6 py-4 bg-transparent text-txtcolor">
          <FaCode className="text-xl md:text-2xl text-center text-uscgold" />
          <span className="text-lg md:text-xl font-semibold text-center">Farm Management System</span>
          <img src="" alt="" className="w-full h-auto" />
          <p className="text-center">
          Lead a team of five to develop a farm management system using HTML, CSS, PHP, and MySQL. The system streamlines farm activity tracking, inventory management, and financial records. It also allows visitors to book farm tours and purchase farm products through a user-friendly interface. A secure database ensures seamless management of data, enhancing operational efficiency and user experience.
          </p>
          <a href=""><button className="w-full md:w-44 h-10 bg-gold text-bgcolor text-lg md:text-xl rounded-md hover:bg-gpoppy transition duration-300">
            View More
          </button>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-md shadow-lg border-b-2 border-b-uscgold px-6 py-4 bg-transparent text-txtcolor">
          <FaCode className="text-xl md:text-2xl text-center text-uscgold" />
          <span className="text-lg md:text-xl font-semibold text-center">E-commerce System</span>
          <img src="" alt="" className="w-full h-auto" />
          <p className="text-center">
          Developed a robust e-commerce system using the MERN stack (MongoDB, Express.js, React, Node.js). The platform features secure user authentication, a dynamic product catalog, a shopping cart, and seamless payment integration. It offers a responsive, user-friendly interface optimized for both desktop and mobile devices, ensuring a smooth shopping experience.
          </p>
          <a href="https://github.com/WahomeJoseph/trade.git">
          <button className="w-full md:w-44 h-10 bg-gold text-bgcolor text-lg md:text-xl rounded-md hover:bg-gpoppy transition duration-300">
            View More
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
