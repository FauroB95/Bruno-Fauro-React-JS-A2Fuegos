import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <>
            <hr/>
            <button className="contenedorCarrito">
            <img className="imagenCarrito" src="https://svgsilh.com/svg/371981.svg" alt="carrito"></img>
            <span className="numeradorCarrito">{test.cantidadItemsKey()}</span>
            </button>
        </>
    );
}

export default CartWidget;

