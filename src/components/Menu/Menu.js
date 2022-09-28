import React from 'react';
import MenuItem from "./MenuItem";

const Menu = ( props ) => {
    const className = `menu ${ props.class || '' }`;

    const menuItems = props.menuList.map( (linkData) => {
        return (
            <MenuItem linkData={linkData}/>
        );
    } );

    return (
        <nav className={ className } >
            <ul className="menu__list">
                { menuItems }
            </ul>
        </nav>
    );
};

export default Menu;


