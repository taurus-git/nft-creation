import React from 'react';

const Menu = (props) => {
    const className = `menu ${ props.class || '' }`;

    return (
        <nav className={ className } >
            <ul className="menu__list">
                <li>
                    <a href="#">Explore NFT's</a>
                </li>
                <li>
                    <a href="#">Explore Categories</a>
                </li>
                <li>
                    <a href="#">Explore Collections</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;


