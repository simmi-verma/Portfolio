import React, { useState, useEffect } from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
import { navLinks } from '../constant'
import TypeEffect from './Effects/TypeEffect'
import { motion, AnimatePresence } from "framer-motion";

import thumbnailHome from '../assets/thumbnail_home.png';
import thumbnailAbout from '../assets/thumbnail_about.png';
import thumbnailExperience from '../assets/thumbnail_experience.png';
import thumbnailTech from '../assets/thumbnail_tech.png';
import thumbnailProjects from '../assets/thumbnail_projects.png';
import thumbnailEducation from '../assets/thumbnail_education.png';
import thumbnailContact from '../assets/thumbnail_contact.png';

const SectionThumbnail = ({ id, title }) => {
  const getThumbnailSrc = () => {
    switch (id) {
      case 'about': return thumbnailAbout;
      case 'work': case 'experience': return thumbnailExperience;
      case 'tech': case 'skills': return thumbnailTech;
      case 'projects': return thumbnailProjects;
      case 'education': case 'resume': return thumbnailEducation;
      case 'contact': return thumbnailContact;
      default: return thumbnailHome;
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl">
      {/* Visual mock of the section */}
      <div className="absolute inset-0 grayscale-[80%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
        <img src={getThumbnailSrc()} alt={title} className="w-full h-full object-cover object-top" />
      </div>

      {/* Dark overlay & Title */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500 z-30 flex flex-col justify-end p-4 mt-auto h-full">
        <div className="mt-auto flex items-center justify-between w-full">
          <h3 className="text-white font-bold text-xl uppercase tracking-widest drop-shadow-lg bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">{title}</h3>
          <span className="text-[#00cea8] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 bg-black/50 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure body cannot scroll when sidebar is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [toggle]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-40 bg-primary/80 backdrop-blur-md`}>
      <div className='w-full flex justify-start items-center max-w-7xl mx-auto pl-2 sm:pl-0'>
        <Link to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
        </Link>

        {/* Navigation Controls */}
        <div className='flex items-center'>

          {/* Universal Slide Menu Trigger (Hamburger/Close) */}
          <button
            onClick={() => setToggle(!toggle)}
            className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 flex flex-col justify-center items-center gap-1.5 hover:bg-white/90 transition-colors group relative z-[60] shadow-sm hover:shadow-md"
          >
            {toggle ? (
              <div className="relative w-6 h-6 flex justify-center items-center">
                <span className="absolute w-6 h-0.5 bg-slate-800 group-hover:bg-[#bf61ff] transition-colors rounded-full rotate-45"></span>
                <span className="absolute w-6 h-0.5 bg-slate-800 group-hover:bg-[#bf61ff] transition-colors rounded-full -rotate-45"></span>
              </div>
            ) : (
              <React.Fragment>
                <span className="w-5 h-0.5 bg-slate-800 group-hover:bg-[#00cea8] transition-colors rounded-full"></span>
                <span className="w-6 h-0.5 bg-slate-800 group-hover:bg-[#bf61ff] transition-colors rounded-full"></span>
                <span className="w-4 h-0.5 bg-slate-800 group-hover:bg-[#00cea8] transition-colors rounded-full self-end mr-3"></span>
              </React.Fragment>
            )}
          </button>
        </div>
      </div>

      {/* Slide-out Menu Overlay */}
      <AnimatePresence>
        {toggle && (
          <React.Fragment>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setToggle(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] w-screen h-screen"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[85%] sm:w-[400px] h-screen bg-white/80 backdrop-blur-3xl z-[50] overflow-y-auto border-r border-slate-200 shadow-2xl custom-scrollbar"
            >
              {/* Sidebar Header */}
              <div className="flex justify-center items-center p-6 border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur-2xl z-40 shadow-sm relative text-center">
              </div>

              {/* Menu Items / Slides */}
              <div className="flex flex-col gap-6 p-6 pt-8">

                {navLinks.map((link, index) => (
                  <motion.a
                    href={`#${link.id}`}
                    key={link.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 2) }}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                    className="relative group w-full h-[150px] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-[#bf61ff]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
                  >
                    <SectionThumbnail id={link.id} title={link.title} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
