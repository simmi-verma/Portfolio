import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

// We import the placeholder and assume the user saves their photo here
import profilePhoto from "../assets/MyPhoto.jpeg";

const ProfilePhoto = () => {
    return (
        <div className="flex justify-center items-center pointer-events-none pb-10 lg:pb-0 z-10 lg:z-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="relative pointer-events-auto group"
            >
                <Tilt
                    options={{
                        max: 25,
                        scale: 1.05,
                        speed: 400,
                        glare: true,
                        "max-glare": 0.5,
                    }}
                    className="relative"
                >
                    {/* Glow effect behind the image */}
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#E8A0BF] via-[#BA90C6] to-[#E8A0BF] blur-2xl opacity-40 animate-pulse transition duration-500 group-hover:opacity-70" />

                    <div className="relative p-[8px] rounded-3xl bg-white shadow-xl">
                        <img
                            src={profilePhoto}
                            alt="Simmi"
                            className="w-72 sm:w-80 md:w-[24rem] lg:w-[28rem] h-auto object-cover rounded-[18px] border-[6px] border-white"
                        />
                    </div>
                </Tilt>
            </motion.div>
        </div>
    );
};

export default ProfilePhoto;
