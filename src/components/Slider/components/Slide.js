import React, { useState } from 'react';
import SlideImage from "./SlideImage";
import Button from "../../Button/Button";
import Menu from "../../Menu/Menu";
import ModalWrapper from "../../../layouts/container/Modal/ModalWrapper";

export default function Slide( { data: { banner_image_url, name, description } } ) {
    const [isMenuOpen, setMenuOpen] = useState( false );

    const menuList = [
        {
            "title": "Explore NFT's",
            "link": "https://www.google.com/"
        },
        {
            "title": "Explore Categories",
            "link": "https://mail.google.com/mail/u/0/?ogbl#inbox"
        },
        {
            "title": "Explore Collections",
            "link": "https://www.youtube.com/"
        },
    ];

    const handleNavButtonClick = () => {
       console.log(153);
        // setMenuOpen( !isMenuOpen );
    }
    return (
        <div className="slide">
            <div className="slide__info">
                <h1 className="slide__title">{ name }</h1>
                <p className="slide__description">{ description }</p>
            </div>
            <div className="slide__buttons">
                <Button onClick={ handleNavButtonClick } class="button--nav slider__cta" icon="#chevron">
                    Create
                </Button>

                <ModalWrapper class={ isMenuOpen ? "btn-menu" : "" }
                              opacityClass={ isMenuOpen ? "open" : "" }
                              onClick={ handleNavButtonClick }
                              content={ <Menu menuList={ menuList }
                                              class={ isMenuOpen ? "open" : "" }/>
                              }/>

                <Button class="button--nav slider__cta--black" icon="#chevron">
                    Explore
                </Button>
            </div>
            <SlideImage src={ banner_image_url } alt={ description }/>
        </div>
    );
};
