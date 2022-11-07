import React, { useEffect, useState } from 'react';
import ResponsiveImage from "../../../components/ResponsiveImage/ResponsiveImage";
import SocialTag from "../../../components/SocialTag/SocialTag";
import HeroImage from "../../../components/HeroImage/HeroImage";
import Title from "../../../components/Title/Title";
import NftCard from "../../../components/NftCard/NftCard";

const CollectionWrapper = ( props ) => {
    const className = `collection__wrapper${ props.class || "" }`;

    return (
        <div className={ className }>
            <ResponsiveImage collection={ props.singleCollection } class={ `${ className }--bg-image` }/>
            <NftCard key={ props.nft[0].id } image={ props.nft[0] }/>
            <SocialTag icon="#hash" class="social-tag--hash">{ props.singleCollection.slug }</SocialTag>
            <HeroImage collection={ props.singleCollection }/>
            <Title class={ `${ className }--title` }>{ props.singleCollection.name }</Title>
            <SocialTag class="social-tag">{ props.singleCollection.slug }</SocialTag>
            <NftCard key={ props.nft[1].id } image={ props.nft[1] }/>
        </div>
    );
};

export default CollectionWrapper;
