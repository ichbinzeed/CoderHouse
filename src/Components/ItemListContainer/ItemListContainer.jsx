import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();      

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    }, [idCategoria])


    return (
        <div className="">
            <h2 className=" text-center text-green-400 text-5xl">Productos</h2>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;
