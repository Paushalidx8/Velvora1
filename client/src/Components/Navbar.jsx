import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaHeart, FaShoppingCart, FaPhone, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Wishlist Click
  const handleWishlistClick = () => {
    navigate("/wishlist"); // Navigate to Wishlist Page without popups
  };

  return (
    <nav className="bg-white px-8 py-5 shadow-md fixed top-0 left-0 w-full z-50 flex justify-center h-17">
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Sidebar Toggle + Logo */}
        <div className="flex items-center gap-6">
          <motion.button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-black text-3xl focus:outline-none"
            animate={{ rotate: isSidebarOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
          <a href="/" className="flex items-center">
            <img src="./src/assets/images/homelogo1.png" alt="Logo" className="object-contain w-36 h-auto" />
          </a>
        </div>

        {/* Search Bar */}
        <form className="hidden md:flex items-center w-full max-w-2xl">
          <input type="search" placeholder="Search for products..." className="w-full h-10 pl-4 pr-2 border border-gray-300 rounded-l-full text-black focus:outline-none focus:ring-2 focus:ring-gray-900 shadow-sm text-base" />
          <button type="submit" className="w-25 h-10 px-8 bg-black text-white rounded-r-full hover:bg-gray-900 transition text-lg font-medium">
            Search
          </button>
        </form>

        {/* Navbar Icons */}
        <div className="flex items-center justify-between gap-8 text-black">
          <NavItem icon={FaHeart} text="Wishlist" onClick={handleWishlistClick} />
          <NavItem icon={FaShoppingCart} text="Cart" onClick={() => navigate("/cart")} />
          <NavItem icon={FaPhone} text="Contact" onClick={() => navigate("/contact")} />
          <NavItem icon={FaUser} text="Sign In" onClick={() => navigate("/signin")} />
        </div>
      </div>
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
    </nav>
  );
};

// Reusable NavItem Component
const NavItem = ({ icon: Icon, text, onClick }) => (
  <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer hover:text-gray-700">
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Icon className="text-2xl" />
    </motion.div>
    <p className="text-sm text-center mt-1">{text}</p>
  </div>
);

export default Navbar;
