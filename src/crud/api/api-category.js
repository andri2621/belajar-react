import axios from 'axios'
import apiURL from '../config/config-url'



const listCategory = async () => {
    try {
        let response = await axios.get(`${apiURL}/api/category/`)
        return await response.data
    }   catch(err){
        return await err.message
    }
}



export {listCategory}