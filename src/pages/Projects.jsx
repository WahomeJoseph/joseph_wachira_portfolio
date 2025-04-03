// import React from "react";
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Dental Clinic Management System",
      description: "Built a system to manage operations in a dental clinic including appointments, reminders, and billing.",
      technologies: ["React", "Tailwind CSS", "Node.js", "APIs", "MongoDB", "JWT", "Twilio"],
      image: "https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/WahomeJoseph/MY-DENTAL_CLINIC.git"
    },
    {
      title: "JW Recipes",
      description: "Recipe sharing app where users can search for recipes and share their own with the community.",
      technologies: ["Next Js", "Tailwind CSS", "SQLite", "Node Js"],
      image: "/nextfood.png",
      link: "https://food-ashen-six.vercel.app/"
    },
    {
      title: "Movies Search App",
      description: "Application where users can search for movies and save their favorites.",
      technologies: ["React Js", "MovieDB API", "Tailwind CSS"],
      image: "/MoviesScreen.png",
      link: "https://movies-pi-pearl.vercel.app/"
    },
    {
      title: "Sofa App",
      description: "E-commerce platform for purchasing sofas with option to request sofa revamping services.",
      technologies: ["Next Js", "Daraja API", "SQLite", "Tailwind CSS", "Cypress", "NextAuth"],
      image: "/sofalux.png",
      link: "https://sofa-six.vercel.app/"
    },
    {
      title: "E-Shop",
      description: "Online store for electronic accessories with multiple payment options.",
      technologies: ["React Js", "Node Js", "MongoDB", "Redux", "Tailwind CSS", "Stripe", "Daraja API"],
      image: "/e-shop.png",
      link: "https://github.com/WahomeJoseph/trade.git/"
    },
    {
      title: "Geo Finder",
      description: "Country search application with detailed demographic information and filtering capabilities.",
      technologies: ["React Js", "Tailwind CSS", "Countries API"],
      image: "/CountriesScreen.png",
      link: "https://github.com/WahomeJoseph/trade.git/"
    }
  ];

  return (
    <div className="w-full min-h-screen py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#ddd6cb] mb-2 uppercase tracking-wider">
          My Works
        </h2>
        <p className="text-lg text-[#ddd6cb]/80">
          𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼 𝓘 𝓱𝓪𝓿𝓮 𝓭𝓸𝓷𝓮
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl focus border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:border-[#000fff]/20 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#ddd6cb] mb-2">
                {project.title}
              </h3>

              <p className="text-[#ddd6cb]/40 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-[#000fff]/10 text-[#000fff] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#ddd6cb] bg-[#000fff]/20 hover:bg-[#000fff]/30 border border-[#000fff]/30 rounded-md transition-colors">
                View Project
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}