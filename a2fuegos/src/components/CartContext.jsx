import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCarList] = useState([]);
    console.log(cartList);

    const addToCart = (item, cantidadItem) => {
        let funcioneliminar = cartList.find(product => product.key === item.key);
        if (funcioneliminar === undefined) {

        setCarList([
            ...cartList,
            {
                key: item.key,
                foto: item.imagen[0],
                apodo: item.nombre,
                monto: item.precio,
                cantidadItem: cantidadItem
            }
        ]);
        } else {
            funcioneliminar.cantidadItem += cantidadItem;
        }
    }

    const deleteProduct = (key) => {
        let eliminaProducto = cartList.filter(item => item.key !== key);
        setCarList(eliminaProducto);
    }

    const removeCart = () => {
        setCarList([]);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, deleteProduct, removeCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

/*
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCarList] = useState([]);
    console.log(cartList);

    const addToCart = (item, cantidadItem) => {
        setCarList([
            ...cartList,
            {
                foto: item.imagen[0],
                apodo: item.nombre,
                monto: item.precio,
                cantidadItem: cantidadItem
        }]);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
*/
