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

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState( false );
    const [isOpen, setOpen] = useState( false );

    const handleClick = () => {
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

    return (
        <Container>
            <header className="header">
                <figure className="header__logo">
                    <Icon icon="#header-logo" class="header__logo--icon"/>
                </figure>
                <Search/>
                <div className="buttons">
                    <ModalWrapper isOpen={ isMenuOpen } onClick={ handleClick }>
                        <Button class="button--nav" icon="#chevron">Explore</Button>
                        <Menu menuList={ menuList } class={ isMenuOpen ? "open" : "" }/>
                    </ModalWrapper>
                    <ModalWrapper isOpen={ isOpen } onClick={ handleModalClick }
                                  content={ <ModalContent
                                      text={ <h2 className="modal-content-heading">Connect your wallet to buy NFT</h2> }
                                      contentType='icons'
                                      content={ walletModalIcons }/> }>
                        <Button class="button--cta" onButtonPress={ navButtonHandler2 }>Connect Wallet</Button>
                    </ModalWrapper>
                </div>
            </header>
        </Container>
    );
}

export default Header;
