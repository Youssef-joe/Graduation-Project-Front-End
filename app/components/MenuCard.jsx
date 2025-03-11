import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const MenuCard = ({ item }) => {
  const { _id, imageSrc, price, title, description, category } = item;
  const { cart, addToCart, updateQuantity } = useCart();
  const itemInCart = cart.find((cartItem) => cartItem._id === _id);
  const MAX_QUANTITY = 10;

  const handleQuantityUpdate = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= MAX_QUANTITY) {
      updateQuantity(_id, newQuantity);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <span className="text-2xl font-bold text-red-600">${price}</span>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center">
          {!itemInCart ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(item)}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              <FaShoppingCart />
              Add to Cart
            </motion.button>
          ) : (
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleQuantityUpdate(itemInCart.quantity - 1)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                <FaMinus size={12} />
              </motion.button>
              <span className="font-semibold">{itemInCart.quantity}</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleQuantityUpdate(itemInCart.quantity + 1)}
                disabled={itemInCart.quantity >= MAX_QUANTITY}
                className={`p-2 rounded-full ${
                  itemInCart.quantity >= MAX_QUANTITY
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}>
                <FaPlus size={12} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
