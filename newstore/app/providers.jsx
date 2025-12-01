'use client'
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

// Create a Context
const AppContext = createContext();

// Create a Provider component
export const AppProvider = ({ children }) => {
  const [subdomain, setDomain] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const [state, setState] = useState({
    domaindata: null,
    theme: "light",
  });

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('premiumCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('premiumCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Cart functions
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );
    
    const deliveryCharge = 150;
    const total = subtotal + deliveryCharge;
    return {
      subtotal: subtotal.toFixed(2),
      deliveryCharge: deliveryCharge.toFixed(2),
      total: total.toFixed(2),
      formatted: `₹${total.toFixed(2)}` // For display with currency symbol
    };
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Your existing domain logic
  useEffect(() => {
    const host = window.location.hostname;
    const parts = host.split('.');
    if (parts.length > 2) {
      setDomain(parts[0]);
      console.log(parts);
    } else {
      console.log(`get by ${host}`);
    }
  }, []);

  useEffect(() => {
    if(subdomain !== null && subdomain !== undefined) {
      fetchDomainUser(subdomain);
    }
  }, [subdomain]);

  const fetchDomainUser = async (name) => {
    try {
      const response = await axios.get(`https://healdiway.bkarogyam.com/erp-api/domain-advisor/get_domain/`, {
        params: { domain_name: name },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);

      setState((prevState) => ({
        ...prevState,
        domaindata: response.data,
      }));
    } catch (error) {
      console.log('Error fetching domain user:', error);
    }
  };

  const toggleTheme = () => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  // Provide all cart functions and data through context
  return (
    <AppContext.Provider value={{ 
      state, 
      setState, 
      toggleTheme,
      cart: {
        items: cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
        clearCart,
        getCartItemCount
      }
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to use Context
export const useAppContext = () => {
  return useContext(AppContext);
};