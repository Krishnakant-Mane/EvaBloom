import React from 'react'
import jewl from '../assets/jewl.jpg'

export const Message = () => {
    return (
        <>
      <div className="relative w-full h-screen">
        {/* Background Image Container */}
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={jewl}
            alt="Handcrafted Jewelry Background"
          />
          {/* Overlay to darken the background image slightly */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Text and Overlay Container (Flexbox centered) */}
        <div className="absolute inset-0 flex justify-center items-center z-10 p-4">
          
          {/* Semi-transparent "frosted glass" card 
              Note: backdrop-blur-md creates the frost effect, 
              bg-white/10 provides transparency/color tint 
          */}
          <div className="bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-2xl max-w-3xl text-center text-white">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 italic" style={{ color: '#4d0b0d' }}>
              Wear the Art of Handcrafted Tradition
            </h1>
            
            {/* Description Paragraph */}
            <p className="mb-8 opacity-90">
              Every collection is brought to life in small, intimate workshops, using conflict-free stones
              and a jeweler's devotion—just like a treasured gift made with love. We focus on limited-edition
              releases to maintain authenticity and quality.
            </p>

            {/* CTA Button */}
            <a 
                href='#products'
                className="bg-white text-[#4d0b0d] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
                Explore Collections →
            </a>

            {/* Small Footer Text */}
            <p className="text-xs mt-6 opacity-60">
              Limited Products · No online payment required · Personal confirmation
            </p>
          </div>
        </div>
      </div>
    </>
    )
}
