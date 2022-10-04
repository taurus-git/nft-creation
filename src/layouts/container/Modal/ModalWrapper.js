import React from 'react';

const ModalWrapper = ( props) => {
    const handleClick = () => {
        props.onClick();
    }

    return (
        <div className={`modal ${props.isOpen ? "open" : ""}`} onClick={handleClick}>
            {props.children}
            <div className={`modal--bg-opacity ${props.isOpen ? "open" : ""}`}>
                { props.content }
            </div>
        </div>
    );
};

export default ModalWrapper;

