import React from 'react';
import SlideImage from "./SlideImage";

export default function Slide( { data: { banner_image_url, description } } ) {

    return (
        <div className="slide">
            <SlideImage src={ banner_image_url } alt={ description }/>
        </div>
    );
};
