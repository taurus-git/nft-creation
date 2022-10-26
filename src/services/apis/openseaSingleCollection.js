import axios from "axios";

export default axios.create({
    baseURL: 'https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&include_orders=false',
});
