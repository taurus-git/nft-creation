import opensea from "./opensea";

export const getCollections = async () => {
    const openseaData = await opensea.get( 'collections?offset=0&limit=100' );

    const collections = openseaData.data.collections.filter( collection => {
        if ( collection.banner_image_url !== null ) {
            return collection.banner_image_url
        }
    } )
    return collections;
};
