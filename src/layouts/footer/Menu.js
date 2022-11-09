import React from 'react';
import { generateKey } from "../../services/Helpers/helpers";

const Menu = props => {
    const className = props.class || "";
    const menu = props.menu;

    return (
        <ul className={ className }>
            { menu.map( ( list ) => (
                <li key={ generateKey( list.link ) }><a href={ list.link }>{ list.title }</a></li>
            ) ) }
        </ul>
    );
};

export default Menu;
