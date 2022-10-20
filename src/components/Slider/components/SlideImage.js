import React from 'react';

export default function SlideImage({src}) {
    const getImageSrcSet = (set) => {
        return src.replace( "w=500", `w=${set}` );
    }

    return (
        <picture>
            <source srcSet={`${getImageSrcSet(640)} 1x, ${getImageSrcSet(750)} 2x`}
                    media="(max-width: 600px)" />
            <img srcSet={`${getImageSrcSet(1080)} 1x, ${getImageSrcSet(2048)} 2x`} />
        </picture>
    );
};
