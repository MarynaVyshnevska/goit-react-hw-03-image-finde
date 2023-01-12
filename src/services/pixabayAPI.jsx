import axios from "axios";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

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
        // console.log(response.data.total);
        if (response.data.total === 0) {
                       
            toast.error('🦄 Please, enter new search!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // toast.error('🦄 Please, enter new search!', {
            //     position: "top-left",
            // });
        }
        return response.data;
        
    } catch (error) {
        console.log(error.message);
        // throw new Error ('Something goes wrong');
    }
    
}
getImages.propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
}

