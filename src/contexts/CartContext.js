import { useState, useEffect, createContext } from "react";
import {Cart} from "@/api";

const cartCtrl = new Cart ();

export const CartContext = createContext();

export function CartProvider(props) {
    const { children } = props;
    const [cart, setCart] = useState(null);
    const [total, setTotal] = useState(cartCtrl.count());


  

    useEffect(() => {
      const response = cartCtrl.getAll()
      setCart(response)
    }, [])
    
const addCart = (contenidoId) => {
    cartCtrl.add(contenidoId)
    refreshTotalCart()
}

const changeQuantityItem = (contenidoId, quantity) => {
 cartCtrl.changeQuantity(contenidoId, quantity);
 refreshTotalCart()
}

const deleteItem = (contenidoId) => {
 cartCtrl.delete(contenidoId)
 refreshTotalCart()
}
const deleteAllItems = () => {
    cartCtrl.deleteAll();
    refreshTotalCart()
}


const refreshTotalCart = () => {
    setTotal(cartCtrl.count())
    setCart(cartCtrl.getAll())
}

    const data = {
        cart,
        addCart,
        total,
        deleteItem,
        deleteAllItems,
        changeQuantityItem,
    };

    return(
    <CartContext.Provider value={data}>
        {children }
    </CartContext.Provider>
)}