import React, { useEffect, useState } from 'react'
import dummyImg from '../../assets/images/pizza/pp-2.webp'
import { Close, Minus, Plus } from '../../components/icons/CommonIcons'
import { motion } from 'framer-motion'
import Modal from '../modals/Modal'
import { useDispatch } from 'react-redux'
import { fetchCart, removeFromCart, updateFromCart } from '../../redux/slices/cartSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CartCard = ({ data }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const [foodData, setFoodData] = useState(data)

    // useEffect(() => {
    //     const formData = new FormData()
    //     formData.append('food_id', data.food_id)
    //     axios.post('http://localhost/food-project/getFoodDetail.php', formData).then((res) => {
    //         const data = res.data
    //         setFoodData(...data.data)

    //     })
    // }, [])

    const [quan, setQuan] = useState(Number(data.quantity))

    const [size, setSize] = useState(data.size)

    const [deleteModal, setDeleteModal] = useState(false)


    function decQuan() {
        if (quan === 1) {
            setQuan(1)
        }
        else {
            setQuan((current) => current - 1)
            quantityHandler("dec")
        }
    }
    function incQuan() {
        if (quan === 10) {
            setQuan(10)
        }
        else {
            setQuan((current) => current + 1)
            quantityHandler("inc")
        }
    }

    function quantityHandler(type) {
        const val = {
            ...data,
            quantity: quan,
            size: size,
            type: type
        }
        dispatch(updateFromCart(val))
    }



    function sizeHandler(e) {
        setSize(e.target.value)
        const val = {
            ...data,
            quantity: quan,
            size: size
        }
        // console.log(val)
        // dispatch(updateFromCart(val))


    }


    const removeCartHandler = (val) => {
        console.log(val)
        dispatch(removeFromCart(val))
        setDeleteModal(!deleteModal)
    }


    return (
        <div className="grid items-center grid-cols-12 gap-5 py-4 border-b border-prime/20 relative">
            <div className="col-span-3 sm:col-span-2">
                <img src={data.FoodImg} alt="img" />
            </div>
            <div className="col-span-9 sm:col-span-3">
                <h1 className='text-base sm:text-lg font-bold'>{data.name}</h1>
                <p className='text-xs text-gray-500'>in <span className='font-bold text-prime'>{data.category}</span></p>

            </div>
            <div className="flex justify-center items-center col-span-4 sm:col-span-2">
                <h1 className=' text-base font-bold md:text-lg text-prime '>₹<span className='ml-1'>{data.price}</span></h1>
            </div>

            <div className="col-span-4 sm:col-span-3 md:col-span-2 px-2">
                <div className='flex justify-center items-center rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] text-prime font-semibold px-1'>
                    <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-l-[30px]' onClick={decQuan}><Minus /></motion.button>
                    <input type='text' className="w-8 px-2 text-center bg-white focus:outline-none" value={quan} readOnly />
                    <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-r-[30px]' onClick={incQuan}><Plus /></motion.button>
                </div>
            </div>
            <div className="flex justify-center col-span-4 items-center sm:col-span-2">
                <h1 className=' text-base font-bold md:text-lg text-prime '>₹<span className='ml-1'>{data.price * quan}</span></h1>
            </div>
            <div className="absolute md:static top-5 sm:top-0 right-0 sm:flex items-center justify-center sm:col-span-1">
                <motion.button whileHover={{ scale: 0.9 }} className='text-gray-400 cursor-pointer' onClick={() => setDeleteModal(!deleteModal)}>
                    <Close />
                </motion.button>
            </div>
            <div className="flex items-center justify-start col-span-12 gap-5">
                {

                    data.category === "pizza" ? <div className='flex items-start justify-start gap-4'>
                        <label className='text-sm font-semibold text-gray-500'>Size:</label>
                        <ul class="flex flex-wrap justify-start items-start gap-2">
                            <li>

                                <input type="radio" id={`personal${data.id}`} name="hosting" value="Personal" class="hidden peer" checked={size === "Personal" ? "checked" : ""} />
                                <label for={`personal${data.id}`} class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-xs font-semibold">Personal</div>

                                    </div>

                                </label>
                            </li>
                            <li>
                                <input type="radio" id={`small${data.id}`} name="hosting" value="Small" class="hidden peer" checked={size === "Small" ? "checked" : ""} />
                                <label for={`small${data.id}`} class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-xs font-semibold">Small</div>

                                    </div>

                                </label>
                            </li>
                            <li>
                                <input type="radio" id={`medium${data.id}`} name="hosting" value="Medium" class="hidden peer" checked={size === "Medium" ? "checked" : ""} />
                                <label for={`medium${data.id}`} class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-xs font-semibold">Medium</div>

                                    </div>

                                </label>
                            </li>
                            <li>
                                <input type="radio" id={`large${data.id}`} name="hosting" value="Large" class="hidden peer" checked={size === "Large" ? "checked" : ""} />
                                <label for={`large${data.id}`} class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-xs font-semibold">Large</div>

                                    </div>

                                </label>
                            </li>
                        </ul>
                    </div>
                        : ""

                }
                {
                    data.category === "burger" ? <div className='flex items-center gap-4'>
                        <label className='text-sm font-semibold text-gray-500'>Size:</label>
                        <ul class="flex justify-start items-start gap-2">

                            <li>
                                <input type="radio" id={`twoounce${data.id}`} name="hosting" value="2 ounce" class="hidden peer" checked={size === "2 ounce" ? "checked" : ""} />
                                <label for={`twoounce${data.id}`} class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-xs font-semibold">2 ounce</div>

                                    </div>

                                </label>
                            </li>
                            <li>
                                <input type="radio" id={`threeounce${data.id}`} name="hosting" value="3 ounce" class="hidden peer" checked={size === "3 ounce" ? "checked" : ""} />
                                <label for={`threeounce${data.id}`} class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-xs font-semibold">3 ounce</div>

                                    </div>

                                </label>
                            </li>
                            <li>
                                <input type="radio" id={`fourounce${data.id}`} name="hosting" value="4 ounce" class="hidden peer" checked={size === "4 ounce" ? "checked" : ""} />
                                <label for={`fourounce${data.id}`} class="inline-flex items-center justify-between w-fit px-2 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-prime peer-checked:bg-prime peer-checked:text-white hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-xs font-semibold">4 ounce</div>

                                    </div>

                                </label>
                            </li>
                        </ul>
                    </div>
                        : ""
                }

            </div>

            <Modal state={deleteModal} setState={setDeleteModal}>
                <div className='py-5'>
                    <h1 className='text-xl font-bold text-prime'>Remove Product</h1>
                    <p className='text-sm font-bold text-gray-500'>you really want to remove <span className='text-prime underline'>{data.name}</span> from your cart ?</p>
                    <div className='absolute flex items-center justify-end gap-2 right-5 bottom-5'>
                        <button onClick={() => removeCartHandler(data)} className='px-8 py-1 font-bold text-white transition duration-300 rounded bg-prime hover:scale-105'>Yes</button>
                        <button onClick={() => setDeleteModal(!deleteModal)} className='px-8 py-1 font-bold text-gray-700 transition duration-300 bg-gray-300 rounded hover:scale-105'>No</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CartCard
