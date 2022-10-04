import React from 'react';
import MenuItem from "./MenuItem";
import { generateKey } from "../../services/GenerateKey/GenerateKey"

const Menu = ( props ) => {
    const className = `menu ${ props.class || '' }`;

    return (
        <nav className={ className }>
            <ul className="menu__list">
                { props.menuList.map( ( linkData ) => (
                    <MenuItem
                        key={ generateKey( linkData.title ) }
                        linkData={ linkData }/>
                ) ) }
            </ul>
        </nav>
    );
};

export default Menu;
