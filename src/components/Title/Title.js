import React from 'react';

const Title = props => {
    const className = props.class || "title";

    return (
        <h2 className={ className }>{ props.children }</h2>
    );
};

export default Title;
