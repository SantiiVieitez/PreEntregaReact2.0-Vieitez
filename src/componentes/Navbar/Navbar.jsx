import React, { useState } from 'react';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div>
                <NavLink to={'/category/celular'} className={({isActive}) => isActive ? 'ActiveOpcion' : 'Option'}>Celulares</NavLink>
                <NavLink to={'/category/tablet'} className={({isActive}) => isActive ? 'ActiveOpcion' : 'Option'}>Tablets</NavLink>
                <NavLink to={'/category/notebook'} className={({isActive}) => isActive ? 'ActiveOpcion' : 'Option'}>Notebooks</NavLink>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar