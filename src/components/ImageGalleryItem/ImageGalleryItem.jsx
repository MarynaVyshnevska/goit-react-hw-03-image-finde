import React, { Component } from 'react';

import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component{
    state = {
        id: '',
        smallImgUrl: '',
        bigImgUrl: '',
        // tag: ''
    }

    getBigUrl = (event) => {
        console.log(event.target.dataset.bigImg);
        // this.setState(({ bigImgUrl }) => ({
            
        // }))
    }
    render() {
        // const { id, smallImgUrl, bigImgUrl, tag } = this.setState;
        return (
            <>
                {this.props.images.map(image => (
                    <GalleryItem key={image.id}>
                        <GalleryItemImg
                            src={image.webformatURL}
                            alt={image.tags}
                            data-bigImg={image.largeImageURL}
                            loading="lazy" 
                            onClick={this.getBigUrl}    
                        />
                    </GalleryItem>
                ))}
            </>
            
        )
    }
}

// largeImageURL, tags, webformatURL, id
