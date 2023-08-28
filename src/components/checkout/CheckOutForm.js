import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ArrowRight, ErrIcon, HomeIcon } from '../icons/CommonIcons';

const CheckOutForm = ({setOrderState , address , setAddress}) => {


    const { cart, total } = useSelector((state) => state.cart);
    const [user, setUser] = useState({});
    useEffect(() => {
        const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
        setUser(loggedUser);
    })

    


    const inputHadler = (e) => {
        setAddress({
            ...address,
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
        else {
            document.getElementById(`${e.target.name}err`).classList.add('hidden');
        }

    }

    const checkAddress = () => {
       
        let fields = [address.fullname, address.email, address.mobile, address.address, address.pincode, address.password, address.state, address.city, address.cpassword]
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

        for (let x in address) {
            if (address[x] === "" || (x === "email" && !address[x].match(ep)) || (x === "mobile" && !address[x].match(mp)) || ((x === "password" || x === "cpassword") && !address[x].match(passp))) {
                document.getElementById(`${x}err`).classList.remove('hidden');
                val = false;
            }
            else {
                document.getElementById(`${x}err`).classList.add('hidden');
                val = true;
            }
        }
        if(val == true) {
            setOrderState(2);
        }

    }

    return (
        <div className='my-10 grid grid-cols-12 gap-y-5 lg:gap-10'>
            <div className="col-span-12 lg:col-span-7">
                <div className=''>
                    {
                        user != null ? <>
                            <h1 className='text-xl font-semibold text-gray-400 mb-5'>Select address</h1>
                            <div className=''>
                                <div className={address === "home" ? 'shadow-lg my-5 rounded' : 'shadow my-5 rounded'}>
                                    <input className="sr-only peer" type="radio" value="any" name="address" id="home" />
                                    <label onClick={() => setAddress('home')} className="transition duration-300 ease-in-out flex px-6 py-2 bg-gray-100 rounded cursor-pointer focus:outline-none hover:bg-gray-100 peer-checked:bg-white text-sm w-full" htmlFor="home">
                                        <div className='flex w-full gap-2 py-4'>
                                            <div className="flex justify-center items-center w-1/5">
                                                <div className='bg-prime p-2 rounded-full text-white'>
                                                    <HomeIcon />

                                                </div>
                                            </div>
                                            <div className="w-4/5">
                                                <h1 className='text-prime font-bold '>Home Address</h1>
                                                <p className='text-gray-400 text-xs font-semibold'>1, The Raja Avenue Society, Ghansyam nagar, zundal 382421 1, The Raja Avenue Society, Ghansyam nagar, zundal 382421 1, The Raja Avenue Society, Ghansyam nagar, zundal 382421</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className={address === "work" ? 'shadow-lg my-5 rounded' : 'shadow my-5 rounded'}>
                                    <input className="sr-only peer" type="radio" value="any" name="address" id="work" />
                                    <label onClick={() => setAddress('work')} className="transition duration-300 ease-in-out flex px-6 py-2 bg-gray-100 rounded cursor-pointer focus:outline-none hover:bg-gray-100 peer-checked:bg-white text-sm w-full" htmlFor="work">
                                        <div className='flex w-full gap-2 py-4'>
                                            <div className="flex justify-center items-center w-1/5">
                                                <div className='bg-prime p-2 rounded-full text-white'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>


                                                </div>
                                            </div>
                                            <div className="w-4/5">
                                                <h1 className='text-prime font-bold '>Work Address</h1>
                                                <p className='text-gray-400 text-xs font-semibold'>1, The Raja Avenue Society, Ghansyam nagar, zundal 382421</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className={address === "office" ? 'shadow-lg my-5 rounded' : 'shadow my-5 rounded'}>
                                    <input className="sr-only peer" type="radio" value="any" name="address" id="other" />
                                    <label onClick={() => setAddress('office')} className="transition duration-300 ease-in-out flex px-6 py-2 bg-gray-100 rounded cursor-pointer focus:outline-none hover:bg-gray-100 peer-checked:bg-white text-sm w-full" htmlFor="other">
                                        <div className='flex w-full gap-2 py-4'>
                                            <div className="flex justify-center items-center w-1/5">
                                                <div className='bg-prime p-2 rounded-full text-white'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                                    </svg>


                                                </div>
                                            </div>
                                            <div className="w-4/5">
                                                <h1 className='text-prime font-bold '>Office Address</h1>
                                                <p className='text-gray-400 text-xs font-semibold'>1, The Raja Avenue Society, Ghansyam nagar, zundal 382421</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className={address === "custom" ? 'shadow-lg my-5 rounded' : 'shadow my-5 rounded'}>
                                    <div>
                                        <input className="sr-only peer" type="radio" value="any" name="address" id="office" />
                                        <label onClick={() => setAddress('custom')} className="transition duration-300 ease-in-out flex px-6 py-2 bg-gray-100 rounded cursor-pointer focus:outline-none hover:bg-gray-100 peer-checked:bg-white text-sm" htmlFor="office">
                                            <div className='flex gap-2 py-4 w-full'>
                                                <div className="flex justify-center items-center w-1/5">
                                                    <div className='bg-prime p-2 rounded-full text-white'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="w-4/5">
                                                    <h1 className='text-prime font-bold '>Custom Address</h1>
                                                    <p className='text-gray-400 text-xs font-semibold'>add custom address for this order</p>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    {
                                        address === "custom" ?
                                            <div className='p-5'>
                                                <form>
                                                    <div className="grid grid-cols-2 gap-5">
                                                        <div className="col-span-1">
                                                            <input type="text" placeholder='Enter name' className='bg-gray-100 px-5 py-2 rounded w-full' />
                                                        </div>
                                                        <div className="col-span-1">
                                                            <input type="text" placeholder='Enter mobile number' className='bg-gray-100 px-5 py-2 rounded w-full' />
                                                        </div>
                                                        <div className="col-span-2">
                                                            <input type="text" placeholder='Enter email' className='bg-gray-100 px-5 py-2 rounded w-full' />
                                                        </div>
                                                        <div className="col-span-2">
                                                            <input type="text" placeholder='Enter your address' className='bg-gray-100 px-5 py-2 rounded w-full' />
                                                        </div>
                                                        <div className="col-span-2">
                                                            <div className="grid grid-cols-3 gap-5">
                                                                <div className="col-span-1">
                                                                    <select name="" id="" className='bg-gray-100 px-5 py-2 rounded w-full cursor-pointer'>
                                                                        <option>Enter state</option>
                                                                        <option>Gujarat</option>
                                                                        <option>Gujarat</option>
                                                                        <option>Gujarat</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-span-1">
                                                                    <select name="" id="" className='bg-gray-100 px-5 py-2 rounded w-full cursor-pointer'>
                                                                        <option>Enter city</option>
                                                                        <option>Ahmedabad</option>
                                                                        <option>Surat</option>
                                                                        <option>Vadodara</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-span-1"><input type="text" placeholder='Enter pincode' className='bg-gray-100 px-5 py-2 rounded w-full' /></div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </form>
                                            </div> : ""
                                    }

                                </div>
                            </div>
                        </>
                            :
                            <>
                                <h1 className='text-xl font-semibold text-gray-400 mb-5'>Your details</h1>
                                <span id="adderr" className='hidden text-base font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Please fill the address details</span></span> </span>
                                <form>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="col-span-2 sm:col-span-1">
                                            <input type="text" name="fullname" placeholder='Enter name' value={address.fullname} onChange={inputHadler} className='bg-gray-100 px-5 py-2 rounded w-full' />
                                            <span id="fullnameerr" className='hidden text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /><span>Enter valid full name</span></span> </span>
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <input type="text" placeholder='Enter mobile number' name="mobile" value={address.mobile} className='bg-gray-100 px-5 py-2 rounded w-full' onChange={inputHadler} />
                                            <span id="mobileerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid mobile number</span></span></span>
                                        </div>
                                        <div className="col-span-2">
                                            <input type="text" placeholder='Enter email' name="email" value={address.email} onChange={inputHadler} className='bg-gray-100 px-5 py-2 rounded w-full' />
                                            <span id="emailerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid email</span></span></span>
                                        </div>
                                        <div className="col-span-2">
                                            <input type="text" placeholder='Enter your address' onChange={inputHadler} name='address' value={address.address} className='bg-gray-100 px-5 py-2 rounded w-full' />
                                            <span id="addresserr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid address</span></span></span>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                                <div className="col-span-1">
                                                    <select name="state" value={address.state} onChange={inputHadler} id="" className='bg-gray-100 px-5 py-2 rounded w-full cursor-pointer'>
                                                        <option>Enter state</option>
                                                        <option>Gujarat</option>
                                                        <option>Gujarat</option>
                                                        <option>Gujarat</option>
                                                    </select>
                                                    <span id="stateerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid state</span></span></span>
                                                </div>
                                                <div className="col-span-1">
                                                    <select name="city" value={address.city} onChange={inputHadler} id="" className='bg-gray-100 px-5 py-2 rounded w-full cursor-pointer'>
                                                        <option>Enter city</option>
                                                        <option>Ahmedabad</option>
                                                        <option>Surat</option>
                                                        <option>Vadodara</option>
                                                    </select>
                                                    <span id="cityerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid city</span></span></span>
                                                </div>

                                                <div className="col-span-1">
                                                    <input type="text" name="pincode" value={address.pincode} onChange={inputHadler} placeholder='Enter pincode' className='bg-gray-100 px-5 py-2 rounded w-full' />
                                                    <span id="pincodeerr" className='hidden gap-1 mt-1 text-xs font-bold text-red-400'><span className='flex items-center justify-start gap-1 mt-1'><ErrIcon /> <span>Enter valid pincode</span></span></span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </form>
                            </>
                    }


                    {/* Guest */}


                </div>

            </div>
            <div className="col-span-12 lg:col-span-5">
                <h1 className='text-xl font-semibold text-gray-400 mb-5'>Order Details</h1>
                <div className="bg-gray-100 shadow rounded-3xl p-5">
                    <div className='bg-white shadow rounded-3xl p-5 sm:p-8  relative h-full'>
                        {
                            cart.map((item) => {
                                // console.log(item)
                                return (
                                    <>

                                        <div className="grid grid-cols-4 gap-5 py-3 relative">
                                            <div className="col-span-1">
                                                <img src={item.FoodImg} alt="dummy" />
                                            </div>
                                            <div className='col-span-3 sm:col-span-2'>
                                                <h1 className='font-semibold'>{item.name}</h1>
                                                <p className='font-bold'>x <span>{item.quantity}</span></p>
                                            </div>
                                            <div className="col-span-4 sm:col-span-1 absolute sm:static bottom-3 right-0">
                                                <h1 className='text-base md:text-lg font-bold text-prime text-end'>₹<span className='ml-1'>{item.total}</span></h1>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                        <hr className='h-0.5 my-5 bg-prime' />
                        <div className='flex items-center justify-between my-1'>

                            <div className=''>
                                <h1 className='text-xl font-bold '>Total</h1>
                            </div>
                            <div className=''>
                                <h1 className='text-base font-bold md:text-xl text-prime'>₹<span className='ml-1'>{total}</span></h1>
                            </div>
                        </div>

                        <div className='w-full mt-8'>
                            <button onClick={checkAddress} className='mt-2 sm:mt-0 transition duration-300 ease-in-out bg-prime w-full flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 sm:px-5 sm:py-3'><span className='mx-auto uppercase font-medium sm:font-bold text-xs sm:text-sm'>Proceed to Checkout</span><span className=' absolute -top-0.5 sm:-top-0 -right-0.5 sm:-right-1 p-1 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckOutForm