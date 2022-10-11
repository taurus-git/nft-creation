import React, { useEffect, useState } from 'react';
import opensea from "../../services/apis/opensea";

const Slider = () => {
    const [listData, setListData] = useState([])

    useEffect( () => {

        const response = async() => {
            const openseaData = await opensea.get('collections?offset=0&limit=300');
            setListData(openseaData);
        }

        return () => {
            response()
        };
    }, [] );

    return (
        <>
            { console.log( listData ) }
        </>
    );
};

export default Slider;

