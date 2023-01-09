import React from 'react';
import { GalleryContainer } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ ...images }) => {
    return (
        <GalleryContainer>
            <ImageGalleryItem {...images} />
        </GalleryContainer>
    )
}

export default ImageGallery;