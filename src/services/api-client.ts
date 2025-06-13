import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{ 
        key:'cefac0d41e3e4e40aea0a00f6b3c76cb'
    }
})