import React from 'react';

const ModalContent = ( props ) => {
    const className = `modal-content ${ props.class || '' }`;

    return (
        <div className={ className }>
            { props.children }
            <div className="modal-content-icons">
                { props.content }
            </div>
        </div>
    );
}

export default ModalContent;
