import { useState, useEffect, createContext } from "react";
import {Cart} from "@/api";

const cartCtrl = new Cart ();

export const CartContext = createContext();

export function CartProvider(props) {
    const { children } = props;
    const [cart, setCart] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      //TODO: Obtener carrito
    }, [])
    
const addCart = (contenidoId) => {
    cartCtrl.add(contenidoId)
}

    const data = {
        cart,
        addCart,
        total,
        deleteItem:() => {},
        deleteAllItems:() => {},
        changeQuantityItem: () => {},
    };

    return(
    <CartContext.Provider value={data}>
        {children }
    </CartContext.Provider>
)}