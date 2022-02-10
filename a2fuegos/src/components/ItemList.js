import Item from './Item';
const {products} = require('./products');

const ItemList = () => {

    return(
        products(estrella => {
            return (
                <div className="item-details">
            <Item
                posicion={estrella.key} 
                foto={estrella.imagen}
                nombre={estrella.nombre}
                descripcion={estrella.descripcion}
                stock={estrella.stock}
                precio={estrella.precio}
        ></Item>
    </div>
            );
        })
    )}

export default ItemList;











