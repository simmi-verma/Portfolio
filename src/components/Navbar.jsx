
import React, { useState, useEffect } from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constant'
import { nav } from 'framer-motion/client'
import TypeEffect from './Effects/TypeEffect'
const Navbar = () => {

  // using React hooks 
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  // for responsive navbar
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  



  

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  bg-primary`}>

      <div className='w-full flex justify-between itmes-center max-w-7xl mx-auto'>
        <Link to="/"
          className='flex itmes-center gap-2'
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          

          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex items-center'>
            Simmi |&nbsp;
            {isDesktop && <TypeEffect />}
              <br />
            <span className='sm:block hidden'>&nbsp;</span>
          </p>



        </Link>

        {/* under navbar section about work contact */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li key={link.id}
                className={
                  `${active === link.title ? "text-white" : "text-secondary"}
                  hover:text-white text-[18px] font-medium cursor-pointer`
                }
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>


        {/* for small devices the toggle button  */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          {/* dropdown menu for small devices  */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            {/* under navbar section about work contact */}
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {
                navLinks.map((link) => (
                  <li key={link.id}
                    className={
                      `${active === link.title ? "text-white" : "text-secondary"}
                  font-poppins font-medium cursor-pointer text-[16px] `
                    }
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>

          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar