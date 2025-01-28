/* eslint-disable no-unused-vars */
import React from "react";
import { FaCode } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.div className="flex flex-col w-full min-h-screen bg-bgcolor justify-between items-center p-4 md:p-6"
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.2} }}>
      <h2 className="text-xl md:text-2xl text-uscgold font-semibold text-center">
        My Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center w-full bg-transparent gap-6 p-4 md:p-8">
        {/* dental clinic */}
        <div className="flex flex-col items-center bg-bgcard space-y-2 rounded-md shadow-sm shadow-[#00df82] px-4 py-4 text-txtcolor">
        <span className="text-lg text-[#00df82] md:text-xl font-semibold text-center">
            Dental Clinic Management System
          </span>
          <img src="https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-80 rounded-md object-fit bg-cover bg-center" />
          
          <p className="text-center">Build a system to manage operations in a dental clinic, appointments, reminders, billing</p>
          <span className="text-center">React Js, React Router, Tailwind CSS, React Charts, Node Js, Mongo DB</span>
          <a href="https://github.com/WahomeJoseph/MY-DENTAL_CLINIC.git"><button className="w-full items-center border border-[#00df82] rounded-sm shadow-sm p-2 hover:[#00df82]">
            View More
          </button>
          </a>
        </div>
        {/* movies */}
        <div className="flex flex-col items-center bg-bgcard space-y-2 rounded-md shadow-sm shadow-[#00df82] px-4 py-4 text-txtcolor">
        <span className="text-lg text-[#00df82] md:text-xl font-semibold text-center">
            Movies Search App
          </span>
          <img src="https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-80 rounded-md object-fit bg-cover bg-center" />
          
          <p className="text-center">An application where users can search for movies and save favourites</p>
          <span className="text-center">React Js, React Router, Tailwind CSS, MovieDB Api</span>
          <a href="https://movies-pi-pearl.vercel.app/"><button className="w-full items-center border border-[#00df82] rounded-sm shadow-sm p-2 hover:[#00df82]">
            View More
          </button>
          </a>
        </div>
        {/* booking */}
        <div className="flex flex-col items-center bg-bgcard space-y-2 rounded-md shadow-sm shadow-[#00df82] px-4 py-4 text-txtcolor">
        <span className="text-lg text-[#00df82] md:text-xl font-semibold text-center">
            Book Accommodations App
          </span>
          <img src="https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-80 rounded-md object-fit bg-cover bg-center" />
          
          <p className="text-center">An application where users can book for vacancies in rooms, clone of booking.com</p>
          <span className="text-center">React Js, React Router, Tailwind CSS, Calendar.js</span>
          <a href="https://movies-pi-pearl.vercel.app/"><button className="w-full items-center border border-[#00df82] rounded-sm shadow-sm p-2 hover:[#00df82]">
            View More
          </button>
          </a>
        </div>
        {/* ecommerce */}
        <div className="flex flex-col items-center bg-bgcard space-y-2 rounded-md shadow-sm shadow-[#00df82] px-4 py-4 text-txtcolor">
        <span className="text-lg text-[#00df82] md:text-xl font-semibold text-center">
            Electironics e-shop
          </span>
          <img src="https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-80 rounded-md object-fit bg-cover bg-center" />
          
          <p className="text-center">Full stack application where users can purchase for electronic accessories with payment method options</p>
          <span className="text-center">React Js, React Router, Tailwind CSS, Node Js, Mongo DB, Payment APIs</span>
          <a href="https://github.com/WahomeJoseph/trade.git/"><button className="w-full items-center border border-[#00df82] rounded-sm shadow-sm p-2 hover:[#00df82]">
            View More
          </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
