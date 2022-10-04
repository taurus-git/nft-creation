import React from 'react';
import Icon from "../../../components/Icon/Icon";
import { generateKey } from "../../../services/GenerateKey/GenerateKey";

function ModalContent( props ) {
    const className = `modal-content ${ props.class || '' }`;

    let content;

    if (props.contentType === 'icons') {
        content = props.content.map( ( linkData ) => (
                <a href={ linkData.link }>
                    <Icon
                        class="modal_icon"
                        key={ generateKey( linkData.icon ) }
                        icon={ linkData.icon }/>
                </a>
            )
        )
    }

    return (
        <div className={ className }>
            { props.text }
            <div className="modal-content-icons">
                { content }
            </div>
        </div>
    );
}

export default ModalContent;
