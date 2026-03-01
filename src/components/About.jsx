import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { services } from "../constant"
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'
import hackathon from '../assets/hackathon.jpg'
const ServiceCard = ({ number, text }) => {
  return (
    <div className="w-[180px] bg-white/60 backdrop-blur-md rounded-[15px] border border-slate-200 py-8 px-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md hover:border-[#bf61ff]/50 transition-all duration-300">
      <h3 className="text-[#bf61ff] text-[42px] font-bold leading-none drop-shadow-[0_2px_10px_rgba(191,97,255,0.3)]">
        {number}
      </h3>
      <p className="text-secondary text-[16px] text-center font-medium mt-2 whitespace-pre-line leading-relaxed">
        {text}
      </p>
    </div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>

        <a
          href="https://drive.google.com/file/d/15go7isa3CmEPjyU9b3d4LD52Xzxsyd0Y/view?usp=sharing"
          download
          className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-emerald-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
        >
          Download Resume
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12l-7 7m0 0l-7-7m7 7V5" />
          </svg>
        </a>
      </motion.div>

      <div className="mt-12 flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        {/* Left Side: Text and Cards */}
        <div className="flex-1 w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[17px] leading-[30px] text-justify'
          >
            I'm a passionate full-stack developer with a strong foundation in web technologies and cloud computing. As an AWS Certified Cloud Practitioner, I bring expertise in both front-end and back-end development, along with hands-on experience in cloud technologies and open-source contributions. <br /><br />
            I actively contribute to open-source projects and participate in hackathons to build impactful solutions. My experience includes working with modern frameworks like React.js, Node.js, and cloud platforms like AWS. I'm always eager to learn new technologies and collaborate on innovative projects.
          </motion.p>

          <div className='mt-10 flex flex-wrap gap-6 justify-center lg:justify-start'>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-shrink-0 w-full max-w-[400px] lg:w-[450px]"
        >
          <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} className="w-full">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group shadow-lg border-2 border-slate-200 p-2 bg-white/50 backdrop-blur-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={hackathon}
                  alt="Profile"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700"
                />

                {/* Overlay gradient for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
