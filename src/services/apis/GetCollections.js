import opensea from "./openseaCollections";
import collection from "./openseaSingleCollection";

export const getCollections = async ( limit= 100 ) => {
    const openseaData = await opensea.get( `collections?offset=0&limit=${limit}` );
    return  openseaData.data.collections;
};

export const getSingleCollection = async () => {
    const openseaData = await collection.get();
    return openseaData;
};
