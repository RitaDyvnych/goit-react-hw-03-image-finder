import { Component } from "react";
import style from "./styles.module.css";

export default class Button extends Component {
  handleClick() {
    console.log("object");
    // console.log(this.props.page);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick} className={style.Button}>
        Load more
      </button>
    );
  }
}
