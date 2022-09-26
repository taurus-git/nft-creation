import React from 'react';
import Icon from '../Icon/Icon'

const Button = ( props ) => {
    const className = 'button ' + props.class || '';

    return (
        <button className={ className } onClick={ props.onPress }>
            { props.value }
            { props.icon && <Icon icon={props.icon}/> }
        </button>
    );
}

export default Button;
