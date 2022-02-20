import Item from './Item';

const ItemList = ({ items }) => {

    return(
        <>
        {
            items.length > 0
            ?items.map(item =>
                <Item 
                key={item.key} 
                foto={item.imagen}
                apodo={item.nombre}
                leyenda={item.descripcion}
                cantidad={item.stock}
                seccion={item.filtro}
                monto={item.precio}
                />)
                : <p> Cargando ....</p>
        }
        </>
    );
}

export default ItemList;
