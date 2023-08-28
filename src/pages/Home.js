import React, { useState, useEffect } from 'react'
import SvgComponent from '../assets/imgSVGs/Blob_A'
// import Wave from '../assets/imgSVGs/Wave'
import { motion } from 'framer-motion'
import { ArrowRight, MapMarker, PhoneIcon, MailIcon } from '../components/icons/CommonIcons'

import banPot from '../assets/images/banner/ban-1.jpg'
import bannerImg from '../assets/images/banner/banner.png'
import drawAll from '../assets/images/drawer/all.png'
import drawPizza from '../assets/images/drawer/pizza.png'
import drawBurger from '../assets/images/drawer/burger.png'
import drawPasta from '../assets/images/drawer/spaguetti.png'
import drawDrink from '../assets/images/drawer/drink.png'
import drawFries from '../assets/images/drawer/fried-potatoes.png'
import '../styles/Home.css';
import FoodCard from '../components/cards/FoodCard'



import { FoodData } from '../assets/Data/FoodData'
import { useSelector } from 'react-redux'
import ProductSlider from '../components/sliders/ProductSlider'
import { Link } from 'react-router-dom'

const Home = ({URL}) => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const [drawerActive, setDrawerActive] = useState('all');
  const { products } = useSelector((state) => state.products)

  const [filteredProducts, setFilterProducts] = useState(products)

  useEffect(() => {
    if (drawerActive === "all") {
      setFilterProducts(products)
    }
    else {
      setFilterProducts(products.filter((item) => item.category === drawerActive))
    }

  }, [drawerActive])


  return (
    <>
      {/* <SvgComponent /> */}
      <div className='px-5 pt-20 lg:pt-16 sm:px-10 md:px-16 lg:px-24'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className="flex items-center order-2 col-span-1 py-5 sm:py-0 sm:order-1">
            <div className='flex flex-col justify-center'>
              <h1 className='text-3xl sm:text-[5vw] font-bold leading-tight'>Choosing Quality Food</h1>
              <p className='w-full my-4 text-xs font-semibold leading-4 text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base'>It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>
              <Link to={`${URL}/menu`}><motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Discover menu</span><span className=' absolute -top-[1px] sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button></Link>
            </div>
          </div>
          <div className="order-1 hidden col-span-1 py-5 sm:order-2 sm:block" >
            <img src={bannerImg} alt="" className="w-full h-full mr-auto lg:w-10/12 -scale-x-100" />
          </div>
        </div>

        <div className='py-4 mt-0 sm:mt-10'>
          <div className='flex items-center justify-center py-3 sm:py-5'>
            <h1 className='text-2xl font-bold sm:text-4xl'>
              Our Menus
            </h1>
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


        </div>
        <div className='px-5 md:px-10 pb-10 sm:py-10'>

          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-10'>
            {

              // randomProductIds.map((productId) => {
              //   const product = products[productId];

              filteredProducts.slice(0, 3).map((item) => {
                return (
                  <FoodCard item={item} key={item.id} />
                )
              })
            }
          </div>
        </div>


        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className="hidden col-span-1 py-5 sm:block" >
              <img src={banPot} alt="" className="w-full h-full mr-auto lg:w-10/12 -scale-x-100" />
            </div>
            <div className="flex items-center col-span-1 py-5 sm:py-0">
              <div className='flex flex-col justify-center'>
                <h1 className='text-2xl font-bold leading-tight text-center sm:text-4xl sm:text-left'>About Foodies</h1>
                <div className="my-3 sm:hidden" >
                  <img src={banPot} alt="" className="w-1/2 aspect-square mx-auto my-5 " />
                </div>
                <p className='w-full my-3 text-xs font-semibold leading-4 text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base'>It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>
                <Link to={`${URL}/about`}><motion.button whileHover={{ scale: 1.05 }} className='mt-2 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-medium uppercase sm:mr-10 sm:font-bold sm:text-sm'>Learn More</span><span className=' absolute -top-0.5 sm:-top-0 -right-0.5 sm:-right-1 p-1 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className='px-5 my-5 md:px-10'>
          <div className='flex flex-col items-center justify-center py-3 sm:py-5'>
            <h1 className='text-2xl font-bold text-center sm:text-4xl'>
              Our Awesome Dishes
            </h1>
            <p className='w-full my-5 text-xs font-semibold text-center text-gray-400 sm:2/3 md:w-1/2 sm:mx-auto sm:text-sm sm:leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est voluptatibus, pariatur voluptates ea architecto numquam hic nobis sunt aperiam.</p>
          </div>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-10'>
            {

              FoodData.slice(0, 6).map((item) => {
                return (
                  <FoodCard item={item} key={item.id} />
                )
              })
            }
          </div>
          <div className='flex items-center justify-center p-10'>
          <Link to={`${URL}/menu`}><motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'><span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Explore More</span><span className=' absolute -top-[1px] sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'><ArrowRight /></span></motion.button></Link>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home