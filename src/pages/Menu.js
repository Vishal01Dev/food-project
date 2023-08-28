import React, { useEffect, useState } from 'react'
import drawAll from '../assets/images/drawer/all.png'
import drawPizza from '../assets/images/drawer/pizza.png'
import drawBurger from '../assets/images/drawer/burger.png'
import drawPasta from '../assets/images/drawer/spaguetti.png'
import drawDrink from '../assets/images/drawer/drink.png'
import drawFries from '../assets/images/drawer/fried-potatoes.png'
import { motion } from 'framer-motion'
// import { FoodData } from '../assets/Data/FoodData'
import FoodCard from '../components/cards/FoodCard'
import { ArrowRight } from '../components/icons/CommonIcons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../redux/slices/cartSlice'
import { fetchFoods } from '../redux/slices/productSlice'

const Menu = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0,0);
  },[])


  const { products } = useSelector((state) => state.products)

  const [filteredProducts, setFilterProducts] = useState(products)
  const [drawerActive, setDrawerActive] = useState('all');

  // useEffect(() => {
  //   const user = window.localStorage.getItem('user');
  //   dispatch(fetchCart(user))
  //   dispatch(fetchFoods())
  // },[])


  useEffect(() => {
    if (drawerActive === "all") {
      setFilterProducts(products)
    }
    else {
      setFilterProducts(products.filter((item) => item.category === drawerActive))
    }

  }, [drawerActive])


  return (
    <div className='px-5 pt-20 lg:pt-16 sm:px-10 md:px-16 lg:px-24'>
      <div className='flex flex-col items-center justify-center py-3 mt-10 sm:py-5'>
        <h1 className='text-2xl font-bold sm:text-4xl'>
          Our Menu
        </h1>
        <p className='my-4 font-semibold text-gray-500'>all our dishes in one place</p>
      </div>
      <div className='flex flex-wrap items-center justify-center py-2 sm:flex-nowrap gap-x-2 sm:gap-5 sm:py-4'>
        <motion.div whileHover={drawerActive === "all" ? "" : { scale: '0.9' }} onClick={() => setDrawerActive('all')} className={drawerActive === 'all' ? 'font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer' : 'font-bold cursor-pointer px-4 py-3 flex flex-col justify-center items-center'}>
          <img src={drawAll} alt='pizza' className={drawerActive === 'all' ? 'w-7 sm:w-10 opacity-100 pointer-events-none filter saturate-200' : 'w-7 sm:w-10 opacity-50 pointer-events-none'} />
          <p className='mt-3 text-xs sm:text-sm '>All</p>
        </motion.div>
        <motion.div whileHover={drawerActive === "pizza" ? "" : { scale: '0.9' }} onClick={() => setDrawerActive('pizza')} className={drawerActive === 'pizza' ? 'font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer' : 'font-bold cursor-pointer px-4 py-3 flex flex-col justify-center items-center'}>
          <img src={drawPizza} alt='pizza' className={drawerActive === 'pizza' ? 'w-7 sm:w-10 opacity-100 pointer-events-none filter saturate-200' : 'w-7 sm:w-10 opacity-50 pointer-events-none'} />
          <p className='mt-3 text-xs sm:text-sm '>Pizza</p>
        </motion.div>
        <motion.div whileHover={drawerActive === "burger" ? "" : { scale: '0.9' }} onClick={() => setDrawerActive('burger')} className={drawerActive === 'burger' ? 'font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer' : 'font-bold cursor-pointer px-4 py-3 flex flex-col justify-center items-center'}>
          <img src={drawBurger} alt='burger' className={drawerActive === 'burger' ? 'w-7 sm:w-10 opacity-100 pointer-events-none' : 'w-7 sm:w-10 opacity-50 pointer-events-none'} />
          <p className='mt-3 text-xs sm:text-sm'>Burger</p>
        </motion.div>
        <motion.div whileHover={drawerActive === "pasta" ? "" : { scale: '0.9' }} onClick={() => setDrawerActive('pasta')} className={drawerActive === 'pasta' ? 'font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer' : 'font-bold cursor-pointer px-4 py-3 flex flex-col justify-center items-center'}>
          <img src={drawPasta} alt='pasta' className={drawerActive === 'pasta' ? 'w-7 sm:w-10 opacity-100 pointer-events-none' : 'w-7 sm:w-10 opacity-50 pointer-events-none'} />
          <p className='mt-3 text-xs sm:text-sm'>Pasta</p>
        </motion.div>
        <motion.div whileHover={drawerActive === "fries" ? "" : { scale: '0.9' }} onClick={() => setDrawerActive('fries')} className={drawerActive === 'frenchfries' ? 'font-black  px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer' : 'font-bold cursor-pointer px-4 py-3 flex flex-col justify-center items-center'}>
          <img src={drawFries} alt='french fries' className={drawerActive === 'fries' ? 'w-7 sm:w-10 opacity-100 pointer-events-none' : 'w-7 sm:w-10 opacity-50 pointer-events-none'} />
          <p className='mt-3 text-xs sm:text-sm'>French fries</p>
        </motion.div>
        <motion.div whileHover={drawerActive === "drinks" ? "" : { scale: '0.9' }} onClick={() => setDrawerActive('drinks')} className={drawerActive === 'drinks' ? 'font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer' : 'font-bold cursor-pointer px-4 py-3 flex flex-col justify-center items-center'}>
          <img src={drawDrink} alt='drinks' className={drawerActive === 'drinks' ? 'w-7 sm:w-10 opacity-100 pointer-events-none' : 'w-7 sm:w-10 opacity-50 pointer-events-none'} />
          <p className='mt-3 text-xs sm:text-sm'>Drinks</p>
        </motion.div>
      </div>

      <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-5 sm:mt-10'>
        {

          filteredProducts.map((item) => {
            return (
              <FoodCard item={item} key={item.id} />
            )
          })
        }
      </div>
      <div className='flex items-center justify-center p-10'>
        <motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Load More</span><span className=' absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button>
      </div>
    </div>
  )
}

export default Menu