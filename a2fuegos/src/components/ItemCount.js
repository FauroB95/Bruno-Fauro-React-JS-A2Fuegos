import { useState } from 'react';

const ItemCount = () => {
    
    //const puntaje = 0;
    //let puntaje = 0;
    const [puntaje, setPuntaje] = useState(0);

    const incrementar = () => {
        //puntaje += 1;
        //console.log(puntaje);
        setPuntaje (puntaje +1);
    };

    const decrementar = () => {
        //puntaje += 1;
        //console.log(puntaje);
        setPuntaje (puntaje -1);
    };

    return(
        <div>
                <p>{puntaje} valoraciones.</p>
                <button onClick={incrementar}>Positivo</button>
                <button onClick={decrementar}>Negativo</button>
        </div>
    );
}

export default ItemCount;


