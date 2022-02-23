import { useContext } from "react";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';

const Cart = () => {

    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>MI CARRITO DE COMPRAS</TitleCart>
                {
                    (test.cartList.length > 0)
                    ? <button className="borrarTodo" onClick={test.removeCart}>BORRAR TODOS LOS PRODUCTOS</button>
                    : <h2> El carrito se a vaciado <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlVy_x_XY2F-ikPfhttdNayomZnfTuf0E2g&usqp=CAU" /></h2>
                }
            <ContentCart>
                {
                    test.cartList.length > 0 ?
                    test.cartList.map(item =>
                    <Product>
                    <ProductDetail>
                        <ImageCart src={item.foto} alt={item.apodo}/>
                        <Details>
                        <span>
                            <b>Articulo: </b>{item.apodo}
                        </span>
                        <button onClick={() => test.deleteProduct(item.key)}>Borrar articulo</button>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount> 
                            Cantidad: {item.cantidadItem}
                        </ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>
                            Precio: {item.monto}
                        </ProductPrice>
                        <div>
                            <h6>Ubicacion: {item.key}</h6>
                        </div>
                    </PriceDetail>
                    </Product>
                )
                :  <TitleCart></TitleCart>
            }
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;

/*
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

const Cart = () => {

    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            {
                test.cartList.map(item =>(
                    <ContentCart>
                    <Product>
                    <ProductDetail>
                        <ImageCart src={item.foto} />
                        <Details>
                        <span>
                            <b>Product:</b>{item.apodo}
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <div>
                            <h2>Cantidad: {item.cantidadItem}</h2>
                        </div>
                        <div>
                        <h2>Precio: {item.monto}</h2>
                        </div>
                    </PriceDetail>
                    </Product>
            </ContentCart>
                )
            )            
            }
        </WrapperCart>
    );
}

export default Cart;

*/