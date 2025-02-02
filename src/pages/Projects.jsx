/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

export default function Projects() {
  return (
    <motion.div 
      className="flex flex-col w-full min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e1a78] to-[#0f172a] justify-between items-center p-4 md:p-6"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }} >
      <h2 className="text-xl md:text-2xl text-gpoppy font-semibold text-center">
        My Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-4 py-10 items-center w-full">
        {/* Dental Clinic */}
        <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md shadow-sm shadow-gpoppy px-4 py-4 text-txtcolor mx-2">
          <span className="text-lg md:text-xl font-semibold text-center text-gpoppy">
            Dental Clinic Management System
          </span>
          <img src="https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
          <p className="text-center">Build a system to manage operations in a dental clinic, appointments, reminders, billing.</p>
          <span className="text-center">React Js, React Router, Tailwind CSS, React Charts, Node Js, Mongo DB</span>
          <a href="https://github.com/WahomeJoseph/MY-DENTAL_CLINIC.git">
            <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:bg-[#00df82]">
              View More
            </button>
          </a>
        </div>
        {/* JW Recipes */}
        <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md shadow-sm shadow-gpoppy px-4 py-4 text-txtcolor mx-2">
          <span className="text-lg md:text-xl font-semibold text-center text-gpoppy">
            JW Recipes
          </span>
          <img src="/RecipeScreen.png" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
          <p className="text-center">Build a simple app for users tio search for specific cuisine and user step by step recipes to prepare the food.</p>
          <span className="text-center">React Js, Material UI Tailwind CSS, Spoonacular API</span>
          <a href="https://github.com/WahomeJoseph/Heats.git">
            <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:bg-[#00df82]">
              View More
            </button>
          </a>
        </div>
        {/* Movies */}
        <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md shadow-sm shadow-gpoppy px-4 py-4 text-txtcolor mx-2">
          <span className="text-lg md:text-xl font-semibold text-center text-gpoppy">
            Movies Search App
          </span>
          <img src="/MoviesScreen.png
          " alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
          <p className="text-center font-sans">An application where users can search for movies and save favourites.</p>
          <span className="text-center font-sans">React Js, React Router, Tailwind CSS, MovieDB Api</span>
          <a href="https://movies-pi-pearl.vercel.app/">
            <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:bg-[#00df82]">
              View More
            </button>
          </a>
        </div>
        {/* Booking */}
        <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md shadow-sm shadow-gpoppy px-4 py-4 text-txtcolor mx-2">
          <span className="text-lg md:text-xl font-semibold text-center text-gpoppy">
            Book Accommodations App
          </span>
          <img src="https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
          <p className="text-center font-sans">An application where users can book for vacancies in rooms, clone of booking.com.</p>
          <span className="text-center font-sans">React Js, React Router, Tailwind CSS, Calendar.js</span>
          <a href="https://movies-pi-pearl.vercel.app/">
            <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:bg-[#00df82]">
              View More
            </button>
          </a>
        </div>
        {/* Ecommerce */}
        <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md shadow-sm shadow-gpoppy px-4 py-4 text-txtcolor mx-2">
          <span className="text-lg md:text-xl font-semibold text-center text-gpoppy">
            Electronics e-shop
          </span>
          <img src="/EcommScreen.png" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
          <p className="text-center font-sans">Application where users can purchase electronic accessories with payment method options.</p>
          <span className="text-center font-sans">React Js, React Router, Tailwind CSS, Node Js, Mongo DB, Payment APIs</span>
          <a href="https://github.com/WahomeJoseph/trade.git/">
            <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:bg-[#00df82]">
              View More
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md shadow-sm shadow-gpoppy px-4 py-4 text-txtcolor mx-2">
          <span className="text-lg md:text-xl font-semibold text-center text-gpoppy">
            Geo Finder
          </span>
          <img src="/CountriesScreen.png" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
          <p className="text-center font-sans">Application to search for countries through filter techniques and see more details of the specific coutry including their population region etc.</p>
          <span className="text-center font-sans">React Js, Tailwind CSS, Countries API</span>
          <a href="https://github.com/WahomeJoseph/trade.git/">
            <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:bg-[#00df82]">
              View More
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
