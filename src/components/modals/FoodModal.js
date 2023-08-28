import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus, StarFill, StarEmp } from '../icons/CommonIcons'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'



const FoodModal = (props) => {


    const dispatch = useDispatch()

    const { state, setState, item, quan, size, setQuan, setSize } = props


    const fillStars = []

    for (let i = 0; i < parseInt(item.ratings); i++) {
        fillStars.push(i);
    }
    const emptyStars = []
    for (let i = 5; i > fillStars.length; i--) {
        emptyStars.push(i)
    }

    function decQuan() {
        if (quan === 1) {
            setQuan(1)
        }
        else {

            setQuan((current) => current - 1)
        }
    }
    function incQuan() {
        if (quan === 10) {
            setQuan(10)
        }
        else {
            setQuan((current) => current + 1)
        }
    }

    function addToCartHandler() {
        const data = {
            item: item,
            quantity: quan,
            size: size
        }
        dispatch(addToCart(data))
    }


    if (state === true) {

        document.body.style.overflow = "hidden"

        return (
            <div className='fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/10 '>
                <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-2xl shadow-lg w-2/4 min-h-[200px]">
                    <div className='absolute p-1 bg-gray-100 rounded-full cursor-pointer top-3 right-3' onClick={() => setState(!state)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className='grid grid-cols-3 gap-10 p-5'>
                        <div className="col-span-1">
                            <img src={item.FoodImg} alt="food" className='w-full' />
                        </div>
                        <div className="col-span-2">
                            <h1 className='mb-3 text-xl font-bold text-prime'>{item.name}</h1>
                            <p className='text-sm font-semibold text-gray-400'>{item.description}</p>

                            <div className='flex items-center justify-StarFillt md:my-2'>
                                {
                                    fillStars.map((data, index) => {
                                        return (
                                            <StarFill key={index} />
                                        )
                                    })
                                }
                                {
                                    emptyStars.map((data, index) => {
                                        return (
                                            <StarEmp key={index} />
                                        )
                                    })
                                }
                                <span className='ml-2 text-sm font-bold md:text-base text-prime'>{item.ratings}</span>
                            </div>

                            <h1 className='mb-5 text-base font-bold md:text-lg text-prime'>₹<span className='ml-1'>{item.price}</span></h1>

                            {
                                item.category === "pizza" ?

                                    <div className='flex items-center gap-4'>
                                        <label className='text-sm font-semibold text-gray-500'>Size:</label>
                                        <ul class="flex justify-start items-start gap-2">
                                            <li>
                                                <input type="radio" id="personal" name="hosting" value="hosting-small" class="hidden peer" required />
                                                <label onClick={() => setSize('Personal')} for="personal" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">Personal</div>

                                                    </div>

                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="small" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize('Small')} for="small" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">Small</div>

                                                    </div>

                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="medium" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize('Medium')} for="medium" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">Medium</div>

                                                    </div>

                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="large" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize('Large')} for="large" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">Large</div>

                                                    </div>

                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    ""
                            }
                            {
                                item.category === "burger" ?
                                    <div className='flex items-center gap-4'>
                                        <label className='text-sm font-semibold text-gray-500'>Size:</label>
                                        <ul class="flex justify-start items-start gap-2">

                                            <li>
                                                <input type="radio" id="twoounce" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize("2 ounce")} for="twoounce" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">2 ounce</div>

                                                    </div>

                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="threeounce" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize("3 ounce")} for="threeounce" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">3 ounce</div>

                                                    </div>

                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="fourounce" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize("4 ounce")} for="fourounce" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">4 ounce</div>

                                                    </div>

                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    ""
                            }
                            {
                                item.category === "french fries" ?
                                    <div className='flex items-center gap-4'>
                                        <label className='text-sm font-semibold text-gray-500'>Size:</label>
                                        <ul class="flex justify-start items-start gap-2">

                                            <li>
                                                <input type="radio" id="twoounce" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize('Small')} for="twoounce" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">Small</div>

                                                    </div>

                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="threeounce" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize('Medium')} for="threeounce" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">Medium</div>

                                                    </div>

                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="fourounce" name="hosting" value="hosting-small" class="hidden peer" />
                                                <label onClick={() => setSize('Large')} for="fourounce" class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                                    <div class="block">
                                                        <div class="w-full text-sm font-semibold">Large</div>

                                                    </div>

                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    ""
                            }
                            <div className="flex items-center justify-start gap-3 my-5">
                                <label className='text-sm font-semibold text-gray-500'>Quantity:</label>
                                <div className='flex justify-center items-center rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] text-prime font-semibold px-1'>
                                    <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-l-[30px]' onClick={decQuan}><Minus /></motion.button>
                                    <input type='text' className="w-8 px-2 text-center bg-white focus:outline-none" value={quan} readOnly />
                                    <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-r-[30px]' onClick={incQuan}><Plus /></motion.button>

                                </div>
                            </div>
                            <motion.button onClick={addToCartHandler} whileTap={{ scale: 0.9 }} className='bg-prime  text-white px-5 py-1 text-base rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] font-bold flex items-center justify-center '>ADD</motion.button>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
    else {
        document.body.style.overflow = "auto"
        return null
    }


}

export default FoodModal
