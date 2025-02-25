import React from 'react';
import programming from "../assets/Programmer.svg"; // Default import for an image

const Programming = () => {
  return (
    <div className="flex justify-center items-end h-screen">  {/* Aligns items at the bottom */}
      <img
        src={programming}
        alt="Programming"
        className="w-72 sm:w-96 md:w-[20rem] lg:w-[24rem] xl:w-[30rem] transition-transform transform duration-500 ease-in-out hover:scale-110 animate-spin-slow"
      />
    </div>
  );
};

export default Programming;
