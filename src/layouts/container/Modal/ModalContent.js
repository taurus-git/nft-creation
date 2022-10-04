import React from 'react';
import Icon from "../../../components/Icon/Icon";
import { generateKey } from "../../../services/GenerateKey/GenerateKey";

function ModalContent( props ) {
    const className = `modal-content ${ props.class || '' }`;

    return (
        <div className={ className }>
            { props.content.map( ( linkData ) => (
                <Icon
                    key={ generateKey( linkData.icon ) }
                    icon={ linkData.icon }/>
                )
            ) }
        </div>
    );
}

export default ModalContent;
