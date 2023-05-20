import {useState, useEffect } from 'react';

const Prueba = (props) => {

    const [contador, setContador] = useState(props.inicial);

    const aumentarContador = () => {
        if (contador < props.stock) setContador(contador+1);
    }

    const [color, setColor] = useState("black");

    const disminuirContador = () => {
        if (contador > props.inicial) setContador(contador-1);
    }


    

    useEffect(()=>{
        console.log("Se ejecuto el useEffect!!!");
        document.title = `Contador ${contador}`
    }, [contador])

    return (
        <div>
            <h2>Contador</h2>
            <button onClick={() => disminuirContador()}>-</button>
            <strong style={{color:color}}>{`Contador : ${contador}`}</strong>
            <button onClick={() => aumentarContador()}>+</button>
            <br></br>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default Prueba;
