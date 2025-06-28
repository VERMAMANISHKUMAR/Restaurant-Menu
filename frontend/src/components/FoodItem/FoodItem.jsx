import React, { useContext } from "react";
import { motion } from "framer-motion";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link } from "react-router-dom";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const discountPrice = (price * 0.95).toFixed(2); // 5% discount

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden relative p-4 hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Food Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover rounded-md"
          src={image}
          alt={name}
        />

        {/* Add / Counter Icons */}
        {!cartItems[id] ? (
          <img
            className="w-8 h-8 absolute top-3 right-3 bg-orange-500 p-1 rounded-full cursor-pointer"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add Item"
          />
        ) : (
          <div className="absolute top-3 right-3 flex items-center bg-white shadow-sm rounded-full px-2 py-1 space-x-2">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove Item"
              className="w-5 h-5 cursor-pointer"
            />
            <p className="text-sm font-medium">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add Item"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <img src={assets.rating_starts} alt="Rating" className="w-16 h-4" />
        </div>

        <p className="text-sm text-gray-500">{description}</p>

        <div className="flex justify-between items-center">
          <p className="text-base text-gray-800 font-semibold">Price: ₹{price}</p>
          <p className="text-sm text-green-600">
            off 5% <span className="font-bold">₹{discountPrice}</span>
          </p>
        </div>

        <Link to="/cart">
          <button
            onClick={() => addToCart(id)}
            className="w-full mt-2 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition duration-300"
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FoodItem;
