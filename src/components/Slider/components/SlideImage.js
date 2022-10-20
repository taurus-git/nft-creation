import React from 'react';

export default function SlideImage({src}) {
    //обычные устройства, медиа
    //640
    //750
    //1080
    //2048

    //ретина, медиа
    //750
    //1080
    //2048

    let getImageSrcSet = (set) => {
        return src.replace( "w=500", `w=${set}` );
    }


    return (
        <img
            srcSet={`${getImageSrcSet(640)} 1x, ${getImageSrcSet(750)} 2x`}
        />
    );
};
