import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn, fadeIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_kdtmk8q',
      'template_wpxly2w',
      {
        from_name: form.name,
        to_name: 'Trek',
        from_email: form.email,
        to_email: 'XXXXXX@gmail.com',
        message: form.message
      },
      'CjuYjV2uQFLgI13nL'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible')
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('An error occurred. Please try again later.')
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        className='flex-1 flex flex-col justify-start bg-white/60 backdrop-blur-md p-8 sm:p-10 rounded-2xl relative group border border-slate-200 shadow-xl'
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
        <div className="relative z-10">
          <p className={`${styles.sectionSubText}`}>Get in Touch</p>
          <h3 className={`${styles.sectionHeadText} text-slate-800 mt-1`}>Contact.</h3>

          <div className='mt-6 text-slate-800 space-y-3 p-4 bg-white/80 rounded-xl border border-slate-200 shadow-sm'>
            <p className='flex items-center gap-3'><span className='text-[20px]'>📧</span> <a href="mailto:svindbhopal@gmail.com" className='text-slate-600 font-medium hover:text-indigo-600 transition-colors duration-300'>XXXXXX@gmail.com</a></p>
            <p className='flex items-center gap-3'><span className='text-[20px]'>📱</span> <a href="tel:+919407067292" className='text-slate-600 font-medium hover:text-indigo-600 transition-colors duration-300'>+91 XXXXXXXXXX</a></p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <label className='flex flex-col'>
              <span className='text-slate-800 font-bold mb-2'>Your Name</span>
              <input
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='What is your name?'
                className='bg-white py-3 px-4 placeholder:text-slate-400 text-slate-800 font-medium rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none border border-slate-200 shadow-sm transition-all duration-300'
                required
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-slate-800 font-bold mb-2'>Your Email</span>
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Enter your email address'
                className='bg-white py-3 px-4 placeholder:text-slate-400 text-slate-800 font-medium rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none border border-slate-200 shadow-sm transition-all duration-300'
                required
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-slate-800 font-bold mb-2'>Your Message</span>
              <textarea
                rows="6"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Write your message here'
                className='bg-white py-3 px-4 placeholder:text-slate-400 text-slate-800 font-medium rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none border border-slate-200 shadow-sm transition-all duration-300'
                required
              />
            </label>

            <button
              type='submit'
              className='bg-[#E8A0BF] from-indigo-500 to-purple-600 py-3 px-8 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto self-start mt-2'
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");
