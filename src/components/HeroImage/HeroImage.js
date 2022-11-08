import React from 'react';

const HeroImage = props => {
    const className = props.class || "hero-image";

    return (
        <div className={ className }>
            <img src={ props.collection.banner_image_url } alt={ props.collection.name }/>
        </div>
    );
};

export default HeroImage;
