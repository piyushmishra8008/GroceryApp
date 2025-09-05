import React, { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast';

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const navigate=useNavigate();
    const [user,setUser] =useState(null);
    const [isSeller,setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products,setProducts] = useState([]);
    const [cartItems,setCartItems] = useState({});
    //fetch all Products data
    const fetchProducts=async()=>{
        setProducts(dummyProducts);
    };
    useEffect(()=>{
        fetchProducts();
    },[]);
    //add to cart function
    const addToCart=(itemId)=>{
    let cartData=structuredClone(cartItems);
    if(cartData[itemId]){
        cartData[itemId] +=1;
    }else{
        cartData[itemId]=1;
    }
    setCartItems(cartData);
    toast.success("Item added to cart");
    };
    //update items in cart 
    const updateCartItem=(itemId,quantity)=>{
        let cartData=structuredClone(cartItems);
       
            cartData[itemId]=quantity;
        
        setCartItems(cartData); 
        toast.success("Cart updated");
    };
    //total cart items
    const cartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    };
    //total cart amount
    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product.id === items);
            if (cartItems[items] > 0) {
                totalAmount += cartItems[items] * itemInfo.offerPrice;
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    };
    //remove item from cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId];
            }
            toast.success("Item removed from cart");
            setCartItems(cartData);
        }
    };
    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller, 
        showUserLogin, 
        setShowUserLogin,
        products,
        addToCart,
        updateCartItem,
        cartCount,
        totalCartAmount,
        removeFromCart,
        cartItems,
        setCartItems,
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;