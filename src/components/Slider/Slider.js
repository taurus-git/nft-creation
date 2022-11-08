import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";

import Arrows from "./components/controls/Arrows";
import Dots from "./components/controls/Dots";
import SlideList from "./components/SlideList";

export const SliderContext = createContext();

const Slider = ( { collections, width, height, autoPlay, autoPlayTime } ) => {
    const [slide, setSlide] = useState( 0 );
    const [touchPosition, setTouchPosition] = useState( null );

    const changeSlide = ( direction = 1 ) => {
        let slideNumber = 0;

        if ( slide + direction < 0 ) {
            slideNumber = collections.length - 1;
        } else {
            slideNumber = (slide + direction) % collections.length;
        }

        setSlide( slideNumber );
    };

    const goToSlide = ( number ) => {
        setSlide( number % collections.length );
    }

    const handleTouchStart = ( e ) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition( touchDown );
    }

    const handleTouchMove = ( e ) => {
        if ( touchPosition === null ) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if ( direction > 10 ) {
            changeSlide( 1 );
        }

        if ( direction < -10 ) {
            changeSlide( -1 );
        }

        setTouchPosition( null );
    }

    useEffect( () => {
        if ( !autoPlay ) return;

        const interval = setInterval( () => {
            changeSlide( 1 )
        }, autoPlayTime );

        return () => {
            clearInterval( interval );
        };
    }, [collections.length, slide] )

    return (
        <div style={ { width, height } }
             className="slider"
             onTouchStart={ handleTouchStart }
             onTouchMove={ handleTouchMove }
        >
            <SliderContext.Provider
                value={ {
                    goToSlide,
                    changeSlide,
                    slidesCount: collections.length,
                    sliderNumber: slide,
                    collections
                } }
            >
                <Arrows/>
                <SlideList/>
                <Dots/>
            </SliderContext.Provider>

        </div>
    );
};

Slider.propTypes = {
    collections: PropTypes.array,
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
}

Slider.defaultProps = {
    collections: [],
    autoPlay: false,
    autoPlayTime: 5000,
    width: "100%",
    height: "100%",
}

export default Slider;

