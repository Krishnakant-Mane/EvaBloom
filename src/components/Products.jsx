import React, { useState } from 'react'

export const Products = () => {

    const [products, setProducts] = useState([
        {
            "productId": "J001",
            "productName": "18KT Sparkling Diamond Ring",
            "productDescription": "A stunning 18KT yellow gold ring featuring a brilliant-cut central diamond, perfect for engagements or special milestones.",
            "productImages": [
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSV7H1KXnDleWc51zYSVIy4fy5j3FnQ6YVyb-yt55UmlYT-RoJf1J6209GeroFziI81H5dz24K4X9gQPaS9oyWuECqfWYfF7g"
            ],
            "productPrice": 45000
        },
        {
            "productId": "J002",
            "productName": "Floral Gold Drop Earrings",
            "productDescription": "Exquisite 22KT gold earrings with intricate floral filigree work and a polished finish for a traditional look.",
            "productImages": [
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJKoyAcLiyYWKs4mt3FyAcCDyxyjSJYhvDlMh7RIxtWF04VUwnzfOkQKFXrDMPjvw3uAemO4ZG6pymXqDdZkeGWJGiwWVQ"
            ],
            "productPrice": 32500
        },
        {
            "productId": "J003",
            "productName": "Ruby & Pearl Polki Necklace",
            "productDescription": "A regal choker-style necklace featuring uncut diamonds (Polki), vibrant rubies, and fresh-water pearl drops.",
            "productImages": [
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSo9A6IPA8F64tvRFUTFvFi0KZ0ZkYGLSR2dfrwsSId_zPS9bKAPAGorbi_NKcA5CuHNgXsI246Gt0-q3sJxMdhfIdVpNIp9Q"
            ],
            "productPrice": 125000
        },
        {
            "productId": "J004",
            "productName": "Classic Gold Bangle Set",
            "productDescription": "A pair of timeless 22KT yellow gold bangles with geometric textures, ideal for everyday luxury.",
            "productImages": [
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1frnCN0rqv8FwcnBmhIju94ednvfRdUro0TJ4GKeXrLbyrcvaFmqw0UHuULS8zuLvt7ZeD9FHolzblrg78OKVcFArf6rB"
            ],
            "productPrice": 88000
        },
        {
            "productId": "J005",
            "productName": "Sapphire Blue Pendant",
            "productDescription": "A teardrop-shaped blue sapphire encased in white gold and accented by small pavé-set diamonds.",
            "productImages": [
                "https://m.media-amazon.com/images/I/21viMMAjWPL.jpg"
            ],
            "productPrice": 21000
        },
        {
            "productId": "J006",
            "productName": "Rose Gold Diamond Bracelet",
            "productDescription": "Contemporary rose gold bracelet with a sleek minimalist bar design encrusted with natural diamonds.",
            "productImages": [
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpYUlG1p3upwWemRgWTeyUGnCxuak-CdLgamrHq1_3OAwbsbnxqOXaaxMra3CTLpE--2zLu9bnnkXCGlBNJeAGvBg3gMiT"
            ],
            "productPrice": 55000
        }
    ])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        deliveryDate: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const openOrderModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleOrder = (e) => {
        if (e) e.preventDefault();

        const phoneNumber = '919969516348';
        const { name, phone, address, deliveryDate, description } = formData;
        const product = selectedProduct;

        const message = `
*New Order Received!* 🛍️
--------------------------
*Product Details:*
Product Name: ${product.productName}
Product Price: ₹${product.productPrice}

*Customer Details:*
Name: ${name}
Phone Number: ${phone}
Delivery Address: ${address}
Date of Delivery: ${deliveryDate}
Description: ${description}
--------------------------
_Please Contact Me!_
        `.trim();

        const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsAppUrl, '_blank');

        // Reset form and close modal
        setIsModalOpen(false);
        setFormData({
            name: '',
            phone: '',
            address: '',
            deliveryDate: '',
            description: ''
        });
    };

    return (
        <>
            <div id="products" className='flex py-20 w-full justify-center items-center'>
                <h1 className='text-6xl text-yellow-500 italic '>Our Jewllery</h1>
            </div>
            <div
                style={{ backgroundColor: "#4d0b0d" }}
                className="pt-24 px-4 sm:px-8 md:px-12 lg:px-20 py-10
             flex flex-wrap justify-center gap-6"
            >
                {products.map((p) => (
                    <div
                        key={p.productId}
                        className="
                    bg-white rounded-2xl shadow-lg p-5
                    hover:shadow-amber-800 hover:shadow-2xl transition
                    w-full
                    sm:w-[48%]
                    lg:w-[30%]
                    xl:w-[22%]
                    "
                    >
                        {/* Image */}
                        <img
                            src={p.productImages[0]}
                            alt={p.productName}
                            className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-xl mb-4"
                        />

                        {/* Content */}
                        <h2 className="text-base sm:text-lg font-semibold">
                            {p.productName}
                        </h2>

                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                            {p.productDescription}
                        </p>

                        <hr className="my-3" />

                        {/* Price */}
                        <div className="flex items-center justify-between mt-4">
                            <span
                                className="text-lg sm:text-xl font-bold"
                                style={{ color: "#4d0b0d" }}
                            >
                                ₹{p.productPrice}
                            </span>

                            <button
                                onClick={() => openOrderModal(p)}
                                style={{ backgroundColor: "#4d0b0d" }}
                                className="
            text-white px-3 sm:px-4 py-2
            text-sm sm:text-base
            rounded-lg hover:cursor-pointer transition
          "
                            >
                                Order Here
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* PIP Mode Order Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full max-w-4xl max-h-[90vh] relative animate-in fade-in zoom-in duration-300">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-800 shadow-md transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left Side: Product Image */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                            <img
                                src={selectedProduct?.productImages[0]}
                                alt={selectedProduct?.productName}
                                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto bg-gray-50/50">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-800">{selectedProduct?.productName}</h3>
                                <p className="text-xl font-extrabold mt-1" style={{ color: "#4d0b0d" }}>₹{selectedProduct?.productPrice}</p>
                            </div>

                            <form onSubmit={handleOrder} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery Address</label>
                                    <textarea
                                        required
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Full delivery address"
                                        rows="2"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white resize-none"
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Delivery</label>
                                        <input
                                            required
                                            type="date"
                                            name="deliveryDate"
                                            value={formData.deliveryDate}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        placeholder="Any special instructions or details..."
                                        rows="2"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#4d0b0d] hover:bg-[#4d0b0d] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-green-200 mt-4"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.204l-.033.013-.633 2.587 2.656-.633.015-.033c.966.457 1.761.644 2.76.645 3.18 0 5.766-2.586 5.767-5.766 0-3.181-2.586-5.766-5.719-5.766zm2.345 8.169c-.15.421-.767.765-1.066.825-.3.06-.675.09-1.35-.15-.45-.15-1.125-.45-1.875-.826-1.05-.525-1.725-1.425-2.025-1.8-.3-.375-.525-.75-.525-1.125s.225-.675.3-.825c.075-.15.225-.225.3-.225s.15 0 .225.075c.075.075.15.15.225.225.075.15.225.375.225.45s.075.225 0 .3c-.075.15-.15.225-.225.3s-.15.15-.075.225c.075.15.3.45.6.75s.6.45.9.6c.15.075.3.075.375 0s.15-.15.225-.225l.225-.225.075-.075c.075 0 .15.075.3.15s.75.375.825.45.15.15.075.3c0 .075-.075.15-.225.225zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-4.694 8.5-8.5-3.806-8.5-8.5-8.5z" />
                                    </svg>
                                    Send order via Whatsapp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

