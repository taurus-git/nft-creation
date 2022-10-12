import React, { useEffect, useState } from 'react';
import { getCollections } from "../../services/apis/GetCollections";

const Slider = () => {
    const [collections, setCollections] = useState( [] );

    useEffect( () => {
        const loadData = async  () => {
            const openseaCollections = await getCollections()
            setCollections(openseaCollections);
        };
        loadData();
    }, [] );

    return (
        <>
            { console.log(collections) }
        </>
    );
};

export default Slider;

