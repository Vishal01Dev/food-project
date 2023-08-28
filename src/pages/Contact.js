import React, { useEffect } from 'react'
import fbIcon from '../assets/images/social/facebook.png'
import pinIcon from '../assets/images/social/pinterest.png'
import twitIcon from '../assets/images/social/twitter.png'
import instaIcon from '../assets/images/social/instagram.png'
import gpIcon from '../assets/images/social/google-plus.png'
import { motion } from 'framer-motion'

import { ArrowRight, MapMarker, PhoneIcon, MailIcon } from '../components/icons/CommonIcons'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[])


  return (
    <div className='pt-20 lg:pt-16  px-5 sm:px-10 md:px-16 lg:px-24'>
      <div className='mt-10 flex flex-col justify-center items-center py-3 sm:py-5'>
        <h1 className='text-2xl sm:text-4xl font-bold'>
          Contact Us
        </h1>
        <p className='text-gray-500 font-semibold my-4'>Contact For Any Query</p>
      </div>
      <div className='flex justify-around items-center flex-wrap text-black gap-5 md:px-10'>
        <div className='flex justify-center items-center flex-wrap gap-5'>
          <div className='flex justify-center items-center gap-3'>
            <MapMarker />
            <p className='font-semibold text-sm'>Somewhere in India</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <PhoneIcon />
            <p className='font-semibold text-sm'>+91 9876 54321</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <MailIcon />
            <p className='font-semibold text-sm'>foodies@example.com</p>
          </div>
        </div>
        <div>
          <ul className='flex justify-center items-center gap-5'>
            <li><a href=""><img src={fbIcon} alt='facebook' className='w-6' /></a></li>
            <li><a href=""><img src={pinIcon} alt='pintrest' className='w-6' /></a></li>
            <li><a href=""><img src={twitIcon} alt='twitter' className='w-6' /></a></li>
            <li><a href=""><img src={instaIcon} alt='instagram' className='w-6' /></a></li>
            <li><a href=""><img src={gpIcon} alt='google plus' className='w-6' /></a></li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-20'>
        <div className="col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918684694!2d72.41493071500537!3d23.020158085148303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1693117153884!5m2!1sen!2sin"
            style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'
          />

        </div>
        <div className="col-span-1">
          <form>
            <div className='grid grid-cols-2 gap-5'>
              <div className='col-span-1'>
                <input type="text" placeholder='Your name' className='border border-prime/50 focus:border-prime focus:bg-gray-50 w-full px-5 py-2 focus:outline-none text-black rounded' />
              </div>
              <div className='col-span-1'>
                <input type="text" placeholder='Your email' className='border border-prime/50 focus:border-prime focus:bg-gray-50 w-full px-5 py-2 focus:outline-none text-black rounded' />
              </div>
              <div className='col-span-2'>
                <input type="text" placeholder='Subject' className='border border-prime/50 focus:border-prime focus:bg-gray-50 w-full px-5 py-2 focus:outline-none text-black rounded' />
              </div>
              <div className='col-span-2'>
                <textarea name="" id="" placeholder='Message' className='border border-prime/50 focus:border-prime focus:bg-gray-50 w-full px-5 py-2 focus:outline-none text-black rounded resize-none h-[150px]'></textarea>
              </div>
              <div className='col-span-2'>
                <motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 sm:mr-10 uppercase font-bold text-xs sm:text-sm'>Submit</span><span className=' absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact