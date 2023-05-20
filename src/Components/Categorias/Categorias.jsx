import { useState, useEffect } from 'react';

const Categorias = () => {

    const [categoria, setCategoria] = useState("Zweibeiner");


    const handleClick = (categoria) => {
        setCategoria(categoria)
    }

    useEffect ( () => {
        document.title = `Categoria: ${categoria}`
    },[categoria])

    return (
        <div>
            <h2>Categorias de productos</h2>
            <button onClick={ ()=>handleClick("Frutas") }>Frutas</button>
            <button onClick={ ()=>handleClick("Carnes") }>Carnes</button>
            <button onClick={ ()=>handleClick("Lacteos") }>Lacteos</button>
            <button onClick={ ()=>handleClick("Limpieza") }>Limpieza</button>
        </div>
    );
}

export default Categorias;
