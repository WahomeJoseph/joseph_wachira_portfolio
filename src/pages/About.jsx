import { FaCode, FaServer, FaShieldAlt } from 'react-icons/fa'
import { Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <FaCode className='text-3xl text-blue-500' />,
      items: ['React', 'Next.js', 'Tailwind CSS', 'Material UI', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
      color: 'text-blue-400'
    },
    {
      title: 'Backend Development',
      icon: <FaServer className='text-3xl text-green-500' />,
      items: ['Node.js', 'Express', 'PHP', 'MongoDB', 'MySQL', 'REST API', 'GraphQL', 'Firebase'],
      color: 'text-green-400'
    },
    {
      title: 'Quality Assurance',
      icon: <FaShieldAlt className='text-3xl text-purple-500' />,
      items: ['Cypress', 'Jest', 'Jira', 'Manual Testing', 'API Testing', 'E2E Testing', 'Unit Testing'],
      color: 'text-purple-400'
    },
    {
      title: 'Technical Support',
      icon: <Wrench className='text-3xl text-orange-500' />,
      description: 'Provide user support ensuring proper hardware and software functionality',
      color: 'text-yellow-400'
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='w-full min-h-screen py-20 px-4 sm:px-8 max-w-7xl mx-auto'>
      {/* Hero Section */}
      <div className='text-center mb-16'>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-[2rem] uppercase font-bold text-[#ddd6cb] mb-4'>
          About Me
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-xl text-gray-400 max-w-2xl mx-auto'>
          Full Stack Developer | Quality Assurance Specialist | Technical Support Engineer
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br from-gray-950 to-gray-900/40 backdrop-blur-sm border border-gray-900 rounded-xl p-6 hover:border-${skill.color.split('-')[1]}-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-${skill.color.split('-')[1]}-500/10`}>
            <div className={`p-3 mb-4 rounded-full bg-${skill.color.split('-')[1]}-500/10 w-fit mx-auto`}>
              {skill.icon}
            </div>
            <h3 className={`text-xl font-semibold text-center mb-4 ${skill.color}`}>
              {skill.title}
            </h3>
            {skill.items ? (
              <div className='flex flex-wrap justify-center gap-2'>
                {skill.items.map((item, i) => (
                  <span 
                    key={i}
                    className='px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-200'>
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <p className='text-center text-sm text-gray-300'>
                {skill.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-900 mb-16'>
        <h3 className='text-2xl font-semibold text-white mb-6'>Professional Summary</h3>
        <div className='space-y-4 text-gray-300'>
          <p>
            I&apos;m a passionate Software Developer with 3+ years of experience building web applications using modern JavaScript, Typescript frameworks. 
            My expertise spans both frontend and backend development, with a strong focus on creating responsive, 
            user-friendly interfaces and robust server-side solutions.
          </p>
          <p>
            As a Quality Assurance Specialist, I bring meticulous attention to detail and a commitment to delivering 
            flawless user experiences through comprehensive testing strategies.
          </p>
          <p>
            My technical support background gives me unique insight into user pain points, which I leverage to build 
            more intuitive and reliable software solutions.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='mt-16 text-center'>
        <h3 className='text-2xl font-semibold text-white mb-4'>Want to know more?</h3>
        <a
          href='/contact'
          className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg'>
          Get In Touch
        </a>
      </motion.div>
    </motion.div>
  )
}