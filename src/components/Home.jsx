import React from "react";
import logo from "../assets/logo.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'

export const Home = () => {
    return (
        <div
  id="home"
  className="w-full min-h-screen pt-24 pb-24"
  style={{ backgroundColor: "#4d0b0d" }}
>
  <div
    className="
      flex flex-col lg:flex-row
      w-full
      px-4 sm:px-10 lg:px-50
      py-10
      justify-center
      gap-6 lg:gap-10
    "
  >
    {/* Logo Section */}
    <div
      className="
        w-full lg:w-1/2
        rounded-2xl shadow-2xl
      "
    >
      <img
        src={logo}
        alt="logo"
        className="w-full h-auto"
      />
    </div>

    {/* Swiper Section */}
    <div
      className="
        flex
        w-full lg:w-1/2
        justify-center
        items-center
      "
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        <SwiperSlide className="bg-gray-200 p-6 sm:p-10 rounded-xl text-center">
          <img className="w-full h-64 sm:h-170 object-cover" src={s1} alt="" />
        </SwiperSlide>

        <SwiperSlide className="bg-gray-200 p-6 sm:p-10 rounded-xl text-center">
          <img className="w-full h-64 sm:h-170 object-cover" src={s2} alt="" />
        </SwiperSlide>

        <SwiperSlide className="bg-gray-200 p-6 sm:p-10 rounded-xl text-center">
          <img className="w-full h-64 sm:h-170 object-cover" src={s3} alt="" />
        </SwiperSlide>

        <SwiperSlide className="bg-gray-200 p-6 sm:p-10 rounded-xl text-center">
          <img className="w-full h-64 sm:h-170 object-cover" src={s4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>


    );
};
