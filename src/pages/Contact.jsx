import { FaEnvelope, FaPhone, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { SiAlx } from 'react-icons/si'

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaLocationDot className='text-2xl text-blue-500' />,
      title: 'Location',
      details: ['Nairobi, Kenya', 'Ready to relocate'],
      animationDelay: 0.1
    },
    {
      icon: <FaEnvelope className='text-2xl text-blue-500' />,
      title: 'Email',
      details: [
        <a key='email1' href='mailto:josephwachira589@gmail.com' className='hover:underline hover:text-blue-400 transition-colors'>josephwachira589@gmail.com</a>,
        <a key='email2' href='mailto:wachirawahome81@gmail.com' className='hover:underline hover:text-blue-400 transition-colors'>wachirawahome81@gmail.com</a>
      ],
      animationDelay: 0.2
    },
    {
      icon: <FaPhone className='text-2xl text-blue-500' />,
      title: 'Phone',
      details: ['+254-0795969757'],
      animationDelay: 0.3
    }
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/WahomeJoseph', name: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/joseph-wachira-202a7023', name: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:josephwachira589@gmail.com', name: 'Email' },
    { icon: <FaTwitter />, url: 'https://x.com/WachiraJoseph17', name: 'Twitter' },
    { icon: <SiAlx />, url: 'https://ehub.alxafrica.com/profile/9478f7ba-427f-430b-9e77-5d952f10f284', name: 'ALX' }
  ]

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-transparent'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl'></div>
      </div>

      <div className='relative z-10 w-full min-h-screen py-12 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-3'>
            Get In Touch
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='w-full lg:w-2/5 space-y-6'>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.animationDelay }}
                viewport={{ once: true, margin: '-100px' }}
                className='bg-gradient-to-br from-gray-950 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'>
                
                <div className='flex flex-col items-center text-center space-y-4'>
                  <div className='p-3 bg-gray-700/50 rounded-full'>
                    {item.icon}
                  </div>
                  <h3 className='text-xl font-semibold text-white'>{item.title}</h3>
                  <div className='space-y-2'>
                    {item.details.map((detail, i) => (
                      <p key={i} className='text-gray-300 text-sm sm:text-base'>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Enhanced Social Links */}
            <motion.div className='pt-8'>
              <h3 className='text-xl font-semibold text-gray-100 mb-6 flex items-center'>
                <span className='w-8 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 mr-3'></span>
                Follow Me
              </h3>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 text-gray-300 ${social.color} transition-all duration-300 group`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className='w-full lg:w-3/5 bg-gradient-to-br from-gray-950 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'>
            <h3 className='text-2xl font-semibold text-white mb-6 text-center'>Send Me a Message</h3>
            
            <div className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>Full Name</label>
                <input
                  type='text'
                  id='name'
                  placeholder='Your name'
                  className='w-full px-4 py-3 rounded-lg bg-gray-800/40 border border-gray-900/30 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500/30'
                  required
                />
              </div>
              
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>Email Address</label>
                <input
                  type='email'
                  id='email'
                  placeholder='your.email@example.com'
                  className='w-full px-4 py-3 rounded-lg bg-gray-800/40 border border-gray-900/30 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500/30'
                  required
                />
              </div>
              
              <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-300 mb-1'>Phone Number (Optional)</label>
                <input
                  type='tel'
                  id='phone'
                  placeholder='+254 XXX XXX XXX'
                  className='w-full px-4 py-3 rounded-lg bg-gray-800/40 border border-gray-900/30 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500/30'
                />
              </div>
              
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>Message</label>
                <textarea
                  id='message'
                  rows={6}
                  placeholder='Tell me about your project...'
                  className='w-full px-4 py-3 rounded-lg bg-gray-800/40 border border-gray-900/30 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500/30'
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='w-full py-3 bg-blue-800 hover:bg-[#000fff] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'>
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className='mt-16 pt-8 border-t border-gray-700/50 text-center'
        >
          <p className='text-gray-400'>
            &copy {new Date().getFullYear()} Joseph Wachira. All rights reserved.
          </p>
          <p className='text-gray-500 text-sm mt-2'>
            Designed with ❤️ by <a href='https://github.com/WahomeJoseph' className='text-blue-400 hover:underline'>WahomeJoseph</a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}