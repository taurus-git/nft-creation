import React, { useContext } from 'react';
import Slide from "./Slide";
import { SliderContext } from "../Slider";

export default function SlideList() {
    const { sliderNumber, collections } = useContext( SliderContext )

    return (
        <div
            className="slide-list"
            style={ { transform: `translateX(-${ sliderNumber - 10 }%)` } }
        >
            { collections.map( ( slide, index ) => (
                <Slide key={ index } data={ slide }/>
            ) ) }
        </div>
    );
};
