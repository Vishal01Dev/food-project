import React, { useEffect, useState } from 'react'
import SearchProductcard from '../components/cards/SearchProductcard'

import { motion } from 'framer-motion'
import { FoodData } from '../assets/Data/FoodData'


const Search = ({ searchVal,totalData,emp }) => {



    return (
        <div className='search-hood top-[16vh] sm:top-[16vh] left-0 right-0 fixed overflow-auto bottom-0 bg-gray-100 sm:px-10 md:px-16 lg:px-24 py-10'>
            <div className='flex justify-start items-center py-3 sm:py-8'>
                {
                    searchVal !== '' ?
                        <h1 className='text-xl sm:text-2xl font-semibold px-2 pb-5'>

                            Your search results for : <span className='text-prime font-bold'>' {searchVal} '</span>
                        </h1>
                        :
                        ""
                }
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 bg-transparent sm:gap-3 md:gap-5">
                {
                    totalData !== null ?
                        totalData.map((data, index) => {
                            return (
                                <SearchProductcard item={data} key={index} />
                            )
                        })

                        :
                        <div className='col-span-1 md:col-span-2 h-[10vh] flex justify-center items-center'>
                            <h1 className='text-xl sm:text-2xl font-bold text-center text-gray-600'>
                                Search your favourite food
                            </h1>
                        </div>
                }
                {
                    emp ?
                        <div className='col-span-1 md:col-span-2 h-[10vh] flex justify-center items-center'>
                            <h1 className='text-xl sm:text-2xl font-bold text-center text-gray-600'>
                                No results found
                            </h1>
                        </div>
                        : ""
                }





            </div>
        </div>
    )
}

export default Search