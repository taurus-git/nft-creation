import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";

import { getCollections } from "../../services/apis/GetCollections";

import Arrows from "./components/controls/Arrows";
import Dots from "./components/controls/Dots";
import SlideList from "./components/SlideList";

export const SliderContext = createContext();

const Slider = ( { width, height, autoPlay, autoPlayTime } ) => {
    const [collections, setCollections] = useState( [] );
    const [slide, setSlide] = useState( 0 );
    const [touchPosition, setTouchPosition] = useState( null );

    const [col, setCol] = useState([]);

    useEffect( () => {
        const loadData = async () => {
            const openseaCollections = await getCollections( 50 );

            console.log(openseaCollections);

            const collections = openseaCollections.filter( collection => {
                if ( collection.banner_image_url !== null ) {
                    return collection.banner_image_url
                }
            } );

            setCollections( collections );
        };
        loadData();
    }, [] );

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
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
        >

            { console.log( collections ) }



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
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
}

Slider.defaultProps = {
    autoPlay: false,
    autoPlayTime: 5000,
    width: "100%",
    height: "100%",
}

export default Slider;

