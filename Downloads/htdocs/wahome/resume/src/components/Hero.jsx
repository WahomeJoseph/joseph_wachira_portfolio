import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaAnglesDown, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function Hero() {
  const [showMore, setShowMore] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShowMore(!showMore);
    navigate("/about", "/skills", "/projects");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-screen bg-bgcolor text-txtcolor bg-cover bg-center"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      style={{backgroundImage:"url('https://images.unsplash.com/photo-1637946175491-53bca31c90ba?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-black bg-opacity-50">
        <p className="text-center text-xl md:text-2xl font-semibold text-txtcolor p-4">
          <span>Hello, I&apos;m</span> <br />
          <span className="text-2xl md:text-3xl text-gpoppy">
            Joseph Wachira
          </span>{" "}
          <br />
          <span className="text-xl md:text-2xl text-txtcolor">
            a web Developer
          </span>{" "}
          <br />
          <span className="text-xl md:text-2xl text-txtcolor">
            with +2 years of experience.
          </span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 m-4 md:m-8">
          <a href="https://docs.google.com/document/d/1GJP4jr36238ZO7xL97-NnOv1XgFISJxwNEU7h-Cy24k/edit?usp=drive_link">
            <motion.button
              hover
              whileHover={{ scale: 1.15 }}
              transition={{ type: "tween", duration: 1 }}
              className="w-44 h-12 text-lg md:text-xl font-semibold px-4 py-2 rounded-md shadow-md hover:bg-hgold hover:shadow-lg transition duration-300 bg-gbrown text-bgcolor"
            >
              Resume
            </motion.button>
          </a>
          <Link to="/contact">
            <motion.button
              hover
              whileHover={{ scale: 1.15 }}
              transition={{ type: "tween", duration: 1 }}
              className="w-44 h-12 text-lg md:text-xl font-semibold px-4 py-2 rounded-md shadow-md hover:bg-hgold hover:shadow-lg transition duration-300 bg-gbrown text-bgcolor"
            >
              Hire Me
            </motion.button>
          </Link>

          {/* <motion.button animate={{ rotate: [0,200,0], y:move ? 200 : -200 }} transition={{duration: 2, repeat: Infinity, type: 'tween', duration: 1.2}} hover whileHover={{scale: 2}} drag whileDrag={{scale: 2}} onClick={() => {setMove(!move)}} className="bg-green-700 w-40 h-12 text-white" >Hover Me</motion.button> */}
        </div>

        {showMore && (
          <p className="text-uscgold text-lg md:text-xl text-center">
            Read More
          </p>
        )}

        <motion.button
          transition={{ type: "spring", bounce: 5 }}
          onClick={handleShow}
          className="flex flex-col items-center mt-4 md:mt-8"
        >
          <FaAnglesDown className="text-xl md:text-2xl text-uscgold hover:text-gpoppy transition duration-300" />
          <span className="text-uscgold text-lg md:text-xl mt-2">
            {showMore ? "Show Less" : "Show More"}
          </span>
        </motion.button>

        <ul className="flex flex-row flex-wrap items-center justify-center gap-6 space-x-6 md:space-x-4 mt-6">
          <motion.a
            transition={{
              type: "tween",
              duration: 0.8,
              type: "spring",
              bounce: 5,
            }}
            hover
            whileHover={{ scale: 1.5 }}
            href="https://github.com/WahomeJoseph"
            className="text-xl md:text-2xl text-white hover:text-uscgold"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            transition={{
              type: "tween",
              duration: 0.8,
              type: "spring",
              bounce: 5,
            }}
            hover
            whileHover={{ scale: 1.5 }}
            href="https://www.linkedin.com/in/joseph-wachira-202a7023"
            className="text-xl md:text-2xl text-white hover:text-uscgold"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            transition={{
              type: "tween",
              duration: 0.8,
              type: "spring",
              bounce: 5,
            }}
            whileHover={{ scale: 1.5 }}
            href="https://mail.google.com/mail/"
            className="text-xl md:text-2xl text-white hover:text-uscgold"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            transition={{
              type: "tween",
              duration: 0.8,
              type: "spring",
              bounce: 5,
            }}
            hover
            whileHover={{ scale: 1.5 }}
            href="https://www.instagram.com/sayjo.e?igshid=YzljYTk1ODg3Zg=="
            className="text-xl md:text-2xl text-white hover:text-uscgold"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            transition={{
              type: "tween",
              duration: 0.8,
              type: "spring",
              bounce: 5,
            }}
            hover
            whileHover={{ scale: 1.5 }}
            href="https://x.com/WachiraJoseph17?t=KGERM4FElIAFfhTfLpCMyw&s=09"
            className="text-xl md:text-2xl text-white hover:text-uscgold"
          >
            <FaXTwitter />
          </motion.a>
        </ul>
      </div>
    </motion.div>
  );
}

export default Hero;
