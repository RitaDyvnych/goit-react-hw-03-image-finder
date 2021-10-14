import React, { Component } from "react";
import style from "./styles.module.css";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";
import Button from "./Button";
// import axios from "axios";
// import ImagesApiService from "./ApiService";

export default class ImageGallery extends Component {
  state = {
    imgArray: [],
    page: 1,
  };
  BASE_URL = "https://pixabay.com/api/";
  KEY = "23189460-aa79835af7cd31cf0c37fbc18";
  per_page = 12;

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImg !== this.props.searchImg) {
      const url = `${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.props.searchImg}&page=${this.state.page}&per_page=${this.per_page}&key=${this.KEY}`;
      return fetch(url)
        .then((response) => response.json())
        .then((result) => this.setState({ imgArray: result.hits }));
      // return axios.get(url).then((response) => response.json()).then(result=>this.setState({imgArray: result}));
    }
  }

  render() {
    return (
      <>
        <ul className={style.ImageGallery}>
          <ImageGalleryItem imgArray={this.state.imgArray} />
        </ul>
        {this.props.load && <Button />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchImg: PropTypes.string.isRequired,
};
