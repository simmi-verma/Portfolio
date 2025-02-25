import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { services } from "../constant"
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index , title , icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right" , "spring" , 0.5 * index , 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

        <div
          option={{
            max: 45, 
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >

          <img src={icon} alt={title}
            className='w-16 h-16 object-contain bg-transparent'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <a
          href="https://drive.google.com/file/d/1Iv01txm9IZadv3gOQtNlW0YYaaErNzOt/view?usp=sharing"
          download
          class="flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          See My Career Journey
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <g transform="rotate(270 12 12)">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 12l-7 7m0 0l-7-7m7 7V5" />
            </g>
          </svg>
        </a>
      </motion.div>

      <motion.p 
        variants={fadeIn("" , "" , 0.1 , 1)}
        className='mt-4 text-secondary  text-[17px] max-w-3xl leading-[30px]'
      >
        As a passionate and skilled Full-Stack Developer, I specialize in crafting seamless web applications and interactive user experiences. With a strong foundation in programming languages such as JavaScript, C++, Python, and expertise in frameworks like React.js and Node.js, I design solutions that blend innovation with functionality. My proficiency extends to databases (SQL, MongoDB), animation tools (Three.js, GSAP), and error monitoring (Sentry).
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service , index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About , "about" )
