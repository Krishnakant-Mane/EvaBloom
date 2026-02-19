import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="px-20 w-full flex justify-center items-center">
                <div className="flex flex-col w-full items-center text-center gap-6">

                    <h1 className="text-5xl font-semibold" style={{ color: "#4d0b0d" }}>
                        Eva Bloom
                    </h1>

                    <p className="max-w-2xl text-gray-700">
                        Discover designs inspired by generations of artistry.
                        Our exclusive pieces are handmade with integrity and love
                        in limited quantities.
                    </p>

                    {/* Social Icons */}
                    <div id='contact' className="flex gap-4">

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919969516348?text=Hello%20Eva!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 transition-all duration-300 hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                width="28"
                                height="28"
                            >
                                <path
                                    fill="#25D366"
                                    d="M16 3C9.373 3 4 8.373 4 15c0 2.655.868 5.104 2.337 7.077L4 29l7.16-2.298A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
                                />
                                <path
                                    fill="#fff"
                                    d="M22.3 18.6c-.3-.15-1.7-.85-1.96-.95-.26-.1-.45-.15-.64.15-.19.3-.74.95-.91 1.15-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.47.13-.62.14-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.56-.35z"
                                />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/evabloom_jewellery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 transition-all duration-300 hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                width="28"
                                height="28"
                            >
                                <defs>
                                    <radialGradient id="igGradient" cx="30%" cy="107%" r="150%">
                                        <stop offset="0%" stopColor="#fdf497" />
                                        <stop offset="5%" stopColor="#fdf497" />
                                        <stop offset="45%" stopColor="#fd5949" />
                                        <stop offset="60%" stopColor="#d6249f" />
                                        <stop offset="90%" stopColor="#285AEB" />
                                    </radialGradient>
                                </defs>

                                <rect width="32" height="32" rx="8" fill="url(#igGradient)" />

                                <path
                                    fill="#fff"
                                    d="M16 11.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                                />

                                <circle cx="22.3" cy="9.7" r="1.1" fill="#fff" />

                                <path
                                    fill="#fff"
                                    d="M20.4 6H11.6C8.5 6 6 8.5 6 11.6v8.8C6 23.5 8.5 26 11.6 26h8.8C23.5 26 26 23.5 26 20.4v-8.8C26 8.5 23.5 6 20.4 6zm3.6 14.4a3.6 3.6 0 0 1-3.6 3.6h-8.8a3.6 3.6 0 0 1-3.6-3.6v-8.8a3.6 3.6 0 0 1 3.6-3.6h8.8a3.6 3.6 0 0 1 3.6 3.6v8.8z"
                                />
                            </svg>
                        </a>

                    </div>

                    <p className="text-sm text-gray-500 mt-6">
                        © {new Date().getFullYear()} Eva Bloom. All rights reserved.
                    </p>

                </div>
            </div>
        </>


    )
}
