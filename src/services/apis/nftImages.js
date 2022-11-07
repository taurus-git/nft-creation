import axios from "axios";

export const getSingleCollection = ( term = "art", per_page = 3 ) => {
    return axios.get( 'https://api.unsplash.com/search/photos', {
        params: {
            query: term,
            per_page: per_page,
            orientation: 'portrait',
        },
        headers: {
            Authorization: 'Client-ID H5FWvvpIGyjDHTAKw9i68vvYwRwr_ZCASZVB4_TRbfI'
        }
    } );
};
