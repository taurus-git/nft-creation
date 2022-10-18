import React, { useContext } from 'react';
import { SliderContext } from "../../Slider";

export default function Dot( { number } ) {
    const { goToSlide, sliderNumber } = useContext( SliderContext )

    return (
        <div
            className={ `dot ${ sliderNumber === number ? "selected" : "" }` }
            onClick={ () => goToSlide( number ) }
        />
    );
};
