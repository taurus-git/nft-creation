import React from 'react';
import MenuItem from "./MenuItem";
import { generateKey } from "../../services/Helpers/helpers";

const Menu = ( props ) => {
    const className = `menu ${ props.class || '' }`;

    return (
        <nav ref={ props.innerRef } className={ className }>
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
