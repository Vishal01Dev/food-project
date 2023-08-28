import React from 'react'
import { Link } from 'react-router-dom'

import { ArrowRight, MapMarker, PhoneIcon, MailIcon } from '../../components/icons/CommonIcons'

import fbIcon from '../../assets/images/social/facebook.png'
import pinIcon from '../../assets/images/social/pinterest.png'
import twitIcon from '../../assets/images/social/twitter.png'
import instaIcon from '../../assets/images/social/instagram.png'
import gpIcon from '../../assets/images/social/google-plus.png'

import { motion } from 'framer-motion'


const Footer = ({URL}) => {
    return (
        <>
            <div className='bg-gray-100 p-5 rounded-t-[200px]'>
                <div className='mt-10 flex justify-center items-center flex-col'>
                    <h1 className='text-2xl sm:text-4xl font-bold'>Get in Touch</h1>
                    <p className='w-[95%] sm:w-2/3 md:w-1/2 mx-auto text-center text-sm my-5 text-gray-400 font-semibold sm:leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est voluptatibus, pariatur voluptates ea architecto numquam hic nobis sunt aperiam.</p>
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-10'>
                        <li><a href=""><img src={fbIcon} alt='facebook' className='w-6' /></a></li>
                        <li><a href=""><img src={pinIcon} alt='pintrest' className='w-6' /></a></li>
                        <li><a href=""><img src={twitIcon} alt='twitter' className='w-6' /></a></li>
                        <li><a href=""><img src={instaIcon} alt='instagram' className='w-6' /></a></li>
                        <li><a href=""><img src={gpIcon} alt='google plus' className='w-6' /></a></li>
                    </ul>
                </div>
                <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center text-black px-10 pt-10'>
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
            </div>
            <div className='bg-gray-100 px-5 sm:px-10 md:px-16 lg:px-24'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10 gap-5 sm:gap-10'>
                    <div className='col-span-1'>
                        <Link to='/'>
                            <p className='text-4xl font-bold tracking-[1px] text-prime'>Foodies</p>
                        </Link>
                        <p className='my-5 text-sm text-gray-600'>It is established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='font-bold text-lg text-prime mb-3'>Useful Links</h1>
                        <ul>
                            <li className='mb-1 text-sm font-semibold text-gray-700'><Link to={`${URL}/`}>Home</Link></li>
                            <li className='mb-1 text-sm font-semibold text-gray-700'><Link to={`${URL}/menu`}>Menu</Link></li>
                            <li className='mb-1 text-sm font-semibold text-gray-700'><Link to={`${URL}/about`}>About</Link></li>
                            <li className='mb-1 text-sm font-semibold text-gray-700'><Link to={`${URL}/contact`}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                        <h1 className='font-bold text-lg text-prime mb-3 '>Subscribe our Newsletter</h1>
                        <form>
                            <div className='w-3/4'>
                                <div className='mt-5 sm:mt-0 transition duration-300 ease-in-out flex rounded-full shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] relative px-4 py-2 sm:px-5 sm:py-3'><MailIcon /><input type="text" placeholder='email address' className='bg-transparent w-4/5 border-none focus:border-none focus:outline-none pr-5 ml-5 font-semibold' /><motion.button whileHover={{ scale: 1.1 }} className=' absolute -top-[0.5px] sm:-top-0 -right-1 p-2 sm:p-3 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-prime text-white'><ArrowRight /></motion.button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Footer
