import { Component } from "react";
import style from "./styles.module.css";

export default class Button extends Component {
  render() {
    return (
      <button type="button" className={style.Button}>
        Load more
      </button>
    );
  }
}
