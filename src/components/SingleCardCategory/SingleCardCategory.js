import React, { useState, useEffect } from 'react';
import { getSingleCollection } from "../../services/apis/nftImages";
import NftCard from "../NftCard/NftCard";

const SingleCardCategory = ( props ) => {
    const [nftImages, setNftImages] = useState( [] );

    useEffect( () => {
        const getImage = async term => {
            const images = await getSingleCollection( term );
            setNftImages( images.data.results );
        }

        getImage( props.name );

    }, [] );

    return (
        <div className="single-card-category">
            <div className="single-card-category--images">
                { nftImages.map( image => <NftCard key={ image.id } image={ image }/> ) }
            </div>
            <h4>{ props.name }</h4>
        </div>
    );
};

export default SingleCardCategory;
