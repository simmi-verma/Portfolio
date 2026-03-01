import React from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constant'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'

const SkillCategoryCard = ({ category, items, index, catIcon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full h-[450px] bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col items-center justify-center hover:shadow-md hover:border-[#bf61ff]/50 transition-all duration-300 relative overflow-hidden group/card"
    >
      {/* Subtle background glow effect behind image */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-[#00cea8]/20 blur-[40px] pointer-events-none rounded-full"></div>

      <div className="mb-8 flex flex-col items-center justify-center w-full gap-5 relative z-10 text-center">
        {catIcon && (
          <div className="w-[80px] h-[80px] rounded-2xl p-[2px] bg-gradient-to-br from-[#00cea8] to-[#bf61ff] shadow-[0_0_20px_rgba(191,97,255,0.2)] group-hover/card:shadow-[0_5px_15px_rgba(0,206,168,0.3)] transition-shadow duration-500">
            <img
              src={catIcon}
              alt={category}
              className="w-full h-full object-cover rounded-[14px] bg-slate-50"
            />
          </div>
        )}
        <h3 className="text-slate-800 drop-shadow-sm text-[28px] font-black tracking-wide pt-2 px-4 leading-tight">
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="flex items-center gap-2 bg-white/80 hover:bg-white py-2 px-3.5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-[#bf61ff]/50 transition-all duration-300 cursor-default group"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 object-contain filter group-hover:scale-110 transition-all"
            />
            <span className="text-slate-600 group-hover:text-[#bf61ff] drop-shadow-sm text-[14px] font-semibold tracking-wide transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Expertise.</h2>
      </motion.div>

      <div className='w-full overflow-hidden mt-14 relative group pointer-events-auto pb-4'>
        {/* Gradients on edges to fade out the scrolling items */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40, // Adjust for sliding speed, slow down slightly since these are larger blocks
            ease: "linear",
            repeat: Infinity,
          }}
          className='flex flex-row gap-6 w-max'
        >
          {/* Duplicate the array to create a seamless infinite scroll loop */}
          {[...technologies, ...technologies].map((techCategory, index) => (
            <div key={`tech-cat-${index}-${techCategory.category}`} className="flex-shrink-0 w-[300px] xs:w-[320px] sm:w-[360px]">
              <SkillCategoryCard
                index={index}
                category={techCategory.category}
                items={techCategory.items}
                catIcon={techCategory.catIcon}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")