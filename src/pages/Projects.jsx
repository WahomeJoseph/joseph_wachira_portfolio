/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from 'framer-motion';
import { Animate } from "../components/Animate";

export default function Projects() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-between font-montserrat items-center p-4 md:p-6">
      <h2 className="text-3xl uppercase tracking-wide mt-20 mb-2 text-[#ddd6cb] font-bold text-center">My Works</h2>
      <span className='text-base font-semi-bold text-[#ddd6cb] text-center'>𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼 𝓘 𝓱𝓪𝓿𝓮 𝓭𝓸𝓷𝓮</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-4 py-10 items-center w-full">
        {/* Dental Clinic */}
        <Animate>
          <div className="flex flex-col items-center bg-transparent border border-gray-600 space-y-2 rounded-md px-4 py-4 text-txtcolor mx-2">
            <span className="text-lg md:text-xl font-semibold text-center bg-gradient-to-tl from-slate-800 via-blue-700 to-zinc-400 bg-clip-text text-transparent">
              Dental Clinic Management System
            </span>
            <img src="https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
            <p className="text-center">Build a system to manage operations in a dental clinic, appointments, reminders, billing.</p>
            <span className="text-center">React Js, React Router, Tailwind CSS, React Charts, Node Js, Mongo DB</span>
            <a href="https://github.com/WahomeJoseph/MY-DENTAL_CLINIC.git">
              <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
                Check it Out
              </button>
            </a>
          </div>
        </Animate>
        {/* JW Recipes */}
        <Animate>
          <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md border border-gray-600 px-4 py-4 text-txtcolor mx-2">
            <span className="text-lg md:text-xl font-semibold text-center bg-gradient-to-tl from-slate-800 via-blue-700 to-zinc-400 bg-clip-text text-transparent">
              JW Recipes
            </span>
            <img src="/nextfood.png" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
            <p className="text-center">Build a simple app for users to search for a recipe, it allows users to also share their recipes with the community</p>
            <span className="text-center">Next Js,Tailwind CSS, betterSQLite3</span>
            <a href="https://food-ashen-six.vercel.app/">
              <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
                Check it Out
              </button>
            </a>
          </div>
        </Animate>
        {/* Movies */}
        <Animate>
          <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md border border-gray-600 px-4 py-4 text-txtcolor mx-2">
            <span className="text-lg md:text-xl font-semibold text-center bg-gradient-to-tl from-slate-800 via-blue-700 to-zinc-400 bg-clip-text text-transparent">
              Movies Search App
            </span>
            <img src="/MoviesScreen.png" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
            <p className="text-center font-sans">An application where users can search for movies and save favourites.</p>
            <span className="text-center font-sans">React Js, React Router, Tailwind CSS, MovieDB Api</span>
            <a href="https://movies-pi-pearl.vercel.app/">
              <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
                Check it Out
              </button>
            </a>
          </div>
        </Animate>
        {/* Booking */}
        <Animate>
          <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md border border-gray-600 px-4 py-4 text-txtcolor mx-2">
            <span className="text-lg md:text-xl font-semibold text-center bg-gradient-to-tl from-slate-800 via-blue-700 to-zinc-400 bg-clip-text text-transparent">
              Sofa Selling App
            </span>
            <img src="/sofalux.png" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
            <p className="text-center font-sans">An application where users can purchase sofas for their office and homes. Users can also request for sofa revamp</p>
            <span className="text-center font-sans">Next Js, Tailwind CSS, betterSQLite3, Node js, API</span>
            <a href="https://sofa-six.vercel.app/">
              <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
                Check it Out
              </button>
            </a>
          </div>
        </Animate>
        {/* Ecommerce */}
        <Animate>
          <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md border border-gray-600 px-4 py-4 text-txtcolor mx-2">
            <span className="text-lg md:text-xl font-semibold text-center bg-gradient-to-tl from-slate-800 via-blue-700 to-zinc-400 bg-clip-text text-transparent">
              E-Shop
            </span>
            <img src="/e-shop.png" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
            <p className="text-center font-sans">Application where users can purchase electronic accessories with payment method options.</p>
            <span className="text-center font-sans">React Js, React Router, Tailwind CSS, Node Js, Mongo DB, Payment APIs</span>
            <a href="https://github.com/WahomeJoseph/trade.git/">
              <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
                Check it Out
              </button>
            </a>
          </div>
        </Animate>
        {/* geofinder app */}
        <Animate>
          <div className="flex flex-col items-center bg-transparent space-y-2 rounded-md border border-gray-600 px-4 py-4 text-txtcolor mx-2">
            <span className="text-lg md:text-xl font-semibold text-center bg-gradient-to-tl from-slate-800 via-blue-700 to-zinc-400 bg-clip-text text-transparent">
              Geo Finder
            </span>
            <img src="/CountriesScreen.png" alt="" className="w-full h-80 rounded-xl p-4 object-cover bg-center" />
            <p className="text-center font-sans">Application to search for countries through filter techniques and see more details of the specific coutry including their population region etc.</p>
            <span className="text-center font-sans">React Js, Tailwind CSS, Countries API</span>
            <a href="https://github.com/WahomeJoseph/trade.git/">
              <button className="w-full border border-gpoppy rounded-sm shadow-sm p-2 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">
                Check it Out
              </button>
            </a>
          </div>
        </Animate>
      </div>
    </div>
  );
}
