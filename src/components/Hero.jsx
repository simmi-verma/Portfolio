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
            <div className='w-5 h-5 rounded-full bg-[#E8A0BF]' />
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#E8A0BF] to-transparent' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>Hello, I'm
              <span className='text-[#E8A0BF]'> Simmi </span>
            </h1>
            <div className={`${styles.heroSubText} mt-2 min-h-[40px] sm:min-h-[50px]`}>
              <span className="text-[#BA90C6] font-bold hidden sm:inline-block mr-2">&gt;</span>
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
                className="text-[#BA90C6]" // Darker teal for light background readability
              />
            </div>
            <p className='mt-5 text-secondary text-[16px] sm:text-[18px] max-w-lg leading-[30px] font-medium'>
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

    </section>
  )
}

export default Hero
