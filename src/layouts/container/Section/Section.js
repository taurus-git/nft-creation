import React from 'react';

const Section = props => {
    const className = `section__info ${ props.class || '' }`;

    return (
        <div className={ className }>
            { props.children }
        </div>
    );
};

export default Section;
