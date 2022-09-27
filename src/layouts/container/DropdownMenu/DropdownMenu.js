import React from 'react';

const DropdownMenu = (props) => {
    const handleClick = () => {
        props.onMenuClick();
    }

    return (
        <div className="menu__dropdown" onClick={handleClick}>
            {props.children}
            <div className={`menu__dropdown--bg-opacity ${props.isActive ? "active" : ""}`}></div>
        </div>
    );
};

export default DropdownMenu;

