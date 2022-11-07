import React, { useEffect, useState } from 'react';

const HeroImage = props => {
    const [src, setSrc] = useState( props.collection.banner_image_url );
    const [name, setName] = useState( props.collection.name );

    const className = props.class || "hero-image";

    useEffect(() => {
        setSrc(props.collection.banner_image_url);
        setName(props.collection.name);
    }, []);

    return (
        <div className={ className }>
            <img src={ src } alt={ name }/>
        </div>
    );
};

export default HeroImage;
