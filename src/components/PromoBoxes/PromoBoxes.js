import React from 'react';
import Box from "./Box";
import { generateKey } from "../../services/Helpers/helpers";

const PromoBoxes = props => {
    return (
        <section className="promo-boxes">
            { props.boxes.map( ( box ) => (
                <Box key={ generateKey( box.title ) } content={ box }/>
            ) ) }
        </section>
    );
};

export default PromoBoxes;
