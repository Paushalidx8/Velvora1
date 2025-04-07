import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../context/WishlistContext";

const products = {
  Clothing: [
    { id: 1, name: "Oversized Hoodie", price: "₹3,750", image: "./src/assets/images/2011WbeigeD-1_800x.webp" },
    { id: 2, name: "Minimalist T-shirt", price: "₹2,500", image: "./src/assets/images/MHOO916_1.jpg" },
    { id: 3, name: "Oversized Hoodie", price: "₹3,750", image: "./src/assets/images/2011WbeigeD-1_800x.webp" },
    { id: 4, name: "Minimalist T-shirt", price: "₹2,500", image: "./src/assets/images/MHOO916_1.jpg" },
  ],
  Footwear: [
    { id: 3, name: "Chunky Sneakers", price: "₹6,800", image: "./src/assets/images/Lana_I_800x.webp" },
    { id: 4, name: "Luxury Heels", price: "₹8,300", image: "./src/assets/images/05d1e173-abca-46c8-adb1-7db8eae7b8fe-500x500.webp" },
    { id: 5, name: "Chunky Sneakers", price: "₹6,800", image: "./src/assets/images/Lana_I_800x.webp" },
    { id: 6, name: "Luxury Heels", price: "₹8,300", image: "./src/assets/images/05d1e173-abca-46c8-adb1-7db8eae7b8fe-500x500.webp" },
  ],
  Accessories: [
    { id: 5, name: "Gold Chain Necklace", price: "₹4,200", image: "./src/assets/images/BohoGypsyTextileJewelery-bunkojunko.webp" },
    { id: 6, name: "Retro Sunglasses", price: "₹2,900", image: "./src/assets/images/sun-2.webp" },
  ],
  "Seasonal Wear": [
    { id: 7, name: "Trench Coat", price: "₹9,600", image: "./src/assets/images/word-image-7842-2_480x480.webp" },
    { id: 8, name: "Summer Co-ords", price: "₹7,500", image: "./src/assets/images/image_6c7a7b8d-358b-4b48-95eb-991a912a0c64_600x.jpg" },
  ],
};

const ProductSection = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  return (
    <div className="bg-white py-16 flex justify-center">
      <div className="max-w-7xl w-full px-8">
        {Object.keys(products).map((category, index) => (
          <div key={category} className={`mb-40 ${index !== 0 ? "mt-24" : "mt-16"}`}>
            <h2 className="text-3xl font-semibold text-left pb-4 pt-12">
              {category}
            </h2>
            
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products[category].map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  className="group relative border p-6 rounded-xl shadow-lg bg-white"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <button onClick={() => toggleWishlist(product)}>
                      <FaHeart
                        className={`text-2xl transition-all ${
                          wishlist.some((item) => item.id === product.id)
                            ? "text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
