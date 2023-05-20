import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const imgMarolio = "https://www.marolio.com.ar/sites/all/themes/theme1043/logo.png";
    return (    
        <header className='flex flex-row justify-around'>
            <Link to={"/"}>
                <img className="w-[250px]" src={imgMarolio} alt="Logo Marolio" />
            </Link>
            <ul className='flex flex-none m-4'>
                <li className='m-4'>
                    <NavLink to={`/categoria/2`} className=' bg-orange-700
            text-zinc-100 text-[1.2rem] w-[8rem] rounded-[10px] border-none cursor-pointer p-4'>Almacén</NavLink>
                </li>

                <li className='m-4'>
                    <NavLink to={`/categoria/3`} className=' bg-orange-700
            text-zinc-100 text-[1.2rem] w-[8rem] rounded-[10px] border-none cursor-pointer p-4'>Lácteos</NavLink>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar