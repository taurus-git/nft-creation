import React, { useState } from 'react';
import Container from "../container/Container/Container";
import ModalWrapper from "../container/Modal/ModalWrapper";
import ModalContent from "../container/Modal/ModalContent";
import Search from "./Search";
import Button from "../../components/Button/Button";
import { navButtonHandler2 } from "../../components/Button/ButtonsActions"
import Menu from "../../components/Menu/Menu";
import Icon from "../../components/Icon/Icon";
import "./Header.scss";
import { generateKey } from "../../services/GenerateKey/GenerateKey";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState( false );
    const [isOpen, setOpen] = useState( false );

    const handleNavButtonClick = () => {
        setMenuOpen( !isMenuOpen );
    }

    const handleModalClick = () => {
        setOpen( !isOpen );
    }

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

    const walletModalIcons = [
        {
            "icon": "#google",
            "link": "https://www.google.com/",
        },
        {
            "icon": "#mastercard",
            "link": "https://www.mastercard.com/europe/en/home.html",
        },
        {
            "icon": "#visa",
            "link": "https://usa.visa.com/",
        },
    ];

    const walletIcons = walletModalIcons.map( ( linkData ) => (
            <a href={ linkData.link }>
                <Icon
                    class="modal_icon"
                    key={ generateKey( linkData.icon ) }
                    icon={ linkData.icon }/>
            </a>
        )
    )

    return (
        <Container>
            <header className="header">
                <figure className="header__logo">
                    <Icon icon="#header-logo" class="header__logo--icon"/>
                </figure>
                <Search/>
                <div className="buttons">

                    <Button onClick={ handleNavButtonClick } class="button--nav" icon="#chevron">Explore</Button>

                    <ModalWrapper class={isMenuOpen ? "btn-menu" : ""}
                                  opacityClass={isMenuOpen ? "open" : ""}
                                  onClick={ handleNavButtonClick }
                                  content={ <Menu menuList={ menuList }
                                                  class={ isMenuOpen ? "open" : "" }/>
                    }/>

                    <ModalWrapper opacityClass={isOpen ? "open" : ""}
                                  onClick={ handleModalClick }
                                  content={ <Button class="button--cta">
                                      Connect Wallet</Button> }>
                        <ModalContent content={ walletIcons }>
                            <h2 className="modal-content-heading">Connect your wallet to buy NFT</h2>
                        </ModalContent>
                    </ModalWrapper>

                </div>
            </header>
        </Container>
    );
}

export default Header;
