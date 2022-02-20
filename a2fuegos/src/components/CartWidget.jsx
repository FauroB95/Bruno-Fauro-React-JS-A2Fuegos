
const CartWidget = (props) => {
    return (
        <>
            <hr/>
            <button className="contenedorCarrito">
            <img className="imagenCarrito" src="https://svgsilh.com/svg/371981.svg" alt="carrito"></img>
            <span className="numeradorCarrito">0</span>
            </button>
        </>
    );
}

export default CartWidget;
