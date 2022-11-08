import React, { useState, useRef, useEffect } from 'react';
import Container from "../container/Container/Container";
import ModalWrapper from "../container/Modal/ModalWrapper";
import ModalContent from "../container/Modal/ModalContent";
import Search from "./Search";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";
import Icon from "../../components/Icon/Icon";
import { generateKey } from "../../services/Helpers/helpers";
import "./Header.scss";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState( false );
    const [isOpen, setOpen] = useState( false );
    const navButton = useRef(null);

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
            "title": "Explore Section",
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
            <a key={ generateKey( linkData.icon ) } href={ linkData.link }>
                <Icon
                    class="modal_icon"
                    icon={ linkData.icon }/>
            </a>
        )
    )

    useEffect(() => {
        function handleClickOutside(event) {

            if (navButton.current && !navButton.current.contains(event.target)) {
                setMenuOpen( false );
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navButton]);

    return (
        <header className="header">
            <Container class="header">
                <a href="/">
                    <figure className="header__logo">
                        <Icon icon="#header-logo" class="header__logo--icon"/>
                    </figure>
                </a>
                <Search/>
                <div className="buttons">
                    <Button innerRef={navButton} onClick={ handleNavButtonClick } class="button--nav" icon="#chevron">Explore</Button>
                    <Menu innerRef={navButton} menuList={ menuList } class={ isMenuOpen ? "open" : "" }/>

                    <Button class="button--cta" onClick={ handleModalClick }>Connect Wallet</Button>
                    <ModalWrapper opacityClass={ isOpen ? "open" : "" } onClick={ handleModalClick }>
                        <ModalContent content={ walletIcons }>
                            <h2 className="modal-content-heading">Connect your wallet to buy NFT</h2>
                        </ModalContent>
                    </ModalWrapper>

                </div>
            </Container>
        </header>
    );
}

export default Header;
