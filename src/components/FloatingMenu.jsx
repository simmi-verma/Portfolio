import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaArrowUp, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Action Handlers
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
    };

    const handleContact = () => {
        // Option 1: Scroll to Contact Section
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Option 2: Fallback to Mailto
            window.location.href = "mailto:simmi.verma255@gmail.com";
        }
        setIsOpen(false);
    };

    const handleResume = () => {
        // Replace this URL with the actual direct link to the user's resume PDF
        window.open("https://drive.google.com/file/d/15go7isa3CmEPjyU9b3d4LD52Xzxsyd0Y/view?usp=sharing", "_blank");
        setIsOpen(false);
    };

    // Animation Variants for the Main Toggle Button
    const toggleVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    };

    // Animation Variants for the Action Items Array
    const listVariants = {
        hidden: {
            transition: { staggerChildren: 0.1, staggerDirection: -1 }
        },
        visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    // Animation Variants for individual Action Buttons
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">

            {/* Expanded Action Buttons */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="flex flex-col gap-3 items-end mb-2"
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {/* Resume Button */}
                        <motion.button
                            variants={itemVariants}
                            onClick={handleResume}
                            className="group flex items-center justify-center w-12 h-12 rounded-full bg-tertiary shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-[#2a2353] hover:border-[#bf61ff] transition-colors relative"
                            title="Download Resume"
                        >
                            <FaFileDownload className="text-[#bf61ff] text-xl group-hover:scale-110 transition-transform" />
                            {/* Optional: Tooltip label on hover */}
                            <span className="absolute right-14 bg-tertiary text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap border border-[#2a2353] transition-opacity">
                                Resume
                            </span>
                        </motion.button>

                        {/* Contact Button */}
                        <motion.button
                            variants={itemVariants}
                            onClick={handleContact}
                            className="group flex items-center justify-center w-12 h-12 rounded-full bg-tertiary shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-[#2a2353] hover:border-[#00ceae] transition-colors relative"
                            title="Contact Me"
                        >
                            <FaEnvelope className="text-[#00cea8] text-xl group-hover:scale-110 transition-transform" />
                            <span className="absolute right-14 bg-tertiary text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap border border-[#2a2353] transition-opacity">
                                Contact
                            </span>
                        </motion.button>

                        {/* Scroll to Top Button */}
                        <motion.button
                            variants={itemVariants}
                            onClick={scrollToTop}
                            className="group flex items-center justify-center w-12 h-12 rounded-full bg-tertiary shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-[#2a2353] hover:border-[#915eff] transition-colors relative"
                            title="Scroll to Top"
                        >
                            <FaArrowUp className="text-[#915eff] text-xl group-hover:-translate-y-1 transition-transform" />
                            <span className="absolute right-14 bg-tertiary text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap border border-[#2a2353] transition-opacity">
                                Top
                            </span>
                        </motion.button>

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={toggleMenu}
                variants={toggleVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 rounded-full flex items-center justify-center purple-teal-gradient shadow-[0_0_20px_rgba(145,94,255,0.4)] focus:outline-none hover:scale-110 transition-transform z-50 border-2 border-transparent hover:border-white/20"
            >
                {isOpen ? (
                    <FaTimes className="text-white text-2xl" />
                ) : (
                    <FaBars className="text-white text-2xl" />
                )}
            </motion.button>
        </div>
    );
};

export default FloatingMenu;
