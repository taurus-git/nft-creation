import React from 'react';

const NftCard = ( props ) => {
    const className = props.class || "nft--small";

    return (
        <picture className={ className }>
            <source srcSet={ `${ props.image.urls.small } 1x, ${ props.image.urls.thumb } 2x` }
                    media="(max-width: 600px)"/>
            <img srcSet={ `${ props.image.urls.small } 1x, ${ props.image.urls.thumb } 2x` }
                 alt={ props.image.id }/>
        </picture>
    );
};

export default NftCard;
