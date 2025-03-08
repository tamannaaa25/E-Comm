import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContxt = createContext();

const ShopContxtProvider = ({children}) =>{

    
    const currency = '$';
    const delivery_fee =10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch]= useState(false);
    const [cartItems, setCartItems] = useState([]);


    const handleAddToCart = () => {
        toast.success("Item added to cart!");
      };
      
      const handleError = () => {
        toast.error("Something went wrong!");
      };

    const addToCart = async (itemId, size) =>{

        if(!size){
            console.log("Size not selected, showing toast");
            toast.error('Select Product Size');
            return;

        }

        console.log("Adding to cart", itemId, size);
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }else{
                
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;

        }
        setCartItems(cartData);
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems]);

    const value = {
        products, currency, delivery_fee,
        search, setSearch,showSearch,setShowSearch,
        cartItems,  addToCart

    };

    return (
        <ShopContxt.Provider value ={value}>
            {children}
        </ShopContxt.Provider>
    );
};


export default ShopContxtProvider;