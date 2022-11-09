import React from 'react';

const MenuWrapper = props => {
    const className = props.class || "";

    return (
        <div className={ className }>
            { props.legend && <h4 className={ `${ className }--legend}` }>
                { props.legend }
            </h4> }
            { props.children }
        </div>
    );
};

export default MenuWrapper;
