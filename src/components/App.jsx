import React, { Component } from "react";

import {getImages, PER_PAGE} from '../services/pixabayAPI';

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalPages: 0,
    images: [],
    isLoading: false,
  }

  handleSearch = (query) => {
    // console.log(query);
    this.setState({ query });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query) {
      this.setState({ isLoading: true });
      const { hits, total } = await getImages(query, page);
      this.setState({
        images: hits,
        totalPages: Math.floor(total / PER_PAGE),
        isLoading: false,
      })
    }
    if (page !== prevState.page) {
      this.setState({ isLoading: true });
      const { hits } = await getImages(query, page);
      this.setState( prevState => ({
        images: [...prevState.images, ...hits],
        isLoading: false,
      }))
    }
    // console.log(this.state);
  }
  
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };
  render() {
    const { images, isLoading, totalPages, page } = this.state;
    const isLoadMore = totalPages !== 0 && totalPages > page;
    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
        
        <ImageGallery images={images} />
        
        {isLoadMore && <Button handleMoreImage={this.loadMore} />}
        {/* {isLoading && } */}
      </>
    );
  }
  
};
