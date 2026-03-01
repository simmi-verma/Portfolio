import React from "react";
import hackathon from "../assets/hackathon.jpg";
import aws from "../assets/aws.png";
import github from "../assets/github-brands-solid-full.svg";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
const certifications = [
{
  title: "AWS Certified Cloud Practitioner",
  description:
    "Certified in AWS cloud fundamentals with knowledge of core services, security, and architecture. Hands-on experience with EC2, S3, and IAM.",
  icon: aws,
  link: "https://www.credly.com/badges/a50d6848-17a8-4a4a-9ae9-77c898c6a11a/linked_in_profile",
  date: "Amazon Web Services • 2025",
  color: "from-orange-500 to-yellow-500"
},
  {
    title: "Multiple Hackathons Participation",
    description:
      "Built full-stack applications in competitive hackathons using the MERN stack. Focused on scalable solutions, real-time features, and strong team collaboration.",
    icon: hackathon,
    link: "https://www.linkedin.com/in/simmi-verma/",
    date: "2024-2026",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Open Source Contributions",
    description:
      "Contributed to open-source projects by improving UI and fixing issues. Experienced with Git workflows, pull requests, and collaborative development.",
    icon: github,
    link: "https://github.com/simmi-verma",
    date: "Ongoing",
    color: "from-purple-500 to-pink-500"
  },
];

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have achieved</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {certifications.map((cert, index) => (
          <Tilt key={index} options={{ max: 45, scale: 1, speed: 450 }} className="w-full sm:w-[320px]">
            <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              className={`w-full h-[450px] p-[1px] rounded-[20px] shadow-md bg-gradient-to-r ${cert.color}`}
            >
              <div className="bg-white/95 rounded-[20px] py-8 px-6 w-full h-full flex flex-col items-center relative overflow-hidden group">

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="w-24 h-24 rounded-full p-1 bg-slate-50 border border-slate-200 flex justify-center items-center shadow-sm mb-4">
                    <img src={cert.icon} alt={cert.title} className="w-full h-full object-cover rounded-full" />
                  </div>

                  <h3 className="text-slate-800 text-[22px] font-bold text-center tracking-wide drop-shadow-sm">{cert.title}</h3>
                  <p className="text-slate-500 text-[14px] uppercase tracking-wider mt-1 font-semibold">{cert.date}</p>

                  <p className="text-slate-600 text-[15px] text-center mt-4 leading-[24px] font-medium">
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-bold rounded-full text-white bg-slate-800 hover:bg-slate-900 transition-all shadow-md hover:shadow-lg`}
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