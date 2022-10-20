import React, { createContext, useEffect, useState } from 'react';
import { getCollections } from "../../services/apis/GetCollections";

import Arrows from "./components/controls/Arrows";
import Dots from "./components/controls/Dots";

import SlideList from "./components/SlideList";

export const SliderContext = createContext();

const Slider = ( { width, height, autoPlay, autoPlayTime } ) => {
    const [collections, setCollections] = useState( [] );
    const [slide, setSlide] = useState( 0 );

    useEffect( () => {
        const loadData = async () => {
            const openseaCollections = await getCollections( 50 );

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

export default Slider;

