import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [alertOpen, setAlertOpen] = useState(false);

    // Load cart details from localStorage  
    useEffect(() => {
         console.log("Checking local storage for cart data...");
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            console.log("Cart data found in local storage:", savedCart);
            setCart(JSON.parse(savedCart));
        }else{
            console.log("Cart data not found in local storage");
        }
    }, []);

    // Save cart details to localStorage 
    useEffect(() => {
        console.log("Saving cart to local storage:", cart)
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //  add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        showAlert();
    };

    //  remove a product from the cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    //  show alert
    const showAlert = () => {
        setAlertOpen(true);
    };

    //  close alert
    const handleCloseAlert = () => {
        setAlertOpen(false);
    };

    return (
        <ProductContext.Provider value={{
            selectedProduct,
            setSelectedProduct,
            cart,
            addToCart,
            removeFromCart,
            alertOpen,
            handleCloseAlert
        }}>
            {children}
        </ProductContext.Provider>
    );
};
