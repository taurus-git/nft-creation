import React from 'react';
import ResponsiveImage from "../../../components/ResponsiveImage/ResponsiveImage";
import SocialTag from "../../../components/SocialTag/SocialTag";
import HeroImage from "../../../components/HeroImage/HeroImage";
import Title from "../../../components/Title/Title";
import NftCard from "../../../components/NftCard/NftCard";
import NftInfo from "../../../components/NftCard/NftInfo";

const CollectionWrapper = ( props ) => {
    const className = `${ props.class || "" } collection__wrapper`;

    return (
        <section className={ className }>
            <ResponsiveImage collection={ props.singleCollection } class={ `${ className }--bg-image` }/>
            <div className={ `${ className }_content` }>
                <div className={ `${ className }_card` }>
                    <NftCard class="nft--large" key={ props.nft[0].id } image={ props.nft[0] }/>
                    <NftInfo authorName={ props.singleCollection.slug }
                             authorImg={ props.singleCollection.banner_image_url }
                             priceTitle="Buy Now" priceValue="1.00 ETH"></NftInfo>
                </div>
                <div className={ `${ className }_collection--info` }>
                    <SocialTag icon="#hash" class="social-tag hash">{ props.socialTag }</SocialTag>
                    <div className={`${ className }_hero`}>
                        <HeroImage collection={ props.singleCollection }/>
                        <div className={`${ className }_hero--text`}>
                            <Title class={ `${ className }--title` }>{ props.singleCollection.name }</Title>
                            <span className={ `${ className }--nfts-counter` }>4 NFTs</span>
                        </div>
                    </div>
                    <SocialTag class="social-tag">{ "@" + props.singleCollection.slug }</SocialTag>
                </div>
                <div className={ `${ className }_card` }>
                    <NftCard class="nft--large" key={ props.nft[1].id } image={ props.nft[1] }/>
                    <NftInfo authorName={ props.singleCollection.slug }
                             authorImg={ props.singleCollection.banner_image_url }
                             priceTitle="Buy Now" priceValue="1.00 ETH"></NftInfo>
                </div>
                {props.nft[2] && <div className={ `${ className }_card` }>
                    <NftCard class="nft--large" key={ props.nft[2].id } image={ props.nft[2] }/>
                    <NftInfo authorName={ props.singleCollection.slug }
                             authorImg={ props.singleCollection.banner_image_url }
                             priceTitle="Buy Now" priceValue="1.00 ETH"></NftInfo>
                </div>}
            </div>
        </section>
    );
};

export default CollectionWrapper;
