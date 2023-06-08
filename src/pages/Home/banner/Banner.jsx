import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import pic1 from '../../../assets/66117201-music-instruments-banner-music-school-poster-for-your-design-festival.webp'
import pic3 from '../../../assets/music-school-banner-vector-illustration-260nw-2249599259.webp'
import pic4 from '../../../assets/music-school-banner-vector-illustration-260nw-2249599257.webp'

// import "./style.css";
const Banner = () => {
    return (
        <>
            <Swiper
                autoplay={
                    { delay: 5000 }
                }
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={pic3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={pic4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={pic1} alt="" />
                </SwiperSlide>



            </Swiper>
        </>
    );
};

export default Banner;