import React from 'react';
import Icon from "../../Icon/Icon";

const SectionHeader = props => {
    return (
        <>
            { props.icon && <Icon icon={ props.icon } class="section__icon"/> }
            { props.title && <p className="section__title">{ props.title }</p> }
        </>
    );
};

export default SectionHeader;
