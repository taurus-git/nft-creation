import React, { useState } from 'react';
import Container from "../container/Container/Container";
import DropdownMenu from "../container/DropdownMenu/DropdownMenu"
import Search from "./Search";
import Button from "../../components/Button/Button";
import { navButtonHandler, navButtonHandler2 } from "../../components/Button/ButtonsActions"
import Menu from "../../components/Menu/Menu";
import Icon from "../../components/Icon/Icon";
import "./Header.scss";

const Header = ( ) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }

    const menuList = [
        { "title" : "Explore NFT's",
          "link": "https://www.google.com/"
        },
        {  "title" : "Explore Categories",
            "link": "https://mail.google.com/mail/u/0/?ogbl#inbox"
        },
        {  "title" : "Explore Collections",
            "link": "https://www.youtube.com/"
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
                    <DropdownMenu isActive={isActive} onMenuClick={handleClick}>
                        <Button class="button--nav" value="Explore" icon="#chevron" onPress={navButtonHandler} />
                        <Menu menuList={menuList} class={isActive ? "active" : ""} />
                    </DropdownMenu>
                    <Button class="button--cta" value="Connect Wallet" onPress={navButtonHandler2}/>
                </div>
            </header>
        </Container>
    );
}

export default Header;
