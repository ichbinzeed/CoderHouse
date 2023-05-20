import { useRef } from 'react';

const UseRefDom = () => {

    const ref = useRef(null);

    const handleClick = () => {
        if (ref.current){
            ref.current.textContent = "Este texto fue modificado con useRef"
        }
    }


    return (
        <div>
            <h2>Use ref DOM</h2>
            <p ref={ref}>Permite modificar un elemento del dom</p>
            <button onClick={()=> handleClick()}>Haz click para modificar el parrafo</button>
        </div>
    );
}

export default UseRefDom;
