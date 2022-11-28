import React from 'react';
import PortalReactDOM from 'react-dom';

const ModalWrapper = ( props ) => {
    return PortalReactDOM.createPortal(
        <div className={ `modal ${ props.opacityClass ? "" : "closed" }` } onClick={ props.onClick }>
            <div className={ `modal--bg-opacity ${ props.opacityClass }` }>
                { props.children }
            </div>
        </div>,
        document.body
    );
};

export default ModalWrapper;

