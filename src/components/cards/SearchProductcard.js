import React, { useState } from 'react'
import piz1 from '../../assets/images/pizza/pizza-3.jpg'
import { SearchIcon, ShoppingCart, Bar, User, Close, SearchSmall, Plus, Minus, StarFill, StarEmp } from '../icons/CommonIcons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import FoodModal from '../modals/FoodModal'

const SearchProductcard = ({ item }) => {

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
        <div className='col-span-1 bg-white p-3 border-b-2 md:border-none sm:rounded-xl sm:shadow relative'>
            {/* <Link to={`/food/${slug}`}> */}
            <div onClick={() => setOpenModal(!openModal)} className="cursor-pointer">
                <div className='grid grid-cols-12 gap-4  min-h-[120px] items-center'>
                    <div className='col-span-5
                   md:col-span-4'>
                        <img src={item.FoodImg} alt='piz1' className='w-full h-auto my-auto' />
                    </div>
                    <div className='col-span-7 md:col-span-8 '>
                        <h1 className='font-bold text-base md:text-lg text-black '>{item.name}</h1>
                        <p className='hidden md:block text-sm text-gray-600'>{item.description}</p>
                        <div className='flex justify-StarFillt md:my-2 items-center'>
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
                            <span className='text-sm md:text-base ml-2 font-bold text-prime'>{item.ratings}</span>
                        </div>

                        <h1 className='text-base md:text-lg font-bold text-prime mb-10 md:mb-0'>₹<span className='ml-1'>{item.price}</span></h1>

                        <div className='absolute bottom-3 right-3 flex items-center justify-center gap-3 z-20'>

                            <div className='flex justify-center items-center rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] text-prime font-semibold px-1'>
                                <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-l-[30px]' onClick={decQuan}><Minus /></motion.button>
                                <input type='text' className="bg-white w-8 px-2 focus:outline-none text-center" value={quan} readOnly />
                                <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-r-[30px]' onClick={incQuan}><Plus /></motion.button>

                            </div>
                            <motion.button whileTap={{ scale: 0.9 }} className='bg-prime text-white px-3 py-1 text-sm rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] font-bold flex items-center justify-center '>ADD</motion.button>

                        </div>
                    </div>
                </div>
                {/* </Link> */}
            </div>
            <FoodModal item={item} state={openModal} setState={setOpenModal} quan={quan} setQuan={setQuan} size={size} setSize={setSize} />
        </div>
    )
}

export default SearchProductcard