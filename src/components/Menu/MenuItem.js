import React from 'react';

const MenuItem = ( props ) => {
    return (
        <li>
            <a href={props.linkData.link}>{props.linkData.title}</a>
        </li>
    );
};

export default MenuItem;
