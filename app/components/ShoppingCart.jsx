import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaTimes,
  FaTrash,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import Image from "next/image";

const ShoppingCart = ({ isOpen, onClose }) => {
  const { cart, total, removeFromCart, updateQuantity, clearCart, MAX_QUANTITY } = useCart();

  const handleQuantityUpdate = (itemId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1 && newQuantity <= MAX_QUANTITY) {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <FaShoppingCart className="text-2xl text-red-600" />
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
                  {cart.length} items
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
                      <div className="relative h-20 w-20 flex-shrink-0">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{item.title}</h3>
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="text-red-500 hover:text-red-700">
                            <FaTrash size={14} />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleQuantityUpdate(item._id, item.quantity, -1)}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                            <FaMinus size={12} />
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityUpdate(item._id, item.quantity, 1)}
                            disabled={item.quantity >= MAX_QUANTITY}
                            className={`p-1 rounded-full ${
                              item.quantity >= MAX_QUANTITY
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}>
                            <FaPlus size={12} />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          Subtotal: ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-red-600">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  Clear Cart
                </button>
                <button
                  onClick={() => {
                    // Handle checkout
                    console.log("Proceeding to checkout with items:", cart);
                  }}
                  disabled={cart.length === 0}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Checkout
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
