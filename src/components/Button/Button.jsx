import React from "react";
import PropTypes from 'prop-types';
import { ButtonLoadMore, ButtonContainer } from './Button.styled';

const Button = ({ handleMoreImage }) => {
    return (
        <ButtonContainer>
            <ButtonLoadMore type='button' onClick={handleMoreImage}>
                Load more
            </ButtonLoadMore>
        </ButtonContainer>
        
    )
}

export default Button;

Button.propTypes = {
    handleMoreImage: PropTypes.func,
}