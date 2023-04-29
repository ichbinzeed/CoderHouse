import React from 'react';
import "./NavBar.css";
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <header>
            <h1>Zeit Store</h1>

            <nav>
                
                <ul>
                    <li>Camperas</li>
                    <li>Pantalones</li>
                    <li>Remeras</li>
                </ul>
                
            </nav>
            <CartWidget></CartWidget>

        </header>
    );
}

export default NavBar;
