/* eslint-disable no-unused-vars */
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div className="flex flex-col bg-bgcolor w-full min-h-screen p-4 md:px-12 md:py-4"
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.2} }}>
      <h2 className="text-center items-center text-2xl md:text-3xl text-uscgold">Contact Me</h2>

      <div className="flex flex-col md:flex-row md:space-x-8 mt-6">
        <div className="flex flex-col justify-center space-y-4 shadow-md mx-auto px-6 py-4 md:py-2">
          <div className="flex flex-col items-center space-y-2 rounded-xl shadow-lg p-4 m-4 bg-transparent text-txtcolor">
            <FaLocationDot className='text-xl'/>
            <span>Location</span>
            <span className="text-center">Nairobi, Nyeri Kenya</span>
            <span className="text-center">Remote, ready to relocate</span>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-xl shadow-lg p-4 m-4 bg-transparent text-txtcolor">
            <FaEnvelope className='text-xl'/>
            <span>Email</span>
            <a href="mailto:josephwachira589@gmail.com"><span className="text-center">josephwachira589@gmail.com</span></a>
            <a href="mailto:wachirawahome81@gmail.com"><span className="text-center">wachirawahome81@gmail.com</span></a>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-xl shadow-white p-4 m-4 bg-transparent text-txtxcolor">
            <FaPhone className='text-xl'/>
            <span>Phone</span>
            <span className="text-center">(254)0795969757</span>
          </div>
        </div>

        {/* contact form */}
        <form className="flex flex-col py-4 space-y-6 shadow-md text-uscgold w-full md:w-1/2 mx-auto mt-6 md:mt-0">
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Full Name"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
          />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Email Address"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
          />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Phone Number"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
          />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Subject"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
          />
          <textarea
            name="message"
            id="message"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
            placeholder="Message..."
          ></textarea>
          <button className="w-full h-12 bg-gold text-bgcolor text-xl rounded-md hover:bg-gpoppy transition duration-300">Submit</button>
        </form>
      </div>
    </motion.div>
  );
}
