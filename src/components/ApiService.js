import React, { Component } from "react";

export default class ImagesApiService extends Component {
  state = {
    searchQuery: "",
    page: 1,
  };

  // incrementPage() {
  //     this.state.page += 1;
  // }
  // resetPage() {
  //    this.state.page = 1;
  // }
  // get query() {
  //     return this.state.searchQuery;
  // }

  // set query(newQuery) {
  //     this.searchQuery = newQuery;
  // }

  fetchImages() {
    const BASE_URL = "https://pixabay.com/api/";
    const KEY = "23189460-aa79835af7cd31cf0c37fbc18";
    const per_page = 12;
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.state.searchQuery}&page=${this.state.page}&per_page=${per_page}&key=${KEY}`;
    return fetch(url).then((response) => response.json());
  }

  render() {
    return <div></div>;
  }
}
