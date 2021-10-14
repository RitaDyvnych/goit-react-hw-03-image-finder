import { Component } from "react";
import style from "./styles.module.css";

export default class Button extends Component {
  handleSubmit() {}

  render() {
    return (
      <button
        type="button"
        onSubmit={this.handleSubmit}
        className={style.Button}
      >
        Load more
      </button>
    );
  }
}
