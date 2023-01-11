import React, { Component } from "react";
import PropTypes from 'prop-types';

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";


export class App extends Component {
  state = {
    query: '',
    // page: 1,
  }

  handleSearch = (query) => {
    // console.log('query:', query);
    this.setState({ query});
    // this.setState({ page });//??
  }

  
  render() {
    const { query } = this.state;
    // const { query, page } = this.state;
    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
        
        <ImageGallery query={query}  />
        
      </>
    );
  }
  
};

App.propTypes = {
    query: PropTypes.string,
    handleSearch: PropTypes.func,
}
