import React from 'react';

const NftCard = ( props ) => {
    return (
        <>
            <img className="nft small" src={ props.image.urls.regular } alt={props.image.id}/>
        </>
    );
};

export default NftCard;
