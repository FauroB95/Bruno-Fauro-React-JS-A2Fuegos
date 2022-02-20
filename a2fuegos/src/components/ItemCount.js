import { useState } from "react";

    const ItemCount = ({ stock, initial, onAdd }) => {

    const [puntaje, setPuntaje] = useState(initial);

return (
    <div>
        <p>{puntaje} valoraciones.</p>
        <button onClick={()=>onAdd("suma", setPuntaje, puntaje, stock)}>
        Positivo
        </button>
        <button onClick={()=>onAdd("resta", setPuntaje, puntaje, stock)}>
        Negativo
        </button>
    </div>
    );
};

export default ItemCount;
