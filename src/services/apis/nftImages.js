import axios from "axios";

export const getSingleCollection = ( term ) => {
    return axios.get( 'https://api.unsplash.com/search/photos', {
        params: {
            query: term,
            per_page: 3,
            orientation: 'portrait',
        },
        headers: {
            Authorization: 'Client-ID H5FWvvpIGyjDHTAKw9i68vvYwRwr_ZCASZVB4_TRbfI'
        }
    } );
};
