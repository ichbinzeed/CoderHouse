import React, { useState, useEffect } from 'react';

const Contador = (props) => {

    const [contador, setContador] = useState(props.inicial);

    const [color, setColor] = useState("border-2 px-2 mx-2 bg-black");

    const aumentarContador = () => {
        if (contador < props.stock) setContador(contador+1);
    }
    const disminuirContador = () => {
        if (contador>props.inicial) setContador(contador-1);
    }

    useEffect(() => {
        (contador == 3) ? setColor("border-2 px-2 mx-2 bg-red-600") : setColor("border-2 px-2 mx-2 bg-slate-300")
    }, [contador]);

    return (
        <div>
            <h2>Contador</h2>
            <button onClick={disminuirContador} className={color}>-</button>
            <strong>Contador: {contador}</strong>
            <button onClick={aumentarContador} className={color}>+</button>
        </div>
    );
}

export default Contador;
