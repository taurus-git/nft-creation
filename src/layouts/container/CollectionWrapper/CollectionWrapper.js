import React from 'react';
import ResponsiveImage from "./components/ResponsiveImage/ResponsiveImage";

const CollectionWrapper = ( props ) => {
    const className = `collection__wrapper${ props.class || "" }`;

    return (
        <div className={ className }>
            <ResponsiveImage collection={ props.singleCollection } class={ `${ className }--bg-image` }/>
        </div>
    );
};

export default CollectionWrapper;
