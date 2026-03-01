import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import ProfilePhoto from './ProfilePhoto'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto flex flex-col justify-center overflow-hidden'>

      {/* Hero Text */}
      <div className={`${styles.paddingX} pt-[120px] pb-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-5 z-10 pointer-events-none w-full`}>

        {/* Left Side: Hero Text */}
        <div className="flex flex-row items-start gap-5">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm
              <span className='text-[#915eff]'> Simmi </span>
            </h1>
            <div className={`${styles.heroSubText} mt-2 text-white-100 min-h-[40px] sm:min-h-[50px]`}>
              <span className="text-[#00cea8] font-bold hidden sm:inline-block mr-2">&gt;</span>
              <ReactTyped
                strings={[
                  "I'm a Frontend Developer",
                  "I build MERN apps",
                  "I solve complex problems with code",
                  "I design interactive UIs"
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-[#00cea8]" // Adding a beautiful teal color to the typing text
              />
            </div>
            <p className='mt-5 text-secondary text-[16px] sm:text-[18px] max-w-lg leading-[30px]'>
              I specialize in developing scalable full-stack web applications, with a strong foundation in Python, C++, and Data Structures & Algorithms.
            </p>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="flex flex-col items-center justify-center pointer-events-auto">
          <ProfilePhoto />
        </div>

      </div>





      {/* <ComputersCanvas/> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center' >
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}

              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}

              className="w-3 h-3 rounded-full bg-secondary mb-1"

            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero