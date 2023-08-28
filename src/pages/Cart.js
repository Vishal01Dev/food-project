import React, { useState, useEffect } from 'react'
import CartCard from '../components/cards/CartCard'
import { motion } from 'framer-motion'
import { ArrowRight } from '../components/icons/CommonIcons'
import EmpCart from '../assets/images/icons/cart.png'
import Modal from '../components/modals/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart, setCart } from '../redux/slices/cartSlice'
import { fetchCart } from '../redux/slices/cartSlice'


const Cart = ({URL}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0,0);
  },[])


  // useEffect(() => {
  //   const cart = JSON.parse(window.localStorage.getItem('cart'));
  //   dispatch(setCart(cart));
  // })

  const { cart, total } = useSelector((state) => state.cart)

  // useEffect(() => {
  //   const user = window.localStorage.getItem('user');
  //   dispatch(fetchCart(user))
  // },[])


  return (
    <div className='px-5 pt-20 lg:pt-16 sm:px-10 lg:px-10  xl:px-24'>
      <div className='flex flex-col items-center justify-center py-3 mt-10 sm:py-5'>
        <h1 className='text-2xl font-bold sm:text-4xl'>
          Shopping Cart
        </h1>
        <p className='my-4 font-semibold text-gray-500'>Your added foods</p>
      </div>
      {
        cart.length > 0 ?
          <div className='grid grid-cols-12 gap-y-5 sm:gap-10 lg:gap-5 xl:gap-10 mt-6 mb-20'>
            <div className="col-span-12 lg:col-span-8">
              {
                cart.map((item) => {
                  return (
                    <>
                      <CartCard data={item} />

                    </>
                  )
                })
              }

            </div>
            <div className="col-span-12 lg:col-span-4 bg-gray-100 shadow rounded-3xl p-5 relative min-h-[300px]">
              <div className='relative h-full p-5 bg-white shadow rounded-3xl'>
                <div className='flex items-center justify-between my-1'>
                  <div className=''>
                    <h1 className='font-semibold'>Subtotal</h1>
                  </div>
                  <div className=''>
                    <h1 className='mb-10 text-base font-bold md:text-lg text-prime md:mb-0'>₹<span className='ml-1'>{total}</span></h1>
                  </div>
                </div>
                <hr className='h-0.5 my-5 bg-prime' />
                <div className='flex items-center justify-between my-1'>

                  <div className=''>
                    <h1 className='text-xl font-bold '>Total</h1>
                  </div>
                  <div className=''>
                    <h1 className='mb-10 text-base font-bold md:text-xl text-prime md:mb-0'>₹<span className='ml-1'>{total}</span></h1>
                  </div>
                </div>
                <div className='absolute left-0 w-full px-5 bottom-5'>
                  <Link to={`${URL}/checkout`}  className='mt-2 sm:mt-0 transition duration-300 ease-in-out bg-prime w-full flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 sm:px-5 sm:py-3'><span className='mx-auto text-xs font-medium uppercase sm:font-bold sm:text-sm'>Proceed to Checkout</span><span className=' absolute -top-0.5 sm:-top-0 -right-0.5 sm:-right-1 p-1 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></Link>
                </div>
              </div>
            </div>





          </div>

          :

          <div className='flex flex-col items-center justify-center col-span-12 p-5 sm:p-10'>
            <img src={EmpCart} alt='empty cart' className='my-5 opacity-20 w-28' />
            <h1 className='text-xl sm:text-2xl font-bold text-gray-400 text-center '>Your cart is Empty, Let's Add some</h1>
            <Link to={`${URL}/menu`} whileHover={{ scale: 1.05 }} className='my-10 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 '><span className='mr-6 text-xs font-medium uppercase sm:font-bold'>Our Menu</span><span className=' absolute -top-1  -right-0.5 sm:-right-1 p-1  shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full  bg-white text-prime/50'><ArrowRight /></span></Link>
          </div>
      }

    </div>

  )
}

export default Cart