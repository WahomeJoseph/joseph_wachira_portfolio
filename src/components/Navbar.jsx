"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Mail } from "lucide-react"

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openMenu && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setOpenMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [openMenu])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [openMenu])

  const toggleNavbar = () => {
    setOpenMenu(!openMenu)
  }

  const closeNavbar = () => {
    setOpenMenu(false)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full h-20 z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeNavbar}>
              <div className="relative">
                <div className="w-12 h-12 bg-transparent rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                  <span className="text-blue-600 font-bold text-2xl">🅙🅦</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${activeSection === item.name.toLowerCase().replace(" ", "")
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                      }`}>
                    <div className="flex items-center space-x-2">
                      <span>{item.name}</span>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-all duration-300 ${activeSection === item.name.toLowerCase().replace(" ", "")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleNavbar}
              className="menu-button lg:hidden p-2 rounded-lg bg-slate-900/30 border border-gray-800 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 group"
              aria-label="Toggle menu"
              aria-expanded={openMenu}>
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${openMenu ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                    }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${openMenu ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div
          className={`mobile-menu absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 shadow-2xl transform transition-all duration-500 ease-out ${openMenu ? "translate-x-0" : "translate-x-full"
            }`}>
          <div className="p-6 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">JW</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Joseph Wachira</h3>
                  <p className="text-slate-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <nav className="space-y-2">
              {navItems.map((item, index) => {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeNavbar}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 group animate-slide-in ${activeSection === item.name.toLowerCase().replace(" ", "")
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : ""
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="font-medium">{item.name}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    </div>
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700/50">
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-2">Ready to work together?</p>
              <Link
                to="/contact"
                onClick={closeNavbar}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  )
}

export default Navbar
