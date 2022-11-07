import React from 'react';

const NftInfo = props => {
    return (
        <div className="nft-info">
            <div className="nft-info_author">
                <span className="nft-info_author--pre">BY</span>
                <img src={ props.authorImg } alt={ props.authorName }/>
                <span className="nft-info_author--name">{ props.authorName }</span>
            </div>
            <div className="nft-info_price">
                <div className="nft-info_price-title">
                    { props.priceTitle }
                    <div className="nft-info_price-value">
                        { props.priceValue }
                     </div>
                </div>
                { props.promoTimer && <div>End in { props.promoTimer }</div> }
            </div>
        </div>
    );
};

export default NftInfo;
