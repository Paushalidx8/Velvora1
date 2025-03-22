import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ path }) => {
  return (
    <nav className="flex items-center py-3 px-6 bg-gray-100 rounded-lg shadow-md">
      {path.map((item, index) => (
        <span key={index} className="flex items-center">
          {/* Display separator except for the first item */}
          {index !== 0 && <span className="mx-4 text-gray-400 font-semibold">__/__</span>}
          
          {/* Breadcrumb link or text */}
          {item.link ? (
            <Link
              to={item.link}
              className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-500 font-medium">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
