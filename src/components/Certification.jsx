import React from "react";
import hackathon from "../assets/hackathon.jpg";
import aws from "../assets/aws.png";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Validated knowledge of AWS services, security, architecture, and billing.",
    icon: aws,
    link: "https://www.credly.com/badges/a50d6848-17a8-4a4a-9ae9-77c898c6a11a/linked_in_profile",
    date: "Amazon Web Services (2024)",
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Hackathons & Open Source",
    description: "Participated in national-level hackathons and open-source programs, building full-stack applications to solve real-world challenges.",
    icon: hackathon,
    link: "https://www.linkedin.com/in/simmi-verma/",
    date: "Multiple Projects",
    color: "from-blue-500 to-cyan-500"
  },
];

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have achieved</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {certifications.map((cert, index) => (
          <Tilt key={index} options={{ max: 45, scale: 1, speed: 450 }} className="w-full sm:w-[360px]">
            <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              className={`w-full h-[450px] p-[1px] rounded-[20px] shadow-card bg-gradient-to-r ${cert.color}`}
            >
              <div className="bg-gradient-to-b from-[#111322] to-[#0a0b14] rounded-[20px] py-8 px-6 w-full h-full flex flex-col items-center relative overflow-hidden group">

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="w-24 h-24 rounded-full p-1 bg-white flex justify-center items-center shadow-lg mb-4">
                    <img src={cert.icon} alt={cert.title} className="w-full h-full object-cover rounded-full" />
                  </div>

                  <h3 className="text-white text-[22px] font-bold text-center tracking-wide">{cert.title}</h3>
                  <p className="text-secondary text-[14px] uppercase tracking-wider mt-1">{cert.date}</p>

                  <p className="text-white-100 text-[15px] text-center mt-4 leading-[24px]">
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-white/10 hover:bg-white/20 border-white/20 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] backdrop-blur-md`}
                  >
                    View Credential
                  </a>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");