import React from 'react';
import SlideImage from "./SlideImage";
import Button from "../../Button/Button";

export default function Slide( { data: { banner_image_url, name, description } } ) {

    return (
        <div className="slide">
            <div className="slide__info">
                <h1 className="slide__title">{ name }</h1>
                <p className="slide__description">{ description }</p>
            </div>
            <div className="slide__buttons">
                <Button class="slide__buttons-cta">
                    Create
                </Button>
                <Button class="slide__buttons-cta">
                    Explore
                </Button>
            </div>
            <SlideImage src={ banner_image_url } alt={ description }/>
        </div>
    );
};
