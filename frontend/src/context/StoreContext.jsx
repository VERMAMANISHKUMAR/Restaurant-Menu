import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; // Ensure the path to food_list is correct

// Create the context
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  //Add to card function
const [cartItems, setCartItems]=useState({});
const addToCart = (itemId) =>{
  if(!cartItems [itemId]){
    setCartItems((prev)=>({...prev, [itemId]:1}));
  }
  else{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
  }
}
//Remove from card function
  const removeFromCart= (itemId) =>{
    
      setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
  }

 useEffect(()=>{
  console.log(cartItems);
 },[cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
