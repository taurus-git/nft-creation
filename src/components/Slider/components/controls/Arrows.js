import React, { useContext } from 'react';
import { SliderContext } from "../../Slider";
import Icon from "../../../Icon/Icon";

export default function Arrows() {
    const { changeSlide } = useContext( SliderContext );

    return (
        <div className="arrows">
            <div className="direction-left" onClick={ () => changeSlide( -1 ) }>
                <Icon icon="#chevron" class="arrow left"/>
            </div>
            <div className="direction-right" onClick={ () => changeSlide( 1 ) }>
                <Icon icon="#chevron" class="arrow right"/>
            </div>
        </div>
    );
};
