import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { projects } from '../constant'
import { Tilt } from 'react-tilt'
import { github } from '../assets'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-auto">
      <div className="group perspective-1000 w-full sm:w-[360px] max-w-full h-[420px] bg-transparent rounded-2xl cursor-pointer">
        <div className="relative w-full h-full duration-700 transform-style-3d flip-card-inner rounded-2xl shadow-lg">

          {/* FRONT OF THE CARD */}
          <div className="absolute w-full h-full bg-white/60 backdrop-blur-md p-5 rounded-2xl backface-hidden flex flex-col justify-between items-center border border-slate-200 shadow-sm">
            <img
              src={image}
              alt={name}
              className='w-full h-[230px] object-cover rounded-xl shadow-md'
            />
            <div className='flex items-center justify-center flex-1 w-full'>
              <h3 className='text-slate-800 font-bold text-[26px] text-center drop-shadow-sm'>{name}</h3>
            </div>
            <p className='text-[#bf61ff] font-medium text-[14px] animate-bounce mb-2'>Hover for details →</p>
          </div>

          {/* BACK OF THE CARD */}
          <div className="absolute w-full h-full bg-white/95 p-6 rounded-2xl backface-hidden rotate-y-180 flex flex-col justify-between border border-[#bf61ff]/30 shadow-xl">
            <h3 className='text-slate-800 font-bold text-[22px] border-b border-slate-200 pb-2'>{name}</h3>

            <p className='mt-3 text-slate-600 text-[14px] flex-1 overflow-y-auto pr-2 custom-scrollbar leading-[22px] font-medium'>
              {description}
            </p>

            <div className='mt-4 pt-4 border-t border-slate-200 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[13px] font-semibold px-2 py-1 rounded-md bg-white border border-slate-200 shadow-sm ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

            {/* GitHub Link Button positioned absolutely on back */}
            <div className='absolute top-4 right-4'>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110 shadow-lg border border-[#333]'
              >
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div
        className='w-full flex'
      >
        <motion.p

          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >

          Developed various projects showcasing expertise in web and app development. Key highlights include an Airbnb-like booking platform with React.js, Node.js, and MongoDB, responsive Apple and Google Gemini website clones using React.js, Three.js, and Sentry, and a Word-to-PDF converter with React.js and Express.js. Additional projects include a Spotify clone, task manager, analog clock, and an interactive game, demonstrating strong skills in both frontend and backend development.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center sm:justify-start gap-7'>
        {projects.map((projects, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...projects}
          />

        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");