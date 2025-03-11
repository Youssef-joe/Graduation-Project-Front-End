import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
const MAX_QUANTITY = 10;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Validate cart items
        const validatedCart = parsedCart.map(item => ({
          ...item,
          quantity: Math.min(Math.max(1, item.quantity), MAX_QUANTITY)
        }));
        setCart(validatedCart);
      } catch (error) {
        console.error("Error loading cart:", error);
        localStorage.removeItem("cart");
      }
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
      // Calculate total
      const newTotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotal(newTotal);
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i._id === item._id);
      if (existingItem) {
        if (existingItem.quantity >= MAX_QUANTITY) return prevCart;
        return prevCart.map((i) =>
          i._id === item._id ? { ...i, quantity: Math.min(i.quantity + 1, MAX_QUANTITY) } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1 || quantity > MAX_QUANTITY) {
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getItemQuantity = (itemId) => {
    const item = cart.find((i) => i._id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemQuantity,
        MAX_QUANTITY,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
