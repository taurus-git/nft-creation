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
                        <Menu class={isActive ? "active" : ""} />
                    </DropdownMenu>
                    <Button class="button--cta" value="Connect Wallet" onPress={navButtonHandler2}/>
                </div>
            </header>
        </Container>
    );
}

export default Header;
