/* eslint-disable no-unused-vars */
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { Animate } from "../components/Animate";

export default function Contact() {
  return (
    <motion.div className="flex flex-col w-full min-h-screen font-montserrat py-10 px-4">
      <h2 className="text-4xl uppercase tracking-wide mt-20 mb-10 font-bold text-center bg-gradient-to-tl from-slate-800 via-blue-700 to-zinc-400 bg-clip-text text-transparent">Contact Me</h2>

      <div className="flex flex-col md:flex-row">
        {/* contact cards */}
        <div className="flex flex-col justify-between gap-2 mx-auto p-6 md:py-2">
          <Animate>
            <div className="flex flex-col items-center space-y-2 border border-gpoppy shadow-sm shadow-gpoppy rounded-md p-4 m-4 text-txtcolor">
              <FaLocationDot className='text-2xl text-gpoppy' />
              <span>Location</span>
              <span className="text-center animate-glow">Nairobi, Kenya</span>
              <span className="text-center">Ready to relocate</span>
            </div>
          </Animate>
          <Animate>
            <div className="flex flex-col items-center space-y-2 border border-gpoppy shadow-sm shadow-gpoppy rounded-md p-4 m-4 text-txtcolor">
              <FaEnvelope className='text-2xl text-gpoppy' />
              <span>Email</span>
              <a href="mailto:josephwachira589@gmail.com"><span className="text-center text-sm sm:text-base break-words">josephwachira589@gmail.com</span></a>
              <a href="mailto:wachirawahome81@gmail.com"><span className="text-center text-sm sm:text-base break-words">wachirawahome81@gmail.com</span></a>
            </div>
          </Animate>
          <Animate>
            <div className="flex flex-col items-center space-y-2 border border-gpoppy shadow-sm shadow-gpoppy rounded-md p-4 m-4 text-txtcolor">
              <FaPhone className='text-2xl text-gpoppy' />
              <span>Phone</span>
              <span className="text-center">+254-0795969757</span>
              <span className="text-center">+254-0795969757</span>
            </div>
          </Animate>
        </div>

        {/* contact form */}
        <motion.form className="flex flex-col w-full justify-center py-4 px-6 space-y-6 shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)] rounded-md text-txtspan md:w-1/2 mx-auto mt-6 md:mt-0">
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Full Name"
            className="px-4 p-2 rounded-md shadow-md border border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy" />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Email Address"
            className="px-4 p-2 rounded-md shadow-md border border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy" />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Phone Number"
            className="px-4 p-2 rounded-md shadow-md border border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy" />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Subject"
            className="px-4 p-2 rounded-md shadow-md border border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy" />
          <textarea
            name="message"
            id="message"
            rows={8}
            className="px-4 p-2 rounded-md shadow-md border border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy"
            placeholder="Message...">
          </textarea>
          <button className="w-44 h-12 text-lg md:text-xl font-semibold border border-[#000fff] text-white rounded-md shadow-md transition-all duration-300 hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)]">Submit</button>
        </motion.form>
      </div>

      <div className="border-t border-[#000fff] m-10">

      </div>

    </motion.div>
  );
}
