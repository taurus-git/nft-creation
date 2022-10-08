import React from 'react';

const ModalWrapper = ( props ) => {
    return (
        <div className={ `modal ${ props.class ? props.class : "" }` } onClick={ props.onClick }>
            { props.content }

            <div className={ `modal--bg-opacity ${ props.opacityClass }` }>
                { props.children }
            </div>
        </div>
    );
};

export default ModalWrapper;

