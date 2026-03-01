import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm border-t border-slate-200 text-slate-600 font-medium py-6 space-y-4 relative z-10 w-full">
      {/* Links Section */}
      <div className="flex space-x-6">
        <a
          className="hover:text-indigo-600 hover:scale-110 transition-transform duration-300"
          href="https://www.instagram.com/Simmi_jaykishan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="hover:text-indigo-600 hover:scale-110 transition-transform duration-300"
          href="https://www.linkedin.com/in/simmi-verma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="hover:text-indigo-600 hover:scale-110 transition-transform duration-300"
          href="https://www.facebook.com/profile.php?id=100017862300843"
          target="_blank"
          rel="noopener noreferrer"
        >
          FaceBook
        </a>
        <a
          className="hover:text-indigo-600 hover:scale-110 transition-transform duration-300"
          href="https://github.com/simmi-verma"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-slate-500">
        ©  Simmi Verma.
      </p>
    </div>
  );
};

export default Footer;
