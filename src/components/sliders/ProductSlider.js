import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import './SliderStyle.css';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import FoodCard from '../cards/FoodCard';

export default function ProductSlider({ filteredProducts }) {


    return (
        <>
            <Swiper
                slidesPerView={3}

                spaceBetween={40}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    filteredProducts.map((product) => {
                        return (
                            <SwiperSlide>
                                <FoodCard item={product} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}
