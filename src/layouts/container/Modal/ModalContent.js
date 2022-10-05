import React from 'react';
import Icon from "../../../components/Icon/Icon";
import { generateKey } from "../../../services/GenerateKey/GenerateKey";

function ModalContent( props ) {
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
