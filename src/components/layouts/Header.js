import React from 'react';
import { GiNewspaper } from 'react-icons/gi';

function Header() {
    return (
        <nav className="navbar">
            <div className="header__container">
            <GiNewspaper size={50} style={{color: 'white', size:'large'}} />
            <h1 className=" is-size-4 has-text-white">
            NEWS READER</h1>
            </div>
        </nav>
    )
}

export default Header;
