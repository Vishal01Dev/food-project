import React, { useEffect } from 'react'

import banPot from '../assets/images/banner/ban-1.jpg'

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0,0);
  },[])


  return (
    <div className='pt-20 lg:pt-16  px-5 sm:px-10 md:px-16 lg:px-24'>
      <div className='mt-10 flex flex-col justify-center items-center py-3 sm:py-5'>
        <h1 className='text-2xl sm:text-4xl font-bold'>
          About Us
        </h1>
        <p className='text-gray-500 font-semibold my-4'>Foods From Local and Quality Ingredients</p>
      </div>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 mb-10'>
          <div className=" col-span-1 py-5" >
            <img src={banPot} alt="" class="w-full h-full lg:w-10/12 mr-auto -scale-x-100" />
          </div>
          <div className="py-5 sm:py-0 col-span-1 flex  items-start">
            <div className='flex flex-col justify-center'>

              <p className='text-gray-400 my-4 font-semibold w-full md:w-5/6 leading-4 md:leading-7 text-xs sm:text-sm md:text-base'>It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>
              <p className='text-gray-400 my-4 font-semibold w-full md:w-5/6 leading-4 md:leading-7 text-xs sm:text-sm md:text-base'>It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>
              <p className='text-gray-400 my-4 font-semibold w-full md:w-5/6 leading-4 md:leading-7 text-xs sm:text-sm md:text-base'>It is established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About