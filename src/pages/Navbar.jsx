import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'

export const Navbar = () => {

  const [open, setOpen] = useState()

  const closeHeartIcon = ({ size = 32, color = "#bebebe" }) => (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
      width={size}
      height={size}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>

      <g>
        <path
          d="M 511.147 961.813 c -50.4533 0 -99.3066 -9.91997 -145.387 -29.3333 c -44.48 -18.7733 -84.3733 -45.76 -118.72 -80 c -34.24 -34.24 -61.2267 -74.24 -80 -118.72 c -19.52 -46.08 -29.3333 -94.9331 -29.3333 -145.387 c 0 -50.4533 9.91997 -99.3066 29.3333 -145.387 c 18.7733 -44.48 45.76 -84.3733 80 -118.72 c 34.24 -34.24 74.24 -61.2267 118.72 -80 c 46.08 -19.52 94.9331 -29.3333 145.387 -29.3333 c 50.4533 0 99.3066 9.91997 145.387 29.3333 c 44.48 18.7733 84.3733 45.76 118.72 80 c 34.24 34.24 61.2267 74.24 80 118.72 c 19.52 46.08 29.3333 94.9331 29.3333 145.387 c 0 50.4533 -9.91997 99.3066 -29.3333 145.387 c -18.7733 44.48 -45.76 84.3733 -80 118.72 c -34.24 34.24 -74.24 61.2267 -118.72 80 c -46.08 19.4133 -94.9331 29.3333 -145.387 29.3333 Z"
          fill={color}
        />

        <path
          d="M 294.507 188.16 c 0 -67.9467 55.04 -122.987 122.987 -122.987 c 37.5467 0 71.1467 16.8533 93.6533 43.3067 c 22.6133 -26.4533 56.2133 -43.3067 93.6533 -43.3067 c 67.9467 0 122.987 55.04 122.987 122.987 c 0 35.6267 -16.4267 65.4933 -39.4667 90.24 L 510.72 449.28 L 336 280.32 c -22.1867 -23.1467 -41.4933 -55.4667 -41.4933 -92.16 Z"
          fill="#f7d000"
        />

        <path
          d="M 510.72 449.28 L 336 280.32 c -22.1867 -23.1467 -41.4933 -55.4667 -41.4933 -92.16 c 0 -67.9467 55.04 -122.987 122.987 -122.987 c 37.5467 0 71.1467 16.8533 93.6533 43.3067 l -0.426667 340.8 Z"
          fill="#f7d000"
        />
      </g>
    </svg>

  );



  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50
               flex items-center justify-between
               px-4 sm:px-8 lg:px-10 py-3"
        style={{ backgroundColor: "#4d0b0d" }}
      >
        {/* Logo */}
        <img
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-amber-200"
          src={logo}
          alt="logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a className="p-2 text-white hover:border-b-2" href="#home">Home</a>
          <a className="p-2 text-white hover:border-b-2" href="#products">Products</a>
          <a className="p-2 text-white hover:border-b-2" href="#reviews">Reviews</a>
          <a className="p-2 text-white hover:border-b-2" href="#contact">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative group"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-10 h-10 transition-all duration-500
      ${open ? "rotate-45 scale-110" : "rotate-0 scale-100"}
    `}
          >
            {/* Outer Ring */}
            <circle
              cx="100"
              cy="110"
              r="55"
              fill="none"
              stroke="black"
              strokeWidth="1"
              className={`transition-all duration-500
        ${open ? "opacity-80" : "opacity-100"}
      `}
            />

            {/* Inner Ring (Glow effect) */}
            <circle
              cx="100"
              cy="110"
              r="45"
              fill="none"
              stroke="#FFD400"
              strokeWidth="8"
              className={`transition-all duration-500
        ${open ? "opacity-60" : "opacity-30"}
      `}
            />

            {/* Heart */}
            <path
              d="
        M100 45
        C100 30, 80 30, 80 50
        C80 70, 100 80, 100 90
        C100 80, 120 70, 120 50
        C120 30, 100 30, 100 45
        Z
      "
              fill="#FFD400"
              stroke="black"
              strokeWidth="1"
              className={`origin-center transition-all duration-500
        ${open ? "scale-110 -translate-y-2" : "scale-100 translate-y-0"}
      `}
            />
          </svg>
        </button>





      </div>

      {/* Collapsible Mobile Menu */}
      <div
        className={`
      fixed top-16 left-0 w-full z-40
      overflow-hidden transition-all duration-300 ease-in-out
      md:hidden
      ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
    `}
        style={{ backgroundColor: "#4d0b0d" }}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          <a onClick={() => setOpen(false)} className="text-white text-lg" href="#home">Home</a>
          <a onClick={() => setOpen(false)} className="text-white text-lg" href="#products">Products</a>
          <a onClick={() => setOpen(false)} className="text-white text-lg" href="#reviews">Reviews</a>
          <a onClick={() => setOpen(false)} className="text-white text-lg" href="#contact">Contact</a>
        </div>
      </div>
    </>
  )
}
