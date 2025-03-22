import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import ContactUs from "./Components/ContactUs";
import Wishlist from "./Components/Wishlist";
import Cart from "./Pages/Cart";  // ✅ Corrected import path
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";  

function App() {
  return (
    <>
     <ToastContainer position="top-right" autoClose={3000} />
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />  {/* ✅ Now it will work */}
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider></>
  );
}

export default App;
