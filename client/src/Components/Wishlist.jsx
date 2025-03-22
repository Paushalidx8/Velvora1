import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { useCart } from "../context/CartContext"; // ✅ Import Cart Context
import { Trash2 } from "lucide-react"; // ✅ Trash Icon
import Breadcrumbs from "./Breadcrumbs";
import { toast } from "react-toastify"; // ✅ Better alerts (install: npm i react-toastify)
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { addToCart, isInCart } = useCart();

  const breadcrumbPath = [
    { name: "Home", link: "/" },
    { name: "Wishlist" },
  ];

  const handleAddToCart = (item) => {
    if (!isInCart(item.id)) {
      addToCart(item);
      toast.success(`${item.name} added to cart! 🛒`);
    } else {
      toast.warn(`${item.name} is already in the cart!`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8 flex flex-col items-center">
        <div className="w-full max-w-5xl flex justify-between items-center mb-6">
          <h1 className="pb-10 text-4xl font-bold">My Wishlist ❤️</h1>
          <Breadcrumbs path={breadcrumbPath} />
        </div>

        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-lg">Your wishlist is empty!</p>
        ) : (
          <div className="w-full max-w-5xl">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr className="text-lg font-semibold text-gray-700">
                  <th className="py-4 px-6 text-left"></th>
                  <th className="py-4 px-6 text-left">Name</th>
                  <th className="py-4 px-6 text-left">Price</th>
                  <th className="py-4 px-6 text-center">Action</th>
                  <th className="py-4 px-6 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-4 px-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md shadow-md"
                      />
                    </td>
                    <td className="py-4 px-6 text-lg font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-semibold">{item.price}</td>
                    <td className="py-4 px-6 text-center">
                      <button
                        className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button onClick={() => toggleWishlist(item)}>
                        <Trash2 size={26} className="text-black hover:text-red-500 transition" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
