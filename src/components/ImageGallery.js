import { Component } from "react";
import style from "./styles.module.css";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";
import ImagesApiService from "../apiService/ApiService";
import Loader from "react-loader-spinner";

const newImagesApiService = new ImagesApiService();

export default class ImageGallery extends Component {
  state = {
    imgArray: [],
    page: 1,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImg !== this.props.searchImg) {
      this.setState({ status: "pending" });
      newImagesApiService.resetPage();
      newImagesApiService.query = this.props.searchImg;
      newImagesApiService
        .searchImages()
        .then((data) => {
          if (data.hits.length > 0) {
            this.setState({
              imgArray: data.hits,
              page: newImagesApiService.pages,
              status: "success",
            });
          } else {
            this.setState({ status: "error" });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ status: "error" });
        });
    }
  }

  handleClick = () => {
    newImagesApiService.pages = 1;
    newImagesApiService
      .searchImages()
      .then((data) => {
        this.setState((prev) => ({
          imgArray: [...prev.imgArray, ...data.hits],
          page: newImagesApiService.pages,
          status: "success",
        }));
      })
      .catch((error) => {
        console.log(error);
        this.setState({ status: "error" });
      });
    setTimeout(() => this.props.scroll(), 1000);
  };

  render() {
    const { imgArray } = this.state;

    if (this.state.status === "idle") {
      return <p className={style.text}>Hello! Type some searching query</p>;
    }
    if (this.state.status === "pending") {
      return (
        <Loader
          type="Circles"
          className={style.loading}
          color="#00BFFF"
          height={100}
          width={100}
          timeout={7000} //3 secs
        />
      );
    }
    if (this.state.status === "success") {
      return (
        <>
          <ul className={style.ImageGallery}>
            <ImageGalleryItem imgArray={imgArray} />
          </ul>
          <button
            type="button"
            onClick={this.handleClick}
            className={style.Button}
          >
            Load more
          </button>
        </>
      );
    }
    if (this.state.status === "error") {
      return <p className={style.text}>Ooops! Something went wrong</p>;
    }
  }
}

ImageGallery.propTypes = {
  searchImg: PropTypes.string.isRequired,
  scroll: PropTypes.func.isRequired,
};
