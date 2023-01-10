import React, {Component} from 'react';
import { GalleryContainer } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { getImages, PER_PAGE } from '../../services/pixabayAPI';
import { toast } from 'react-toastify';


import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
    state = {
        images: [],
        page: 1,
        total: 0,
        error: null,
        status: 'idle',
        totalPages: 0,
    }
    
    componentDidUpdate(prevProps, prevState) {
        // console.log('images:',this.state.images);
        if (this.props.query !== prevProps.query) {
            this.setState({ status: 'pending', images: [] });
            this.getImagesArray(this.props.query, this.state.page);
        } else if (this.state.page !== prevState.page){
            this.setState({ status: 'pending' });
            this.getImagesArray(this.props.query, this.state.page);
        }
    }


    getImagesArray = () => {
        const { query } = this.props;
        const { page } = this.state;

        try {
            // const { hits, total } = getImages(query, page);
            const imagesArray = getImages(query, page);
            imagesArray.then(data => {
                const { hits, total } = data;
                if (!hits.length) {
                    toast.error('🦄 Please, enter new search!', {
                        position: "top-left",
                    });

                    return this.setState({ status: 'idle' })
                }
                const newImages = hits.map(({ id, tags, webformatURL, largeImageURL }) =>
                    ({ id, tags, webformatURL, largeImageURL, }));
                
                this.setState(prevState => ({
                    images: [...prevState.images, ...newImages],
                    total,
                    status: 'resolved',
                    totalPages: Math.floor(total / PER_PAGE),
                }));
                // console.log(this.state.images);
            });
            
            
        } catch (error) {
            this.setState(prevState => ({
                error,
                total: 0,
                status: 'rejected',
            }))
        }
    }

    loadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }))
        console.log('hi');
    };

    render() {
        const { images, status, totalPages, page  } = this.state;
        const isLoadMore = totalPages > page; 
        // console.log(this.state);
        

        if (status === 'pending') {
            return (
                <Loader/>
                // <div>Крутим...</div>
            )
        }
        if (status === 'rejected') {
            return (
                <p>Oops... Try again</p>
                // <h2>{error.message}</h2>
            )
        }
        if (status === 'resolved') {
             
            return (
                <GalleryContainer>
                    {images.map(({ id, largeImageURL, webformatURL, tags }) => (
                        <ImageGalleryItem
                            key={id}
                            id={id}
                            largeImageURL={largeImageURL}
                            webformatURL={webformatURL}
                            tags={tags}
                        />
                    ))}
                    {isLoadMore && <Button handleMoreImage={this.loadMore}/>}
                </GalleryContainer>
            )
        }
    }
}

// images: [],
//   
ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
    
    

}