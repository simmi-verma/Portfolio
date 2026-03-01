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
      className="w-full h-[450px] bg-gradient-to-b from-[#111322] to-[#0a0b14] rounded-2xl border border-white/5 p-6 shadow-2xl flex flex-col items-center justify-center hover:border-white/10 transition-colors duration-300 relative overflow-hidden group/card"
    >
      {/* Subtle background glow effect behind image */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-[#00cea8]/10 blur-[40px] pointer-events-none rounded-full"></div>

      <div className="mb-8 flex flex-col items-center justify-center w-full gap-5 relative z-10 text-center">
        {catIcon && (
          <div className="w-[80px] h-[80px] rounded-2xl p-[2px] bg-gradient-to-br from-[#00cea8] to-[#bf61ff] shadow-[0_0_20px_rgba(191,97,255,0.2)] group-hover/card:shadow-[0_0_30px_rgba(0,206,168,0.4)] transition-shadow duration-500">
            <img
              src={catIcon}
              alt={category}
              className="w-full h-full object-cover rounded-[14px] bg-[#151325]"
            />
          </div>
        )}
        <h3 className="text-white text-[28px] font-black tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#00cea8] to-[#bf61ff] pt-2 px-4 leading-tight">
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] py-2 px-3.5 rounded-lg border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300 cursor-default group"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all"
            />
            <span className="text-secondary group-hover:text-white text-[14px] font-semibold tracking-wide transition-colors">
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