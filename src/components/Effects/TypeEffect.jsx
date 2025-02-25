import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Software Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        cursor: "", // Hides the cursor
      }}
    />
  );
}

export default TypeEffect;
