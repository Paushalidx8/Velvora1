import React from "react";
import { motion } from "framer-motion";

const Sidebar = ({ isOpen, toggleSidebar, isAuthenticated }) => {
  return (
    <>
      {/* Transparent Shadow Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-[4px] z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Component */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: isOpen ? "0%" : "-100%",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="fixed top-0 left-0 h-full w-[23rem] bg-gray-300 text-black shadow-[20px_0px_50px_rgba(0,0,0,0.4)] z-50 flex flex-col p-6 transition-all duration-300"
      >
        {/* Header Section with Logo & Close Button */}
        <div className="flex items-center justify-between border-b border-gray-500 pb-4 ">
          <div className="flex items-center gap-4">
            <img
              src="./src/assets/images/homelogo1.png"
              alt="Velvora Logo"
              className="w-24 h-9 object-contain mix-blend-multiply"
            />
            <h2 className="text-black font-bold text-2xl">Menu</h2>
          </div>

          {/* Close Button */}
          <motion.button
            onClick={toggleSidebar}
            className="text-black text-2xl"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            ✖
          </motion.button>
        </div>

        {/* Sidebar Options */}
        <ul className="py-6 space-y-4 flex-1 text-lg">
          <li className="text-black hover:bg-gray-500 py-4 px-6 rounded-md cursor-pointer transition duration-300">
            Home
          </li>
          <li className="text-black hover:bg-gray-500 py-4 px-6 rounded-md cursor-pointer transition duration-300">
            Profile
          </li>
          {isAuthenticated && (
            <li className="text-black hover:bg-gray-500 py-4 px-6 rounded-md cursor-pointer transition duration-300">
              Log Out
            </li>
          )}
        </ul>
      </motion.div>
    </>
  );
};

export default Sidebar;
