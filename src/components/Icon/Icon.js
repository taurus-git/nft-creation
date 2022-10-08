import React from 'react';
import sprite from '../../assets/images/sprite.svg';

const Icon = (props) => {
    const className = props.class || 'ui__icon';

    return (
        <svg className={ className }>
            <use href={ sprite + props.icon }></use>
        </svg>
    );
};

export default Icon;
