import React, { useEffect, useState } from 'react'
import { ArrowRight, Close, ErrIcon } from '../components/icons/CommonIcons'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { fetchCart } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const Login = ({URL}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const LoggedUser = window.localStorage.getItem('loggedUser');

        console.log(LoggedUser);
        if(LoggedUser != null) {
            navigate(URL+'/profile');
        }
    })

    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    


    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashedPassword;
    }

    const [toggleforgot, setToggleForgot] = useState(false)

    const [data, setData] = useState({
        email: '',
        password: '',
        otp: '',
        remail: '',
        fpassword: '',
        fcpassword: '',
    })



    const inputHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

        let pp = /^[1-9]{1}\d{2}\s?\d{3}$/
        let ep = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let passp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

        if (e.target.value === "") {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if ((e.target.name === 'email' || e.target.name === 'remail') && !e.target.value.match(ep)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if ((e.target.name === 'password' || e.target.name === "fpassword" || e.target.name === "fcpassword") && !e.target.value.match(passp)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if (e.target.name === 'otp' && !e.target.value.match(pp)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else {
            document.getElementById(`${e.target.name}err`).classList.add('hidden');
        }

    }

    const handleForm = (e) => {
        e.preventDefault();

        let ep = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let passp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

        const fields = [data.email, data.password]
        let val = false

        if (fields.every((f) => f === "")) {
            document.getElementById('emailerr').classList.remove('hidden');
            document.getElementById('passworderr').classList.remove('hidden');
            val = false;
        }
        else if (data.email === "" || !data.email.match(ep)) {
            document.getElementById('emailerr').classList.remove('hidden');
            document.getElementById('passworderr').classList.add('hidden');
            val = false;
        }
        else if (data.password === "" || !data.password.match(passp)) {
            document.getElementById('passworderr').classList.remove('hidden');
            document.getElementById('emailerr').classList.add('hidden');
            val = false;
        }
        else {
            val = true;
        }
        if (val === true) {

            hashPassword(data.password)
                .then(hashedPassword => {
                    const users = JSON.parse(window.localStorage.getItem('users'));

                    if (users !== null) {
                        const checkUser = users.find((user) => user.email === data.email && user.password === hashedPassword);


                        if (checkUser != null) {
                            window.localStorage.setItem('loggedUser', JSON.stringify({ Uid: checkUser.Uid, email: checkUser.email }));
                            setData({
                                email: '',
                                password: '',
                                otp: '',
                                remail: '',
                                fpassword: '',
                                fcpassword: '',
                            })
                            alert("Logged in successfully");
                            navigate(URL+'/profile');
                        }
                        else {
                            setData({
                                email: data.email,
                                password: '',
                                otp: '',
                                remail: '',
                                fpassword: '',
                                fcpassword: '',
                            });
                            alert("Please check the login credentials");
                        }
                    }
                    else {
                        setData({
                            email: '',
                            password: '',
                            otp: '',
                            remail: '',
                            fpassword: '',
                            fcpassword: '',
                        });
                        alert("Please register your email first");
                    }

                });

        }
    }

    return (
        <div className='px-5 pt-10 sm:pt-20 lg:pt-16 sm:px-10 md:px-16 lg:px-24'>

            <div className="w-full sm:w-[90%] md:w-3/4 xl:w-2/4 p-5 mx-auto mt-20 mb-20 bg-gray-100 shadow rounded-3xl">
                {
                    !toggleforgot ?
                        <div className='p-5 bg-white shadow rounded-3xl'>
                            <div className='flex flex-col items-center justify-center py-3 sm:py-5'>
                                <h1 className='text-2xl font-bold sm:text-4xl'>
                                    Login
                                </h1>
                                <p className='my-4 font-semibold text-prime'>login with your credentials</p>
                            </div>
                            <form onSubmit={handleForm}>
                                <div className="grid grid-cols-1 gap-5">
                                    <div className='col-span-1'>
                                        <label className='block mb-1 text-xs font-medium text-gray-400'>Email</label>
                                        <input type="text" placeholder='Your email' name="email" onChange={inputHandler} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                        <span id="emailerr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid email</span></span> </span>
                                    </div>
                                    <div className='col-span-1'>
                                        <label className='block mb-1 text-xs font-medium text-gray-400'>Password</label>
                                        <input type="password" placeholder='Your password' name="password" onChange={inputHandler} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                        <span id="passworderr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid password</span></span> </span>
                                    </div>
                                    <div className='col-span-1 -my-3'>
                                        <div className='flex items-start justify-end'>
                                            <div className='text-xs font-bold text-gray-500 cursor-pointer hover:text-prime' onClick={() => setToggleForgot(!toggleforgot)}>Forgot password ?</div>
                                        </div>
                                    </div>
                                    <div className='col-span-1 mt-5'>
                                        <motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime mx-auto w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Login</span><span className=' absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button>
                                    </div>
                                </div>
                            </form>
                            <div className='flex items-center justify-center gap-3 mt-5 text-sm font-bold'>
                                <p>New here ?</p>
                                <div>
                                    <Link to={`${URL}/register`} className='underline text-prime hover:text-gray-600'>Join our family</Link>
                                </div>
                            </div>
                        </div>

                        :
                        <div className='relative p-5 bg-white shadow rounded-3xl'>
                            <div className='absolute opacity-50 cursor-pointer right-5 top-5 hover:opacity-100' onClick={() => setToggleForgot(!toggleforgot)}>
                                <Close />
                            </div>
                            <div className='flex flex-col items-center justify-center py-3 sm:py-5'>
                                <h1 className='text-2xl font-bold sm:text-4xl'>
                                    forgot password
                                </h1>
                                <p className='my-4 font-semibold text-prime'>Enter your registered email for verification</p>
                            </div>
                            <div className="grid grid-cols-1 gap-5">
                                <div className='col-span-1'>
                                    <label className='block mb-1 text-sm font-semibold text-gray-400'>Email</label>
                                    <input type="text" placeholder='Your registered email' name="remail" value={data.remail} onChange={inputHandler} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                    <span id="remailerr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid email</span></span> </span>
                                </div>
                                <div className='col-span-1'>
                                    <label className='block mb-1 text-sm font-semibold text-gray-400'>Otp</label>
                                    <input type="text" placeholder='Your otp' name="otp" onChange={inputHandler} value={data.otp} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' />
                                    <span id="otperr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid otp</span></span> </span>
                                </div>
                                <div className='col-span-1'>
                                    <label className='block mb-1 text-xs font-medium text-gray-400'>Password</label>
                                    <input type="password" placeholder='Your password' name="fpassword" value={data.fpassword} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHandler} />
                                    <span id="fpassworderr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid password</span></span></span>
                                </div>
                                <div className='col-span-1'>
                                    <label className='block mb-1 text-xs font-medium text-gray-400'>Confirm Password</label>
                                    <input type="password" placeholder='Confirm your password' name="fcpassword" value={data.fcpassword} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHandler} />
                                    <span id="fcpassworderr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>password does not match</span></span></span>
                                </div>
                                <div className='col-span-1 mt-5'>
                                    <motion.button onClick={handleForm} whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime mx-auto w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>send otp</span><span className=' absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button>
                                </div>
                            </div>
                        </div>
                }


            </div>
        </div >
    )
}

export default Login
