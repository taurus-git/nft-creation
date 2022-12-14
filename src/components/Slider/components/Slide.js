import React, { useState } from 'react';
import SlideImage from "./SlideImage";
import Button from "../../Button/Button";

export default function Slide( { data: { banner_image_url, name, description } } ) {
    const [isMenuOpen, setMenuOpen] = useState( false );

    const menuList = [
        {
            "title": "Explore NFT's",
            "link": "https://www.google.com/"
        },
        {
            "title": "Explore Section",
            "link": "https://mail.google.com/mail/u/0/?ogbl#inbox"
        },
        {
            "title": "Explore Collections",
            "link": "https://www.youtube.com/"
        },
    ];

    const handleNavButtonClick = () => {
        console.log( 'clicked' ); //Todo: add a menu on click
        setMenuOpen( !isMenuOpen );
    }

    return (
        <div className="slide">
            <div className="slide__info">
                <h1 className="slide__title">{ name }</h1>
                <p className="slide__description">{ description }</p>
            </div>
            <div className="slide__buttons">
                <Button class="button--nav slider__cta" icon="#chevron">
                    Create
                </Button>

                <Button class="button--nav slider__cta--black" icon="#chevron">
                    Explore
                </Button>
            </div>
            <SlideImage src={ banner_image_url } alt={ description }/>
        </div>
    );
};
