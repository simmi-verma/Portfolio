import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'



const Contact = () => {

  const formRef = useRef();
  const [form , setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading , setLoading] = useState(false);

  const handleChange = (e) => {
    const {name , value} = e.target;
    setForm({...form , [name]: value});

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_kdtmk8q' , 
      'template_wpxly2w' , 
      {
        from_name: form.name,
        to_name: 'Trek',
        from_email: form.email,
        to_email: 'mactrek355@gmail.com',
        message: form.message
      },
      'CjuYjV2uQFLgI13nL'
    
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible')
      setForm({
        name: '',
        email: '', 
        message: ''
      })
    },
    (error) => {
      setLoading(false);
      console.log(error);
      alert('An error occurred. Please try again later.')
    })
  }



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

      <motion.div
        variants={slideIn('left' , 'tween', 0.2 , 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >

        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"

        >
          
          {/* Input field for the name--------------------------------------- */}
          <label htmlFor=""
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>


          {/* input field for the email address------------------------- */}
          <label htmlFor=""
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email address'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>


          {/* Input field for the  message here-------------------------- */}
          <label htmlFor=""
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message here'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          {/* Button the submit the form----------------------  */}
          <button type='submit'
           className='bg-tertiary py-3 px-8 outline-node w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Sending..." : "Send" }
          </button>

        </form>

      </motion.div>

      <motion.div
        variants={slideIn('right' , 'tween', 0.2 , 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]' 

      >

        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper( Contact , "contact");