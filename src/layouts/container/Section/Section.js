import React from 'react';

const Section = props => {
    return (
        <div className="section__info">
            { props.children }
        </div>
    );
};

export default Section;
