import React, { useEffect, useState } from 'react';

export default function ResponsiveImage( props ) {
    const className = props.class || "";
    const [src, setSrc] = useState( props.collection.banner_image_url );

    const getImageSrcSet = ( set ) => {
        if ( src ) {
            return props.collection.banner_image_url.replace( "w=500", `w=${ set }` );
        }
    }

    useEffect( () => {
        setSrc( props.collection.banner_image_url );
    }, [props.collection.banner_image_url] )

    return (
        <picture className={ className }>
            <source srcSet={ `${ getImageSrcSet( 640 ) } 1x, ${ getImageSrcSet( 750 ) } 2x` }
                    media="(max-width: 600px)"/>
            <img srcSet={ `${ getImageSrcSet( 1080 ) } 1x, ${ getImageSrcSet( 2048 ) } 2x` }
                 alt={ props.collection.name }/>
        </picture>
    );
};
