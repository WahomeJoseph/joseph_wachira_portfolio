// import React from "react";
import { FaEnvelope, FaPhone, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { SiAlx } from "react-icons/si";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaLocationDot className='text-2xl text-[#000fff]' />,
      title: "Location",
      details: ["Nairobi, Kenya", "Ready to relocate"]
    },
    {
      icon: <FaEnvelope className='text-2xl text-[#000fff]' />,
      title: "Email",
      details: [
        <a key="email1" href="mailto:josephwachira589@gmail.com" className="hover:underline">josephwachira589@gmail.com</a>,
        <a key="email2" href="mailto:wachirawahome81@gmail.com" className="hover:underline">wachirawahome81@gmail.com</a>
      ]
    },
    {
      icon: <FaPhone className='text-2xl text-[#000fff]' />,
      title: "Phone",
      details: ["+254-0795969757"]
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/WahomeJoseph" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/joseph-wachira-202a7023" },
    { icon: <FaEnvelope />, url: "mailto:josephwachira589@gmail.com" },
    { icon: <FaTwitter />, url: "https://x.com/WachiraJoseph17" },
    { icon: <SiAlx />, url: "https://ehub.alxafrica.com/profile/9478f7ba-427f-430b-9e77-5d952f10f284" }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-700/20 via-[#0C090A]/90 to-[#0C090A]"></div>
      </div>

      <div className="relative z-10 w-full min-h-screen py-16 px-4 sm:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[2rem] md:text-4xl font-bold text-[#ddd6cb] mb-2 uppercase tracking-wider">
            Contact Me
          </h2>
          <p className="text-lg text-[#ddd6cb]/80">
            𝓡𝓮𝓪𝓬𝓱 𝓞𝓾𝓽
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/5 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-[#000fff]/30 rounded-xl p-6 hover:border-[#000fff]/60 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-[#ddd6cb]">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-[#ddd6cb]/90 text-sm sm:text-base">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-[#000fff]/30 rounded-xl p-8 hover:border-[#000fff]/60 transition-all duration-300"
          >
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-[#000fff]/20 focus:border-[#000fff]/50 focus:outline-none text-[#ddd6cb] placeholder-[#ddd6cb]/30 transition-all ease-in-out duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-[#000fff]/20 focus:border-[#000fff]/50 focus:outline-none text-[#ddd6cb] placeholder-[#ddd6cb]/30 transition-all ease-in-out duration-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-[#000fff]/20 focus:border-[#000fff]/50 focus:outline-none text-[#ddd6cb] placeholder-[#ddd6cb]/30 transition-all ease-in-out duration-300"
              />
              <textarea
                rows={6}
                placeholder="Project Message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-[#000fff]/20 focus:border-[#000fff]/50 focus:outline-none text-[#ddd6cb] placeholder-[#ddd6cb]/30 transition-all ease-in-out duration-300"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-[#000fff] hover:bg-[#0000cc] text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-[#000fff]/30 flex flex-col space-y-5 justify-between items-center">
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-[#ddd6cb] hover:text-[#000fff] transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <span className="text-[#ddd6cb]/80 mt-6">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </span>
          <p className="text-pink-700">Designed by <a href="" className="text-blue-700/60">WahomeJoseph</a></p>
        </motion.div>
      </div>
    </div>
  );
}