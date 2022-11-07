import React from 'react';
import Icon from "../Icon/Icon";

const SocialTag = props => {
    return (
        <span className={props.class}>
            <Icon class={`${props.class}--icon`} icon={props.icon}/>
            {props.children}
        </span>
    );
};

export default SocialTag;
