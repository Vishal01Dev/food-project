import React, { useEffect, useState } from 'react'
import dummyImage from '../../assets/images/pizza/pp-2.webp'
import { SearchIcon, ShoppingCart, Bar, User, Close, SearchSmall, Plus, Minus, StarFill, StarEmp } from '../icons/CommonIcons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FoodModal from '../modals/FoodModal'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'


const FoodCard = ({ item }) => {

    const dispatch = useDispatch()

    const [quan, setQuan] = useState(1)

    const [openModal, setOpenModal] = useState(false)

    const [size, setSize] = useState('')

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
    const slug = item.name.replaceAll(" ", "-");



    function addToCartHandler() {

        const data = {
            item: item,
            quantity: quan,
            size: item.category === "pizza" || item.category === "fries" ? "Small" : "2 ounce"
        }
        dispatch(addToCart(data))
    }


    return (
        <>
            <div className='col-span-1 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] transition duration-300 ease-in-out rounded-xl relative z-10'>
                <div onClick={() => setOpenModal(!openModal)} className="cursor-pointer">
                    <div className='px-10 py-5'>
                        <img src={item.FoodImg} alt="dummy" className='w-full rounded-t-xl' />
                    </div>
                    <div className='p-5'>
                        <div>
                            <h1 className='mb-3 text-base font-bold text-black md:text-lg'>{item.name}</h1>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>
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

                        <h1 className='mb-10 text-base font-bold md:text-lg text-prime md:mb-0'>₹<span className='ml-1'>{item.price}</span></h1>


                    </div>
                </div>
                <div className='absolute z-30 flex items-center justify-center gap-3 bottom-6 right-6'>

                    <div className='flex justify-center items-center rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] text-prime font-semibold px-1'>
                        <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-l-[30px]' onClick={decQuan}><Minus /></motion.button>
                        <input type='text' className="w-8 px-2 text-center bg-white focus:outline-none" value={quan} readOnly />
                        <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-r-[30px]' onClick={incQuan}><Plus /></motion.button>

                    </div>
                    <motion.button onClick={addToCartHandler} whileTap={{ scale: 0.9 }} className='bg-prime text-white px-3 py-1 text-sm rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] font-bold flex items-center justify-center '>ADD</motion.button>
                </div>
            </div>
            <FoodModal item={item} state={openModal} setState={setOpenModal} quan={quan} setQuan={setQuan} size={size} setSize={setSize} />
        </>
    )
}

export default FoodCard
