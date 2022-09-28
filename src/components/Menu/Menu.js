import React from 'react';
import MenuItem from "./MenuItem";
import { generateKey } from "../../services/GenerateKey/GenerateKey"

const Menu = ( props ) => {
    const className = `menu ${ props.class || '' }`;

    const menuItems = props.menuList.map( (linkData) => {
        return (
            <MenuItem key={generateKey(linkData.title)} linkData={linkData}/>
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


