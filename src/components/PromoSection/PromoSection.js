import React from 'react';

const PromoSection = props => {
    return (
        <section className="promo-section">
            <h2 className="promo-section__title">{ props.children }</h2>
            <p className="promo-section__subtitle">{ props.subtitle }</p>
        </section>
    );
};

export default PromoSection;
