import { useRef } from 'react';

const UseRef = () => {

    const contadorCarrito = useRef(0);

    function agregarAlCarrito() {
        contadorCarrito.current += 1;
        console.log(contadorCarrito.current)
    }

    return (
        <div>
            <button onClick={()=> agregarAlCarrito()}>Agregar al carrito</button>
        </div>
    );
}

export default UseRef;
