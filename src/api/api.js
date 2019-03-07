import axios from "axios";

const getData = () => {
    return axios.get("https://api.punkapi.com/v2/beers")
                .catch(error => console.log(error));
}

export default getData;