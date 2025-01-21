/* eslint-disable no-unused-vars */
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div className="flex flex-col bg-bgcolor w-full min-h-screen py-12 px-6 md:px-12 md:py-4"
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.2} }}>
      <h2 className="text-center items-center text-2xl md:text-3xl text-uscgold mt-4">Contact Me</h2>

      <div className="flex flex-col md:flex-row md:space-x-8 mt-6">
        {/* contact cards */}
        <div className="flex flex-col justify-between gap-2 mx-auto p-6 md:py-2">
          <div className="flex flex-col bg-bgcard items-center space-y-2 rounded-xl p-4 m-4 text-txtcolor shadow-md shadow-gpoppy hover:shadow-lg hover:shadow-uscgold transition-shadow duration-200">
            <FaLocationDot className='text-xl text-uscgold'/>
            <span>Location</span>
            <span className="text-center">Nairobi, Kenya</span>
            <span className="text-center">Ready to relocate</span>
          </div>
          <div className="flex flex-col bg-bgcard items-center space-y-2 rounded-xl p-4 m-4 text-txtcolor shadow-md shadow-gpoppy hover:shadow-lg hover:shadow-uscgold transition-shadow duration-200">
            <FaEnvelope className='text-xl text-uscgold'/>
            <span>Email</span>
            <a href="mailto:josephwachira589@gmail.com"><span className="text-center">josephwachira589@gmail.com</span></a>
            <a href="mailto:wachirawahome81@gmail.com"><span className="text-center">wachirawahome81@gmail.com</span></a>
          </div>
          <div className="flex flex-col bg-bgcard items-center space-y-2 rounded-xl p-4 m-4 text-txtcolor shadow-md shadow-gpoppy hover:shadow-lg hover:shadow-uscgold transition-shadow duration-200">
            <FaPhone className='text-xl text-uscgold'/>
            <span>Phone</span>
            <span className="text-center">+254-0795969757</span>
            <span className="text-center">+254-0795969757</span>
          </div>
        </div>

        {/* contact form */}
        <motion.form className="flex flex-col w-full justify-center bg-bgcard py-4 px-6 space-y-6 shadow-md shadow-gpoppy rounded-xl text-uscgold md:w-1/2 mx-auto mt-6 md:mt-0">
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Full Name"
            className="px-4 p-2 rounded-md shadow-xl border-2 border-gpoppy bg-transparent focus:outline-txtcolor"
          />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Email Address"
            className="px-4 p-2 rounded-md shadow-md border-2 border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy"/>
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Phone Number"
            className="px-4 p-2 rounded-md shadow-md border-2 border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy"/>
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Subject"
            className="px-4 p-2 rounded-md shadow-md border-2 border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy"/>
          <textarea
            name="message"
            id="message"
            className="px-4 p-2 rounded-md shadow-md border-2 border-gpoppy bg-transparent focus:outline-none focus:ring-0 focus:border-gpoppy"
            placeholder="Message...">
          </textarea>
          <button className="w-64 justify-center h-12 bg-bgcolor text-txtcolor text-2xl font-bold rounded-lg hover:bg-gpoppy hover:text-bgcolor transition duration-200">Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
}
