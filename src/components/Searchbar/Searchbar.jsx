import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { SearchbarForm, SearchForm, SearchInput } from './Searchbar.styled';
import { SlEyeglass } from "react-icons/sl";
// import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

const initialValues ={
    query: '',
   
}

export default class Searchbar extends Component {

    state = {
        query: '',
    };

    // isChangeQuery = event => {
    //     this.setState({query: event.currentTarget.value.toLowerCase().trim()})
    // }
    // handleSubmit = event => {
    //     event.preventDefault();
    //     const { query } = this.setState;
    //     if (!query.length) {
    //         toast.warning('Enter new search, please')
    //         return
    //     }
    //     this.props.onSearch(query);
    //     this.setState({ query: '' });
    //     // resetForm();
    // }
    handleSubmit = (values, actions) => {
        this.props.onSearch(values['query'].toLowerCase());
        this.setState({ query: '' });
        actions.resetForm();
    }

    render() {
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.handleSubmit}
            >
                <SearchbarForm>
                    <SearchForm>
                        <button type="submit" >
                            <span>Search </span><SlEyeglass size={20} />
                        </button>

                        <SearchInput
                        type="text"
                        name="query"    
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        />
                        <ErrorMessage name="query" component="div"/>
                    </SearchForm>
                </SearchbarForm> 
            </Formik>
               
        )
    }
}

Searchbar.propTypes = {
    query: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
}