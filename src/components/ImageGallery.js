import React, { Component } from "react";
import style from "./styles.module.css";

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className={style.ImageGallery}>
        <p>{this.props.searchImg}</p>
        {/* // <!-- Набор <li> с изображениями --> */}
      </ul>
    );
  }
}
