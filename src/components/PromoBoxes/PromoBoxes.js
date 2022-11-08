import React from 'react';
import Box from "./Box";

const PromoBoxes = props => {
    return (
        <section className="promo-boxes">
            { props.boxes.map( ( box ) => (
                <Box content={ box }/>
            ) ) }
        </section>
    );
};

export default PromoBoxes;
