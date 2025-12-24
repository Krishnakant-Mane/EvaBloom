import React, { useState } from 'react'

export const Products = () => {

    const [products, setProducts] = useState([
        {
            "productId": "P001",
            "productName": "Organic Honey",
            "productDescription": "Pure organic honey sourced from natural farms with no added preservatives.",
            "productImages": [
                "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfec3a148/images/hi-res/511003FBGAA00_2.jpg?sw=480&sh=480"
            ],
            "productPrice": 499
        },
        {
            "productId": "P002",
            "productName": "Cold Pressed Mustard Oil",
            "productDescription": "Traditional cold-pressed mustard oil for healthy and natural cooking.",
            "productImages": [
                "https://example.com/images/mustard-1.jpg",
                "https://example.com/images/mustard-2.jpg"
            ],
            "productPrice": 349
        },
        {
            "productId": "P003",
            "productName": "Organic Turmeric Powder",
            "productDescription": "Naturally grown turmeric powder with high curcumin content.",
            "productImages": [
                "https://example.com/images/turmeric-1.jpg"
            ],
            "productPrice": 199
        },
        {
            "productId": "P004",
            "productName": "Handmade Jaggery",
            "productDescription": "Chemical-free traditional jaggery made using age-old methods.",
            "productImages": [
                "https://example.com/images/jaggery-1.jpg",
            ],
            "productPrice": 149
        },
        {
            "productId": "P005",
            "productName": "Natural Coconut Oil",
            "productDescription": "100% pure cold-pressed coconut oil suitable for cooking and hair care.",
            "productImages": [
                "https://example.com/images/coconut-1.jpg"
            ],
            "productPrice": 299
        },
        {
            "productId": "P005",
            "productName": "Natural Coconut Oil",
            "productDescription": "100% pure cold-pressed coconut oil suitable for cooking and hair care.",
            "productImages": [
                "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweafa4332/images/hi-res/511787FOKAA00_1.jpg?sw=480&sh=480"
            ],
            "productPrice": 299
        }
    ])

    const handleOrder = (product) => {
        const phoneNumber = 7506997520

        const message = `
            Hello, I want to Buy these Products
            Product Name: ${product.productName}
            product Description: ${product.productDescription}
            product Price: ${product.productPrice}
            Please Contact Me!
        `

        const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsAppUrl, '_blank');
    }

    return (
        <>
        <div id="products" className='flex py-20 w-full justify-center items-center'>
            <h1 className='text-6xl text-yellow-500 italic '>Our jewllery</h1>
        </div>
            <div
            style={{backgroundColor: "#4d0b0d"}}
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
                            onClick={() => handleOrder(p)}
                            style={{ backgroundColor: "#4d0b0d" }}
                            className="
            text-white px-3 sm:px-4 py-2
            text-sm sm:text-base
            rounded-lg hover:bg-green-700 hover:cursor-pointer transition
          "
                        >
                            Order Here
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
