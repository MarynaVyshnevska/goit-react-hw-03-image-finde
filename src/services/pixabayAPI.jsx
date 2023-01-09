import axios from "axios";

const URL = 'https://pixabay.com/api/?';
const PIXABAY_KEY = '31212742-df383ab72ff5d16a82f89e026';
const IMAGE_TYPE = 'photo';
const SAFESEARCH = 'true';
const ORDER = 'latest';
export const PER_PAGE = 12;

export const getImages = async (query, page) => {
    try {
        const params = new URLSearchParams({
            key: PIXABAY_KEY,
            image_type: IMAGE_TYPE,
            safesearch: SAFESEARCH,
            order: ORDER,
            per_page: PER_PAGE,
            q: query,
            page: page,
            
        })

        const response = await axios.get(`${URL}${params}`);
        
        if (!response) {
            throw new Error ('Sorry, we have not same content')
        }
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
    
}


