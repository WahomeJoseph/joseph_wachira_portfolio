/* eslint-disable no-unused-vars */
import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

import Hero from './Hero.jsx';
import About from '../pages/About.jsx';
import Projects from '../pages/Projects.jsx';
import Skills from '../pages/Skills.jsx';
import Contact from '../pages/Contact.jsx';

export default function AnimateRoutes(){
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            
            <Route path='/' element={
              <>
            <section id='hero'>
              <Hero />
            </section>
            <section id='about'>
              <About />
            </section>
            <section id='projects'>
              <Projects />
            </section>
            <section id='skills'>
              {/* <Skill/> */}
              <Skills />
            </section>
            <section id='contact'>
              <Contact />
            </section>
          </>
        }/>
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}
