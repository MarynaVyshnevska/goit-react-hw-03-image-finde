//Second variant
import { GalleryContainer } from './ImageGallery.styled';
import Loader from 'components/Loader';
import Button from 'components/Button';
import PropTypes from 'prop-types';


const ImageGallery = ({status, onClickLoadMore, isLoadMore, children}) => {
    console.log('Hi');
    return (
        <>
            <GalleryContainer>
                {children}
            </GalleryContainer>
            {status === 'pending' && <Loader />}

            {status === 'success' && isLoadMore && <Button handleLoadMoreImage={onClickLoadMore} />}
        </>
    )
}

    
export default ImageGallery;

ImageGallery.propTypes = {
    status: PropTypes.string.isRequired,
    onClickLoadMore: PropTypes.func.isRequired,
    
}

// First variant
// import React, {Component} from 'react';
// import { GalleryContainer } from './ImageGallery.styled';
// import ImageGalleryItem from 'components/ImageGalleryItem';
// import Loader from 'components/Loader';
// import Button from 'components/Button';
// import { getImages, PER_PAGE } from '../../services/pixabayAPI';



// import PropTypes from 'prop-types';
// // import { toast } from 'react-toastify';
// import { Notify } from 'notiflix/build/notiflix-notify-aio'


// export default class ImageGallery extends Component {
//     state = {
//         images: [],
//         total: 0,
//         error: null,
//         totalPages: 0,
//         isLoading: false,
//         page: 1, //** */
        
//     }
    
//     async componentDidUpdate(prevProps, prevState) {
//         // console.log('images:',this.state.images);
//         const { query} = this.props;
//         const { page } = this.state;
//         console.log('prevState.page', prevState.page);
//         console.log('this.state.page', page);

//         if (page !== prevState.page){
//             this.setState({ isLoading: true });
//             const { hits } = await getImages(query, page);
            
//             this.setState(prevState => ({
//                 images: [...prevState.images, ...hits],
//                 isLoading: false,
                
//             }));
//         }
//         if (query !== prevProps.query) {
            
//             this.setState({ isLoading: true, images: [], page: 1 });
//             // console.log('this.state.page', this.state);
//             const { hits, total } = await getImages(query, page);
//             // console.log('hi', total);
//             if (total === 0) {
//                 Notify.warning('Please, enter new search!');
//             }
//             this.setState({
//                 images: hits,
//                 total,
//                 isLoading: false,
//                 totalPages: Math.floor(total / PER_PAGE),
//             });

            
//         }
        
//     }


   
//     loadMore = () => {
//         this.setState(prevState => ({ page: prevState.page + 1 }))
//         console.log('hi, this is load more, page', this.state.page);
//     };

//     render() {
//         const { images, isLoading, totalPages, page } = this.state;
//         const isLoadMore = totalPages > page;
            
//         return (
//             <>
//                 <GalleryContainer>
//                     {images.map(({ id, largeImageURL, webformatURL, tags }) => (
//                         <ImageGalleryItem
//                             key={id}
//                             id={id}
//                             largeImageURL={largeImageURL}
//                             webformatURL={webformatURL}
//                             tags={tags}
//                         />
//                     ))}
                    
//                     </GalleryContainer>
//                 {isLoading && <Loader />}
//                 {isLoadMore && <Button handleMoreImage={this.loadMore} />}
//             </>
//         )
//     }
// }
    

   
// ImageGallery.propTypes = {
//     query: PropTypes.string,
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             largeImageURL: PropTypes.string.isRequired,
//             webformatURL: PropTypes.string.isRequired,
//             tags: PropTypes.string.isRequired,
//         })
//     )
// }