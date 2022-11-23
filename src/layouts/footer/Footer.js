import React from 'react';
import Container from "../container/Container/Container";
import Icon from "../../components/Icon/Icon";
import MenuWrapper from "./MenuWrapper";
import Menu from "./Menu";
import { generateKey } from "../../services/Helpers/helpers";

const Footer = () => {
    const privacyMenu = [
        {
            "title": "Privacy Policy",
            "link": "https://www.google.com/"
        },
        {
            "title": "Terms of Services",
            "link": "https://mail.google.com/mail/u/0/?ogbl#inbox"
        },
    ];

    const learnMenu = [
        {
            "title": "Create",
            "link": "https://www.google.com/"
        },
        {
            "title": "Collect",
            "link": "https://mail.google.com/mail/u/0/?ogbl#inbox"
        },
        {
            "title": "Sell",
            "link": "https://www.youtube.com/"
        },
    ];

    const companyMenu = [
        {
            "title": "Careers",
            "link": "https://www.google.com/"
        },
        {
            "title": "Help Center",
            "link": "https://mail.google.com/mail/u/0/?ogbl#inbox"
        },
        {
            "title": "Subscribe",
            "link": "https://www.youtube.com/"
        },
    ];

    const connectMenu = [
        {
            "title": "Twitter",
            "link": "https://www.google.com/"
        },
        {
            "title": "Instagram",
            "link": "https://mail.google.com/mail/u/0/?ogbl#inbox"
        },
        {
            "title": "Youtube",
            "link": "https://www.youtube.com/"
        },
    ];

    const menus = [
        {
            "legend": "Learn",
            "menu": learnMenu
        },
        {
            "legend": "Company",
            "menu": companyMenu
        },
        {
            "legend": "Connect",
            "menu": connectMenu
        }
    ];

    return (
        <footer className="footer-main">
            <Container>
                <div className="footer-main__policy-wrapper">
                    <div className="footer-main__logo">
                        <a href="/">
                            <Icon icon="#footer-logo" class="footer-main__logo--icon"/>
                        </a>
                    </div>
                    <MenuWrapper class="footer-main__policy">
                        <Menu menu={ privacyMenu } class="footer-main__policy--menu"/>
                    </MenuWrapper>
                </div>
                <div className="footer-main__menu-wrapper">
                    { menus.map( ( menu ) => (
                        <MenuWrapper key={ menu.legend } legend={ menu.legend } class="footer-main__menu-wrapper--menu">
                            <Menu key={ generateKey( menu.legend ) } menu={ menu.menu }
                                  class="footer-main__menu-wrapper--list"/>
                        </MenuWrapper>
                    ) ) }
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
