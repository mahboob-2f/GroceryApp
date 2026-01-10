import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dummyProducts } from "../assets/assets";
import toast from 'react-hot-toast'

export const AppContext = createContext();

export const AppContextProvider =({children}) =>{

    const currency = import.meta.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user,setUser]= useState(null);
    const [isSeller,setIsSeller] = useState(false);
    const [showUserLogin,setShowUserLogin]= useState(false)
    const [product,setProduct]= useState([]);

    const [cartItems,setCartItems]= useState({})

    //  fetch all Products
    const fetchProducts = async()=>{
        setProduct(dummyProducts);
    }
    //  add products to cart
    const addToCart = ()=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData = 1;
        }
        setCartItems(cartData);
        toast.success("Added to Cart");
    }
    //  updata cart quantity 
    const updateCartItem =(itemId,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart updated");
    }
    // remove item from cart
    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -=1;
            if(cartData[itemId]==0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed from cart");
        setCartItems(cartData);
    }

    useEffect(()=>{
        fetchProducts();
    },[])


    const value={
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        product,
        currency,
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}