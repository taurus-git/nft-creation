import React from 'react';
import Container from "../container/Container/Container";
import Search from "./Search";
import Button from "../../components/Button/Button";
import { navButtonHandler, navButtonHandler2 } from "../../components/Button/ButtonsActions"
import Menu from "../../components/Menu/Menu";
import Icon from "../../components/Icon/Icon";
import "./Header.scss";

const Header = ( ) => {
    return (
        <Container>
            <header className="header">
                <figure className="header__logo">
                    <Icon icon="#header-logo" class="header__logo--icon"/>
                </figure>
                <Search/>
                <div className="buttons">
                    <div className="menu__dropdown">
                        <Button class="button--nav" value="Explore" icon="#chevron" onPress={navButtonHandler}>
                            <Menu/>
                        </Button>
                    </div>
                    <Button class="button--cta" value="Connect Wallet" onPress={navButtonHandler2}/>
                </div>
            </header>
        </Container>
    );
}

export default Header;
