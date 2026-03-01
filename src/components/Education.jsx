import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="text-center sm:text-left">
                <p className={styles.sectionSubText}>My Academic Background</p>
                <h2 className={styles.sectionHeadText}>Education.</h2>
            </motion.div>

            <div className="mt-10 max-w-4xl mx-auto">
                <motion.div variants={fadeIn("up", "spring", 0.3, 1)} className="flex flex-col gap-6">

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white/60 backdrop-blur-md p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <h5 className="text-[20px] font-bold text-slate-800">B.Tech in Electrical Engineering</h5>
                                <p className="text-slate-600 mt-1 text-[16px] font-semibold">UIT, RGPV Bhopal • CGPA: 7.1 / 10</p>
                            </div>
                            <div className="bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <span className="text-emerald-500 text-sm font-bold tracking-wider">Expected 2026</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white/60 backdrop-blur-md p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <h5 className="text-[20px] font-bold text-slate-800">Senior Secondary (XII)</h5>
                                <p className="text-slate-600 mt-1 text-[16px] font-semibold">Score: 82.6%</p>
                            </div>
                            <div className="bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <span className="text-cyan-500 text-sm font-bold tracking-wider">2022</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative bg-white/60 backdrop-blur-md p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <h5 className="text-[20px] font-bold text-slate-800">Secondary School (X)</h5>
                                <p className="text-slate-600 mt-1 text-[16px] font-semibold">Score: 94.0%</p>
                            </div>
                            <div className="bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <span className="text-pink-500 text-sm font-bold tracking-wider">2020</span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
