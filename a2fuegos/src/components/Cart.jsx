import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';
import { serverTimestamp, updateDoc } from "firebase/firestore";
import db from "./FirebaseConfig";
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import FormatNumber from "./FormatoNumber";


const Cart = () => {

    const test = useContext(CartContext);

    const createOrder = () => {
        let order = {
            buyer: {
                Nombre: "Leo Messi",
                Email: "leomessi@gmail.com",
                Tel: "15878999",
            },
            items: test.cartList.map((traeme) => {
                return {key: traeme.key, apodo: traeme.apodo, monto: traeme.monto, cantidadItem: traeme.cantidadItem};
            }),
            date:serverTimestamp (),
            total: test.calculoTotal()
        }
        console.log(order)

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc (newOrderRef, order);
            return newOrderRef;
        }
    
        createOrderInFirestore()
            .then((result) => {
                test.cartList.map(async (item) => {
                    const q = query(
                        collection(db, 'products'),
                        where('key', '==', item.key)
                    );
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach(async (foundItem) => {
                        console.log(foundItem);
                    const washingtonRef = doc(db, 'products', foundItem.id);
                    await updateDoc(washingtonRef, {
                    stock: foundItem.data().stock - item.cantidadItem,
                    });
                        console.log(foundItem.id, ' => ', foundItem.data());
                    });
            });
                test.removeCart();
                    alert('Tu orden se creo con exito:' + result.id);
                })
            .catch((error) => console.log(error));
        };

    return (
        <WrapperCart>
            <TitleCart>MI CARRITO DE COMPRAS</TitleCart>
                {
                    (test.cartList.length > 0)
                    ? <button className="borrarTodo" onClick={test.removeCart}>BORRAR TODOS LOS PRODUCTOS</button>
                    : <h2> El carrito se a vaciado <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlVy_x_XY2F-ikPfhttdNayomZnfTuf0E2g&usqp=CAU" /></h2>
                }
            <ContentCart>
                <div>
                <div>
                {
                    test.cartList.length > 0 &&
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
                            <h6>Subtotal: $ {test.calculoTotalPorItem(item.key)}</h6>
                        </div>
                    </PriceDetail>
                    </Product>
                )
            }
            </div>
            <TitleCart></TitleCart>
            {
                    test.cartList.length > 0 &&
                        <div className="ticket">
                            <h4 className="calculoCompra">CALCULO TOTAL DE LA COMPRA</h4>
                            <article className="articuloCompras">
                                <h5 className="subTotal">Subtotal <FormatNumber number={test.calculoSubTotal()} /> </h5>
                                <h5 className="impuestos">Impuestos Nacionales <FormatNumber number={test.impuestos()} /> </h5>
                                <h5 className="bonificacion">Bonificacion Extra <FormatNumber number={-test.impuestos()} /></h5>
                                <h5 className="total">Total <FormatNumber number={test.calculoTotal()} /></h5>    
                                <button onClick={createOrder} className="finalizaCompra">Finalizar compra</button>
                            </article>
                        </div>
                }
                                
                </div>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;






/*
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';
import { increment, serverTimestamp, updateDoc } from "firebase/firestore";
import db from "./FirebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import FormatNumber from "./FormatoNumber";


const Cart = () => {

    const test = useContext(CartContext);

    const createOrder = () => {
        let order = {
            buyer: {
                Nombre: "Leo Messi",
                Email: "leomessi@gmail.com",
                Tel: "15878999",
            },
            items: test.cartList.map((traeme) => {
                return {key: traeme.key, apodo: traeme.apodo, monto: traeme.monto, cantidadItem: traeme.cantidadItem};
            }),
            date:serverTimestamp (),
            total: test.calculoTotal()
        }
        console.log(order)

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc (newOrderRef, order);
            return newOrderRef;
        }
    
        createOrderInFirestore  ()
            .then(result => {
                alert ("Tu orden se creo con exito:" + result.id);
                test.cartList.map(async (item) => {
                    const itemRef = doc(db, "products", item.key);
                    await updateDoc (itemRef, {
                    stock: increment (-item.cantidadItem)
                });
            });
                test.removeCart();
            })
            .catch(error => console.log(error));
    };

    return (
        <WrapperCart>
            <TitleCart>MI CARRITO DE COMPRAS</TitleCart>
                {
                    (test.cartList.length > 0)
                    ? <button className="borrarTodo" onClick={test.removeCart}>BORRAR TODOS LOS PRODUCTOS</button>
                    : <h2> El carrito se a vaciado <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlVy_x_XY2F-ikPfhttdNayomZnfTuf0E2g&usqp=CAU" /></h2>
                }
            <ContentCart>
                <div>
                <div>
                {
                    test.cartList.length > 0 &&
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
                            <h6>Subtotal: $ {test.calculoTotalPorItem(item.key)}</h6>
                        </div>
                    </PriceDetail>
                    </Product>
                )
            }
            </div>
            <TitleCart></TitleCart>
            {
                    test.cartList.length > 0 &&
                        <div className="ticket">
                            <h4 className="calculoCompra">CALCULO TOTAL DE LA COMPRA</h4>
                            <article className="articuloCompras">
                                <h5 className="subTotal">Subtotal <FormatNumber number={test.calculoSubTotal()} /> </h5>
                                <h5 className="impuestos">Impuestos Nacionales <FormatNumber number={test.impuestos()} /> </h5>
                                <h5 className="bonificacion">Bonificacion Extra <FormatNumber number={-test.impuestos()} /></h5>
                                <h5 className="total">Total <FormatNumber number={test.calculoTotal()} /></h5>    
                                <button onClick={createOrder} className="finalizaCompra">Finalizar compra</button>
                            </article>
                        </div>
                }
                                
                </div>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;


*/


/*
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
*/
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