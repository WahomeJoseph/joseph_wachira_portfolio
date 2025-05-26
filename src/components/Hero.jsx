import { useState, useEffect, useMemo } from "react"
import { Download, ArrowRight, Code, Sparkles, Star } from "lucide-react"
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"

function HeroSection() {
  const skills = useMemo(() => [
    "React JS Development",
    "Next JS Development",
    "Tailwind CSS & CSS3",
    "Shadcn & Material UI",
    "Node JS Development",
    "Quality Analyst",
  ], [])

  const [currentSkill, setCurrentSkill] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const [charIndex, setCharIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const currentSkillText = skills[currentSkill]

    if (isTyping) {
      if (charIndex < currentSkillText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentSkillText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 100)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timer)
      }
    } else {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentSkillText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 50)
        return () => clearTimeout(timer)
      } else {
        setCurrentSkill((prev) => (prev + 1) % skills.length)
        setIsTyping(true)
      }
    }
  }, [charIndex, currentSkill, isTyping, skills])

  const socialLinks = [
    {
      name: "GitHub",
      icon: BsGithub,
      url: "https://github.com/WahomeJoseph",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-900/20",
    },
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      url: "https://www.linkedin.com/in/joseph-wachira-202a7023",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-900/20",
    },
    {
      name: "Twitter",
      icon: BsTwitterX,
      url: "https://x.com/WachiraJoseph17?t=KGERM4FElIAFfhTfLpCMyw&s=09",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-900/20",
    },
    {
      name: "Email",
      icon: BsEnvelope,
      url: "mailto:josephwachira.dev@gmail.com",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-900/20",
    },
  ]

  const achievements = [
    { number: "3+", label: "Years Experience", icon: Star },
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "100%", label: "Client Satisfaction", icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-transparent py-10 relative overflow-hidden">
      {/* Interactive cursor effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium animate-pulse">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                Available for new opportunities
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white animate-fade-in">Hi, I&apos;m</span>
                  <span
                    className="block bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600/40 bg-clip-text text-transparent animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Joseph Wachira
                  </span>
                </h1>

                <div className="space-y-2">
                  <p className="text-xl md:text-2xl text-slate-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    Full Stack Developer
                  </p>
                  <p className="text-lg text-slate-400 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                    with 3+ years of experience in
                  </p>

                  {/* Typing Animation */}
                  <div className="h-16 flex items-center justify-center lg:justify-start">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                      {displayText}
                      <span className="animate-pulse">|</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
                style={{ animationDelay: "0.8s" }}>
                <a
                  href="https://docs.google.com/document/d/1rursKgMsUPkF0H77KJoMRdbUY6sdk8KrTn_Vli2eCtg/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-700/40 hover:from-blue-700/40 hover:to-blue-700 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-6 text-lg font-semibold text-slate-300 border border-gray-800 hover:bg-gray-900/30 hover:text-white rounded-lg transform hover:scale-105 transition-all duration-300 group">
                  Hire Me
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Social Links */}
              <div
                className="flex gap-6 justify-center lg:justify-start animate-fade-in"
                style={{ animationDelay: "1s" }}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:scale-110 transition-all duration-300 ${social.color} ${social.bgColor} hover:border-current animate-fade-in`}
                      style={{ animationDelay: `${1 + index * 0.1}s` }}
                      aria-label={social.name}>
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Profile Image */}
              <div className="relative mx-auto lg:mx-0 w-80 h-80">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse" /> */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl group">
                  <img
                    src="DSC_6976.jpg"
                    alt="Joseph Wachira - Full Stack Developer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4" style={{ animationDelay: "0.5s" }}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg">
                    <Code className="w-4 h-4 mr-1" />
                    React Expert
                  </span>
                </div>

                <div className="absolute -bottom-4 -left-4" style={{ animationDelay: "1s" }}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Full Stack
                  </span>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <div
                      key={achievement.label}
                      className="bg-gradient-to-br from-gray-950 to-gray-900/40 border border-gray-900 rounded-lg text-center group hover:bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
                      style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                      <div className="p-4">
                        <div className="flex flex-col items-center space-y-2">
                          <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-blue-400 transition-colors" />
                          <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {achievement.number}
                          </div>
                          <div className="text-sm text-slate-400">{achievement.label}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default HeroSection
