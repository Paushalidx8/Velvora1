import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ProductSection from "../Components/ProductSection";
import Wishlist from "../Components/Wishlist";

const Home = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Hide Navbar on Contact Page
  const hideNavbar = location.pathname === "/contact";

  // Prevent Sidebar from opening on Wishlist Page
  const disableSidebar = location.pathname === "/wishlist";

  // Function to toggle Sidebar
  const toggleSidebar = () => {
    if (!disableSidebar) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    
    <div className={`relative ${isSidebarOpen ? "overflow-hidden" : ""}`}>
      {/* Show Navbar only when not in Contact Page */}
      {!hideNavbar && <Navbar toggleSidebar={toggleSidebar} />}

      {/* Sidebar (conditionally shown) */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Ensure enough spacing below navbar */}
      <div className="pt-0">
        <ProductSection showDivider={false} />
      </div>
      
    </div>
  );
};

export default Home;
