import React from 'react';
import { ImHeart } from 'react-icons/im';
import { GiCoffeeCup } from 'react-icons/gi';

function Footer() {
    return (
        <footer className="home__footer">
            <h3 className="has-text-centered is-size-3 has-text-white">Made with {' '} 
            <span><ImHeart size={25} style={{color: 'red'}} /></span> By __404__
            </h3>
            <h5 className="has-text-white mt-2 has-text-centered">Bug me a coffee <span><GiCoffeeCup size={30} style={{color: 'orange'}}/></span> at praveenkvinfo@gmail.com</h5>
        </footer>
    )
}

export default Footer
