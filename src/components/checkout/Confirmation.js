import React, { useState } from 'react'
import { ArrowRight } from '../icons/CommonIcons'
import { useSelector } from 'react-redux';

const Confirmation = ({ address, setOrderState }) => {

    // const [userData, setUserData] = useState({
    //     fullname: 'Vishal Mistry',
    //     email: 'vishal.mistry@gmail.com',
    //     mobile: '1234567890',
    //     address: 'test',
    //     city: 'kalol',
    //     state: 'Gujarat',
    //     pincode: '382721'
    // })

    const [userData, setUserData] = useState(address)


    const { cart, total } = useSelector((state) => state.cart);

    const confirmDetails = () => {
        setOrderState(3);
    }

    return (
        <div className='my-10 grid grid-cols-12 gap-y-5 lg:gap-10'>
            <div className="col-span-12 lg:col-span-6">
                <h1 className='text-xl font-semibold text-gray-400 mb-5'>Confirm your details</h1>
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
                            <td className='w-1/4 pb-2 font-semibold text-gray-500'>Delivery Address:</td>
                            <td className='pb-2 pl-2 font-bold text-black'>{userData.address}, {userData.city}, {userData.state} {userData.pincode}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
                <h1 className='text-xl font-semibold text-gray-400 mb-5'>Payment details</h1>
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
                                <h1 className='mb-10 text-base font-bold md:text-xl text-prime md:mb-0'>₹<span className='ml-1'>{total}</span></h1>
                            </div>
                        </div>


                        <div className='w-full mt-8'>
                            <button onClick={confirmDetails} className='mt-2 sm:mt-0 transition duration-300 ease-in-out bg-prime w-full flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 sm:px-5 sm:py-3'><span className='mx-auto uppercase font-medium sm:font-bold text-xs sm:text-sm'>Confirm Details</span><span className=' absolute -top-0.5 sm:-top-0 -right-0.5 sm:-right-1 p-1 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Confirmation