import React, { useEffect, useState } from 'react'
import { ArrowRight, ErrIcon } from '../components/icons/CommonIcons'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import ButtonLoader from '../components/loaders/ButtonLoader'


const Register = ({URL}) => {

    const navigate = useNavigate()


    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashedPassword;
    }


    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    

    const [data, setData] = useState({
        fullname: '',
        mobile: '',
        email: '',
        address: '',
        state: '',
        city: '',
        pincode: '',
        password: '',
        cpassword: ''
    })


    const inputHadler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

        let ep = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let mp = /^[6-9]\d{9}$/
        let pp = /^[1-9]{1}\d{2}\s?\d{3}$/
        let passp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

        if (e.target.value === "") {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if (e.target.name === 'email' && !e.target.value.match(ep)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if (e.target.name === 'mobile' && !e.target.value.match(mp)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if (e.target.name === 'pincode' && !e.target.value.match(pp)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else if ((e.target.name === 'password' || e.target.name === "cpassword") && !e.target.value.match(passp)) {
            document.getElementById(`${e.target.name}err`).classList.remove('hidden');
        }
        else {
            document.getElementById(`${e.target.name}err`).classList.add('hidden');
        }

    }

    const handleForm = (e) => {
        e.preventDefault();

        let fields = [data.fullname, data.email, data.mobile, data.address, data.pincode, data.password, data.state, data.city, data.cpassword]
        let ep = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let mp = /^[6-9]\d{9}$/
        let pp = /^[1-9]{1}\d{2}\s?\d{3}$/
        let passp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        let val = false

        if (fields.every((val) => val === "")) {
            document.getElementById('fullnameerr').classList.remove('hidden');
            document.getElementById('emailerr').classList.remove('hidden');
            document.getElementById('mobileerr').classList.remove('hidden');
            document.getElementById('addresserr').classList.remove('hidden');
            document.getElementById('pincodeerr').classList.remove('hidden');
            document.getElementById('passworderr').classList.remove('hidden');
            document.getElementById('cpassworderr').classList.remove('hidden');
            document.getElementById('stateerr').classList.remove('hidden');
            document.getElementById('cityerr').classList.remove('hidden');
            val = false;
        }

        for (let x in data) {
            if (data[x] === "" || (x === "email" && !data[x].match(ep)) || (x === "mobile" && !data[x].match(mp)) || ((x === "password" || x === "cpassword") && !data[x].match(passp))) {
                document.getElementById(`${x}err`).classList.remove('hidden');
                val = false;
            }
            else {
                document.getElementById(`${x}err`).classList.add('hidden');
                val = true;
            }
        }
        if (val === true) {

            hashPassword(data.password)
                .then(hashedPassword => {

                    const users = window.localStorage.getItem('users');
                    if (users === null) {
                        const newUsers = [{ ...data, password: hashedPassword, cpassword: hashedPassword, Uid: Math.floor(Math.random() * 1000) + 1 }];
                        window.localStorage.setItem('users', JSON.stringify(newUsers));
                        alert("Login successful you will be redirected to login");
                        setData({
                            fullname: '',
                            mobile: '',
                            email: '',
                            address: '',
                            state: '',
                            city: '',
                            pincode: '',
                            password: '',
                            cpassword: ''
                        })

                        navigate(URL+'/login');
                    }
                    else {

                        const oldUsers = JSON.parse(users);

                        const checkUser = oldUsers.some((user) => user.email === data.email);

                        if (checkUser) {
                            alert("This email is already exist please login or use different email");
                            setData({ ...data, email: '' })
                        }
                        else {

                            const newUsers = [...oldUsers, { ...data, password: hashedPassword, cpassword: hashedPassword, Uid: Math.floor(Math.random() * 1000) + 1 }];

                            window.localStorage.setItem('users', JSON.stringify(newUsers));
                            alert("Login successful you will be redirected to login");
                            setData({
                                fullname: '',
                                mobile: '',
                                email: '',
                                address: '',
                                state: '',
                                city: '',
                                pincode: '',
                                password: '',
                                cpassword: ''
                            })

                            navigate(URL+'/login');

                        }

                    }

                });




        }
    }

    return (
        <div className='px-5 pt-10 sm:pt-20 lg:pt-16 sm:px-10 md:px-16 lg:px-24'>
            <div className="w-full sm:w-[90%] md:w-3/4 xl:w-2/4 p-5 mx-auto mt-20 mb-20 bg-gray-100 shadow rounded-3xl">
                <div className='p-5 bg-white shadow rounded-3xl'>
                    <div className='flex flex-col items-center justify-center py-3 sm:py-5'>
                        <h1 className='text-2xl font-bold sm:text-4xl'>
                            Register
                        </h1>
                        <p className='my-4 font-semibold text-prime'>join our happy family</p>
                    </div>
                    <form name='register' onSubmit={handleForm}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-5">
                            <div className='col-span-1'>
                                <label className='block mb-1 text-xs font-medium text-gray-400'>Full name</label>
                                <input type="text" placeholder='Your full name' name="fullname" value={data.fullname} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHadler} />
                                <span id="fullnameerr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid full name</span></span> </span>
                            </div>
                            <div className='col-span-1'>
                                <label className='block mb-1 text-xs font-medium text-gray-400'>Mobile number</label>
                                <input type="text" placeholder='Your mobile number' name="mobile" value={data.mobile} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHadler} />
                                <span id="mobileerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid mobile number</span></span></span>
                            </div>
                            <div className='col-span-1'>
                                <label className='block mb-1 text-xs font-medium text-gray-400'>Email</label>
                                <input type="text" placeholder='Your registered email' name="email" value={data.email} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHadler} />
                                <span id="emailerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid email</span></span></span>
                            </div>
                            <div className="col-span-1">
                                <label className='block mb-1 text-xs font-medium text-gray-400'>Address</label>
                                <input type="text" placeholder='Enter your address' name="address" value={data.address} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHadler} />
                                <span id="addresserr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid address</span></span></span>
                            </div>
                            <div className="col-span-1 sm:col-span-2">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-5">
                                    <div className="col-span-1">
                                        <label className='block mb-1 text-xs font-medium text-gray-400' >State</label>
                                        <select id="" name="state" value={data.state} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow cursor-pointer focus:outline-none' onChange={inputHadler}>
                                            <option value="">Enter state</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Gujarat">Gujarat</option>
                                        </select>
                                        <span id="stateerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid state</span></span></span>
                                    </div>
                                    <div className="col-span-1">
                                        <label className='block mb-1 text-xs font-medium text-gray-400' >city</label>
                                        <select name="city" value={data.city} id="" className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow cursor-pointer focus:outline-none' onChange={inputHadler}>
                                            <option value="">Enter city</option>
                                            <option value="Ahmedabad">Ahmedabad</option>
                                            <option value="Surat">Surat</option>
                                            <option value="Vadodara">Vadodara</option>
                                        </select>
                                        <span id="cityerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid city</span></span></span>
                                    </div>

                                    <div className="col-span-1">
                                        <label className='block mb-1 text-xs font-medium text-gray-400' >Pincode</label>
                                        <input type="text" placeholder='Enter pincode' name="pincode" value={data.pincode} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHadler} />
                                        <span id="pincodeerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid pincode</span></span></span>
                                    </div>
                                </div>

                            </div>
                            <div className='col-span-1'>
                                <label className='block mb-1 text-xs font-medium text-gray-400'>Password</label>
                                <input type="password" placeholder='Your password' name="password" value={data.password} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHadler} />
                                <span id="passworderr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid password</span></span></span>
                            </div>
                            <div className='col-span-1'>
                                <label className='block mb-1 text-xs font-medium text-gray-400'>Confirm Password</label>
                                <input type="password" placeholder='Confirm your password' name="cpassword" value={data.cpassword} className='w-full px-5 py-2 text-sm font-bold text-black bg-gray-100 rounded shadow focus:outline-none' onChange={inputHadler} />
                                <span id="cpassworderr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>password does not match</span></span></span>
                            </div>
                            <div className='col-span-1 sm:col-span-2 mt-5'>
                                <motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime mx-auto w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Register</span><span className=' absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button>
                            </div>
                        </div>
                    </form>
                    <div className='flex items-center justify-center gap-3 mt-5 text-sm font-bold'>
                        <p>Already a customer ?</p>
                        <div>
                            <Link to={`${URL}/login`} className='underline text-prime hover:text-gray-600'>Login here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
