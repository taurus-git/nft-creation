import opensea from "./openseaCollections";

export const apisFunctions = async ( limit= 100 ) => {
    const openseaData = await opensea.get( `collections?offset=0&limit=${limit}` );
    return  openseaData.data.collections;
};
