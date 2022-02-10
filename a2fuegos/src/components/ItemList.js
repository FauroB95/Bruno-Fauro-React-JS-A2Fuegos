import Item from './Item';
import { useEffect, useState } from 'react';
import { customFetch } from "./customFetch";
const {products} = require('./products');

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    },[]) 

    return(
        <div>
        {productos.map(articulo => {
            return (
                <div className="item-details">
            <Item
                posicion={articulo.key} 
                foto={articulo.imagen}
                nombre={articulo.nombre}
                descripcion={articulo.descripcion}
                stock={articulo.stock}
                precio={articulo.precio}
        ></Item>
    </div>
            );
        })
    }
    </div>
    )
}

export default ItemList;

/*
    return(
        <div>
        {productos.map(articulo => {
            return (
                <div className="item-details">
            <Item
                posicion={articulo.key} 
                foto={articulo.imagen}
                nombre={articulo.nombre}
                descripcion={articulo.descripcion}
                stock={articulo.stock}
                precio={articulo.precio}
        ></Item>
    </div>
            );
        })
    }
    </div>
    )
}

export default ItemList;
*/




/*
    return(
        <div>
        {productos.map(articulo => {
            return (
                <div className="item-details">
            <Item
                posicion={articulo.key} 
                foto={articulo.imagen}
                nombre={articulo.nombre}
                descripcion={articulo.descripcion}
                stock={articulo.stock}
                precio={articulo.precio}
        ></Item>
    </div>
            );
        })
    }
    </div>
    )
}
*/


/*
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
*/








