import React from 'react';
import SingleCardCategory from "../../../components/SingleCardCategory/SingleCardCategory";
import { generateKey } from "../../../services/GenerateKey/GenerateKey";

const CardCategories = () => {
    const categories = [
        "Arts",
        "Collectibles",
        "Photography",
        "Virtual Worlds",
        "Music",
        "Sports",
        "Trading Cards",
        "Utility",
    ];

    return (
        <div className="card-categories">
            { categories.map( ( name ) =>
                <SingleCardCategory key={ generateKey( name ) } name={ name }/>
            ) }
        </div>
    );
};

export default CardCategories;
