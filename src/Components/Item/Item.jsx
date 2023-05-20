import { Link } from 'react-router-dom';
const Item = ({id,nombre,precio,img}) => {
    
    return (
        <div className=' bg-yellow-300 rounded-[10px] w-[15rem] p-4 m-4 flex flex-col items-center'>
            <img src={img} alt={nombre} className=' object-contain w-[150px]'/>
            <h3>Nombre {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>ID: {id}</p>
            {/* <button className=' bg-orange-700 text-zinc-100 text-[1.2rem] w-[8rem] rounded-[10px] border-none cursor-pointer'>Ver detalles</button> */}
            <Link to={`/item/${id}`} className=' bg-orange-700
            text-zinc-100 text-[1.2rem] w-[8rem] rounded-[10px] border-none cursor-pointer'> Ver Detalles</Link>
        </div>
    );
}

export default Item;
