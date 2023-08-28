import React, { useEffect, useState } from 'react'
import userImg from '../assets/images/icons/user.png'
import { LogOutIcon, Box, User, ArrowRight, Close, CheckIcon, MapMarker, HomeIcon } from '../components/icons/CommonIcons'
import preparing from '../assets/images/icons/main-dish.png'
import onTheWay from '../assets/images/icons/fast-delivery.png'
import { motion } from 'framer-motion'
import Modal from '../components/modals/Modal'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchCart } from '../redux/slices/cartSlice'


const Profile = ({URL}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    

    const [auth, setAuth] = useState('')
    const [sideNav, setSideNav] = useState('profile')
    const [editForm, setEditForm] = useState(false)
    const [passForm, setPassForm] = useState(false)
    const [editAddForm, setEditAddForm] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [userData, setUserData] = useState({
        fullname: '',
        email: '',
        mobile: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    })

    useEffect(() => {
        const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
        if (loggedUser != null) {
            const users = JSON.parse(window.localStorage.getItem('users'));
            const currentUser = users.find((u) => u.Uid === loggedUser.Uid && u.email === loggedUser.email);
            setUserData(currentUser);
        }
        else {
            navigate(URL+'/login');
        }
    },[])

    const logoutHandler = () => {
        window.localStorage.removeItem('loggedUser');
        navigate(URL+'/login');

    }

    return (
        <div className='px-5 pt-20 lg:pt-16 sm:px-10 md:px-10 xl:px-24'>
            <div className='flex flex-col items-center justify-center py-3 mt-10 sm:py-5'>
                <h1 className='text-2xl font-bold sm:text-4xl'>
                    My Profile
                </h1>
            </div>
            <div className='grid grid-cols-12 gap-5 mt-10 mb-20'>
                <div className="col-span-12 md:col-span-4 p-5 bg-gray-100 shadow rounded-3xl">
                    <div className='flex flex-col items-center justify-center p-5 bg-white shadow rounded-3xl'>
                        <img src={userImg} alt='' className='w-2/5 mb-5' />
                        <p className='text-2xl font-bold text-prime'>{userData.fullname}</p>
                        <p className='font-semibold text-gray-400'>{userData.email}</p>
                        <div className='my-5'>
                            <motion.button onClick={logoutHandler} whileHover={{ scale: 1.05 }} className='mt-2 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 sm:px-5 sm:py-2'><span className='mr-6 text-xs font-medium uppercase sm:font-bold sm:text-sm'>Log Out</span><span className=' absolute -top-0.5 sm:-top-0 -right-0.5 sm:-right-1 p-1 sm:p-1.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><LogOutIcon /></span></motion.button>
                        </div>
                    </div>
                    <div className='p-5 mt-4 bg-white shadow rounded-3xl'>
                        <div className='grid grid-cols-1 gap-3'>
                            <div className="col-span-1">
                                <div onClick={() => setSideNav('profile')} className={sideNav === 'profile' ? 'flex justify-start items-center gap-4 cursor-pointer bg-prime w-full py-2 px-5 lg:px-10 text-white rounded-xl shadow-lg' : 'flex justify-start items-center gap-4 cursor-pointer bg-white w-full py-2 px-5 lg:px-10 text-prime rounded-xl shadow-lg'}>
                                    <div className='p-1 bg-white rounded-full text-prime'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                    <div className='text-lg font-semibold'>
                                        <h1>Profile</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div onClick={() => setSideNav('order')} className={sideNav === 'order' ? 'flex justify-start items-center gap-4 cursor-pointer bg-prime w-full py-2 px-5 lg:px-10 text-white rounded-xl shadow-lg' : 'flex justify-start items-center gap-4 cursor-pointer bg-white w-full py-2 px-5 lg:px-10 text-prime rounded-xl shadow-lg'}>
                                    <div className='p-1 bg-white rounded-full text-prime'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path d="M22 8a.76.76 0 000-.21v-.08a.77.77 0 00-.07-.16.35.35 0 00-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 00-1 0l-9 5-.09.07-.11.08a.41.41 0 00-.07.11.39.39 0 00-.08.1.59.59 0 00-.06.14.3.3 0 000 .1A.76.76 0 002 8v8a1 1 0 00.52.87l9 5a.75.75 0 00.13.06h.1a1.06 1.06 0 00.5 0h.1l.14-.06 9-5A1 1 0 0022 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path>
                                        </svg>
                                    </div>
                                    <div className='text-lg font-semibold'>
                                        <h1>Orders</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div onClick={() => setSideNav('address')} className={sideNav === 'address' ? 'flex justify-start items-center gap-4 cursor-pointer bg-prime w-full py-2 px-5 lg:px-10 text-white rounded-xl shadow-lg' : 'flex justify-start items-center gap-4 cursor-pointer bg-white w-full py-2 px-5 lg:px-10 text-prime rounded-xl shadow-lg'}>
                                    <div className='p-1 bg-white rounded-full text-prime'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div className='text-lg font-semibold'>
                                        <h1>Addresses</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8 p-5 bg-gray-100 shadow rounded-3xl">
                    {
                        sideNav === 'profile' ?
                            <div className='h-full p-5 bg-white shadow rounded-3xl'>
                                {
                                    editForm === false ?
                                        <div className={passForm ? "hidden" : ""}>
                                            <h1 className='text-xl font-bold text-prime'>My Details</h1>
                                            <div className='my-5'>
                                                <table>
                                                    <tr>
                                                        <td className='w-1/4 pb-2 font-semibold text-gray-500'>Name:</td>
                                                        <td className='pb-2 pl-2 font-bold text-black'>{userData.fullname}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='w-1/4 pb-2 font-semibold text-gray-500'>Email:</td>
                                                        <td className='pb-2 pl-2 font-bold text-black'>{userData.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='w-1/4 pb-2 font-semibold text-gray-500'>Phone Number:</td>
                                                        <td className='pb-2 pl-2 font-bold text-black'>+91 {userData.mobile}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='w-1/4 pb-2 font-semibold text-gray-500'>Address:</td>
                                                        <td className='pb-2 pl-2 font-bold text-black'>{userData.address}, {userData.city}, {userData.state} {userData.pincode}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className='grid lg:grid-cols-2 gap-5'>
                                                <motion.div whileHover={{ scale: 1.01 }} onClick={() => setEditForm(!editForm)} className="col-span-1  p-5 shadow rounded-lg cursor-pointer hover:shadow-[0px_0px_5px_1px_rgba(254,84,50,0.2)]">
                                                    <div className='grid grid-cols-5 gap-2'>
                                                        <div className="flex items-center justify-center col-span-1">
                                                            <div className='p-2 text-white rounded-full bg-prime w-fit'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-3">
                                                            <h1 className='font-bold text-prime '>Edit Profile</h1>
                                                            <p className='text-xs font-semibold text-gray-400'>edit your name, email and other details</p>
                                                        </div>
                                                        <div className='flex items-center justify-center col-span-1 text-gray-400'>
                                                            <ArrowRight />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.01 }} onClick={() => setPassForm(!passForm)} className="col-span-1  p-5 shadow rounded-lg cursor-pointer hover:shadow-[0px_0px_5px_1px_rgba(254,84,50,0.2)]">
                                                    <div className='grid grid-cols-5 gap-2'>
                                                        <div className="flex items-center justify-center col-span-1">
                                                            <div className='p-2 text-white rounded-full bg-prime w-fit'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                                                </svg>

                                                            </div>
                                                        </div>
                                                        <div className="col-span-3">
                                                            <h1 className='font-bold text-prime '>Change Password</h1>
                                                            <p className='text-xs font-semibold text-gray-400'>change password needs verification of email</p>
                                                        </div>
                                                        <div className='flex items-center justify-center col-span-1 text-gray-400'>
                                                            <ArrowRight />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>

                                        :

                                        <div className='relative'>
                                            <h1 className='text-xl font-bold text-prime'>Edit your details</h1>
                                            <form className='my-5'>
                                                <div className='grid grid-cols-2 gap-5'>
                                                    <div className='col-span-1'>
                                                        <label className='block mb-1 text-sm font-semibold text-gray-400'>Full name</label>
                                                        <input type="text" placeholder='Your full name' value="Heet Patel" className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                                    </div>
                                                    <div className='col-span-1'>
                                                        <label className='block mb-1 text-sm font-semibold text-gray-400'>Mobile number</label>
                                                        <input type="text" placeholder='Your full name' value="9925243323" className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                                    </div>
                                                    <div className='col-span-2'>
                                                        <label className='block mb-1 text-sm font-semibold text-gray-400'>Email address</label>
                                                        <input type="text" placeholder='Your full name' value="email@example.com" className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                                    </div>
                                                    <div className='col-span-2'>
                                                        <label className='block mb-1 text-sm font-semibold text-gray-400'>Primary address</label>
                                                        <textarea className='w-full h-24 px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow resize-none focus:outline-none' value="1, The Raja Avenue Society, Ghansyam nagar, zundal 382421"></textarea>
                                                    </div>
                                                    <div className='col-span-2 '>
                                                        <motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Update</span><span className=' absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button>
                                                    </div>
                                                </div>
                                                <div className='absolute top-0 right-0 opacity-50 cursor-pointer hover:opacity-100' onClick={() => setEditForm(!editForm)}>
                                                    <Close />
                                                </div>
                                            </form>
                                        </div>
                                }

                                {
                                    passForm && <div className='relative'>
                                        <h1 className='text-xl font-bold text-prime'>Change your password</h1>
                                        <form className='my-5'>
                                            <div className='grid grid-cols-2 gap-5'>
                                                <div className='col-span-2'>
                                                    <label className='block mb-1 text-sm font-semibold text-gray-400'>Current Password</label>
                                                    <input type="password" placeholder='Your current password' className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                                </div>
                                                <div className='col-span-2'>
                                                    <label className='block mb-1 text-sm font-semibold text-gray-400'>New password</label>
                                                    <input type="password" placeholder='Your new password' className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                                </div>
                                                <div className='col-span-2'>
                                                    <label className='block mb-1 text-sm font-semibold text-gray-400'>Confirm password</label>
                                                    <input type="password" placeholder='confirm your password' className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                                </div>
                                                <div className='col-span-2 '>
                                                    <motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Change password</span><span className=' absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button>
                                                </div>
                                            </div>
                                            <div className='absolute top-0 right-0 opacity-50 cursor-pointer hover:opacity-100' onClick={() => setPassForm(!passForm)}>
                                                <Close />
                                            </div>
                                        </form>
                                    </div>
                                }


                            </div>
                            : ""
                    }
                    {
                        sideNav === 'order' ?
                            <div className='h-full p-5 bg-white shadow rounded-3xl'>
                                <div className='mb-5'>
                                    <h1 className='text-xl font-bold text-prime'>My Orders</h1>
                                </div>
                                <div className='p-5 mb-5 bg-gray-50 rounded-3xl'>
                                    <div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-5">
                                            <div className="col-span-1">
                                                <div className='text-sm font-bold'>
                                                    <p>Margherita Pizza x 2</p>
                                                    <p>Farm House x 1</p>
                                                </div>
                                                <div>
                                                    <h1 className='text-base font-bold md:text-lg text-prime '>₹<span className='ml-1'>679</span></h1>
                                                </div>
                                            </div>
                                            <div className='flex items-start justify-start col-span-1 gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 -mt-1 text-prime">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                <p className='text-xs font-semibold'>1, The Raja Avenue Society, Ghansyam nagar, zundal 382421
                                                </p>
                                            </div>
                                            <div className='flex flex-col items-end justify-start col-span-1 gap-1'>
                                                <h1 className='flex items-center justify-center gap-2 text-sm font-bold'>Preparing <span className='p-1 text-white bg-blue-400 rounded-full'><img src={preparing} alt='preparing' className='w-3 h-3' /></span></h1>
                                                <h1 className='flex items-center justify-center gap-2 text-sm font-bold'>On the way <span className='p-1 text-white bg-yellow-800 rounded-full'><img src={onTheWay} alt='on the way' className='w-3 h-3' /></span></h1>
                                                <h1 className='flex items-center justify-center gap-2 text-sm font-bold'>Delivered <span className='p-1 text-white bg-green-400 rounded-full'><CheckIcon /></span></h1>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='w-full my-3 border-b border-dashed border-prime/40' />
                                    <div className='flex flex-col sm:flex-row sm:items-center justify-between text-sm font-medium text-gray-500'>
                                        <p>Order Id: <span className='text-sm sm:text-base font-bold text-prime'>#12345678</span></p>
                                        <p>Order Date: <span className='text-sm sm:text-base font-bold text-prime'>February 10, 2023 11:45 AM</span> </p>
                                    </div>
                                </div>
                        

                            </div>
                            : ""
                    }
                    {
                        sideNav === 'address' ?
                            <div className='h-full p-5 bg-white shadow rounded-3xl'>
                                {
                                    !editAddForm ? <>
                                        <div className='mb-5'>
                                            <h1 className='text-xl font-bold text-prime'>My Addresses</h1>
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="col-span-2 p-3 sm:p-5 rounded-lg shadow ">
                                                <div className='grid grid-cols-8 gap-2'>
                                                    <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                                                        <div className='p-2 text-white rounded-full bg-prime w-fit'>
                                                            <HomeIcon />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-5">
                                                        <h1 className='font-bold text-prime text-sm sm:text-base'>Home Address</h1>
                                                        <p className='text-xs font-semibold text-gray-400'>1, The Raja Avenue Society, Ghansyam nagar, zundal 382421</p>
                                                    </div>
                                                    <div className='flex items-center justify-center col-span-8 sm:col-span-2 gap-5 text-gray-400'>
                                                        <button className='px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-white transition duration-300 rounded bg-prime hover:scale-105' onClick={() => setEditAddForm(!editAddForm)}>Edit</button>
                                                        <button className='px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 transition duration-300 bg-gray-300 rounded hover:scale-105' onClick={() => setDeleteModal(!deleteModal)}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-2 p-3 sm:p-5 rounded-lg shadow ">
                                                <div className='grid grid-cols-8 gap-2'>
                                                    <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                                                        <div className='p-2 text-white rounded-full bg-prime w-fit'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                            </svg>


                                                        </div>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-5">
                                                        <h1 className='font-bold text-prime  text-sm sm:text-base'>Work Address</h1>
                                                        <p className='text-xs font-semibold text-gray-400'>1, The Raja Avenue Society, Ghansyam nagar, zundal 382421</p>
                                                    </div>
                                                    <div className='flex items-center justify-center col-span-8 sm:col-span-2 gap-5 text-gray-400'>
                                                        <button className='px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-white transition duration-300 rounded bg-prime hover:scale-105' onClick={() => setEditAddForm(!editAddForm)}>Edit</button>
                                                        <button className='px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 transition duration-300 bg-gray-300 rounded hover:scale-105' onClick={() => setDeleteModal(!deleteModal)}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-2 p-3 sm:p-5 rounded-lg shadow ">
                                                <div className='grid grid-cols-8 gap-2'>
                                                    <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                                                        <div className='p-2 text-white rounded-full bg-prime w-fit'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                                            </svg>


                                                        </div>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-5">
                                                        <h1 className='font-bold text-prime text-sm sm:text-base'>Office Address</h1>
                                                        <p className='text-xs font-semibold text-gray-400'>1, The Raja Avenue Society, Ghansyam nagar, zundal 382421</p>
                                                    </div>
                                                    <div className='flex items-center justify-center col-span-8 sm:col-span-2 gap-5 text-gray-400'>
                                                        <button className='px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-white transition duration-300 rounded bg-prime hover:scale-105' onClick={() => setEditAddForm(!editAddForm)}>Edit</button>
                                                        <button className='px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 transition duration-300 bg-gray-300 rounded hover:scale-105' onClick={() => setDeleteModal(!deleteModal)}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                        :
                                        <div className='relative'>
                                            <h1 className='text-xl font-bold text-prime'>Edit Address</h1>
                                            <form className='my-5'>
                                                <div className='grid grid-cols-2 gap-5'>
                                                    <div className='col-span-2'>
                                                        <label className='block mb-1 text-sm font-semibold text-gray-400'>Address Type</label>
                                                        <input type="text" placeholder='Your address type' value="Home" className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                                    </div>
                                                    <div className='col-span-2'>
                                                        <label className='block mb-1 text-sm font-semibold text-gray-400'>Address</label>
                                                        <textarea className='w-full h-24 px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow resize-none focus:outline-none' value="1, The Raja Avenue Society, Ghansyam nagar, zundal 382421"></textarea>
                                                    </div>
                                                    <div className='col-span-2 '>
                                                        <motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Update</span><span className=' absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button>
                                                    </div>
                                                </div>
                                                <div className='absolute top-0 right-0 opacity-50 cursor-pointer hover:opacity-100' onClick={() => setEditAddForm(!editAddForm)}>
                                                    <Close />
                                                </div>
                                            </form>
                                        </div>

                                }
                                <Modal state={deleteModal} setState={setDeleteModal}>
                                    <div className='py-5'>
                                        <h1 className='text-xl font-bold text-prime'>Delete Address</h1>
                                        <p className='text-sm font-bold text-gray-500'>you really want to delete this address ?</p>
                                        <div className='absolute flex items-center justify-end gap-2 right-5 bottom-5'>
                                            <button className='px-8 py-1 font-bold text-white transition duration-300 rounded bg-prime hover:scale-105'>Yes</button>
                                            <button onClick={() => setDeleteModal(!deleteModal)} className='px-8 py-1 font-bold text-gray-700 transition duration-300 bg-gray-300 rounded hover:scale-105'>No</button>
                                        </div>
                                    </div>
                                </Modal>


                            </div>
                            : ""
                    }

                </div>
            </div>
        </div>
    )


}

export default Profile
