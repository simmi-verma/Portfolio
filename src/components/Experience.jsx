import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, zoomIn } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiences } from '../constant'
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'rgba(255, 255, 255, 0.65)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      color: '#5a6f91ff',
      boxShadow: '0 10px 40px -10px rgba(124, 63, 63, 0.05), inset 0 1px 0 rgba(254, 247, 247, 0.8)',
      border: '1px solid rgba(249, 242, 242, 1)', // border-slate-200 equivalent
      borderRadius: '24px',
      padding: '32px 40px',
    }}
    contentArrowStyle={{ borderRight: '8px solid rgba(255, 255, 255, 0.8)' }}
    date={
      <span className="text-slate-800 font-bold tracking-widest px-4 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm sm:ml-4 sm:mr-4 inline-block mt-2">
        {experience.date}
      </span>
    }
    iconStyle={{
      background: '#e7e6e6ff',
      border: '4px solid #d5e2f0ff',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(0,0,0,0.05)'
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full p-2 group-hover:scale-110 transition-transform duration-500'>
        <img src={experience.icon} alt={experience.company_name}
          className='w-[70%] h-[70%] object-contain drop-shadow-sm'
        />
      </div>
    }
  >
    <div className="group transition-all duration-500 hover:-translate-y-2 relative">
      {/* subtle gradient over card on hover */}
      <div className="absolute -inset-6 bg-gradient-to-r from-[#E8A0BF] to-[#BA90C6] opacity-0 group-hover:opacity-[0.05] blur-xl rounded-2xl transition duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <h3 className='text-[32px] font-black tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#E8A0BF] to-[#BA90C6] drop-shadow-sm group-hover:drop-shadow-[0_2px_8px_rgba(232,160,191,0.3)] transition-all duration-300'>
          {experience.title}
        </h3>
        <p className='text-slate-500 text-[18px] font-bold tracking-widest uppercase mt-2 group-hover:text-slate-800 transition-colors duration-300' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-8 list-none ml-2 space-y-4 relative z-10'>
        {experience.points.map((point, pointIndex) => (
          <li
            key={`experience-point-${pointIndex}`}
            className='text-slate-600 text-[16px] pl-6 tracking-wide leading-relaxed hover:text-slate-900 transition-colors duration-300 relative'
          >
            {/* Custom glowing bullet point */}
            <span className="absolute left-0 top-[10px] w-2 h-2 rounded-full bg-gradient-to-r from-[#E8A0BF] to-[#BA90C6] group-hover:shadow-[0_0_10px_rgba(186,144,198,0.8)] transition-shadow duration-300"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)



const Experience = () => {
  return (

    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className='mt-20'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>


    </>




  )
}


export default SectionWrapper(Experience, "work")