import axios from "axios";

export const getSingleCollection = (term) => {
    return  axios.get( 'https://api.unsplash.com/search/photos', {
        params: {
            query: term,
            per_page: 3,
            orientation: 'portrait',
        },
        headers: {
            //Authorization: 'Client-ID H5FWvvpIGyjDHTAKw9i68vvYwRwr_ZCASZVB4_TRbfI'
            Authorization: 'Client-ID cba67c10dbb08761fe554aecb321a37b4f77029e49f248b72de0532199a2fc18'
        }
    } );
};
