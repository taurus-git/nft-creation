import React from 'react';
import SlideImage from "./SlideImage";

export default function Slide( { data: { banner_image_url, name, description } } ) {

    return (
        <div className="slide">
            <div className="slide__info">
                <h1 className="slide__title">{name}</h1>
                <p className="slide__description">{description}</p>
            </div>
            <SlideImage src={ banner_image_url } alt={ description }/>
        </div>
    );
};
