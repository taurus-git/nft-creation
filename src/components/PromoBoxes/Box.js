import React from 'react';

const Box = ( { content: { title, description } } ) => {
    return (
        <div className="promo-boxes__box">
            <h4 className="promo-boxes__title">{ title }</h4>
            <p className="promo-boxes__description">{ description }</p>
        </div>
    );
};

export default Box;
