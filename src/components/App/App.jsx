import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';

import { fetchImages } from './../FetchAPI/FetchAPI';

export default class App extends Component {
  state = {
    gallery: [],
    searchString: '',
    page: 1,
    totalPage: 0,
    modalItem: null,
    isHaveLoadMore: false,
    isLoading: false,
  };
  handleFormSubmit = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      images: [],
      page: 1,
      showErrorMessage: false,
    });
  };
  render() {
    const { images, showModal, showLoader, showErrorMessage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}
