import React from 'react';

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className=' items-center border-2 border-solid border-stone-300 text-center '>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab velit aliquam in rem a numquam fugit ipsum praesentium ex! Nobis ad modi vero 
            provident quisquam veritatis nam assumenda, expedita voluptates.</p>
            <img src={img} alt="" className='w-[450px] object-contain mx-auto'/>
        </div>
    );
}

export default ItemDetail;
