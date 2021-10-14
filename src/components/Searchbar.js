import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./styles.module.css";

export default class Searchbar extends Component {
  state = {
    find: "",
  };

  handleChangeInput = (e) => {
    this.setState({
      find: e.target.value,
    });
  };

  render() {
    const { find } = this.state;
    return (
      <header className={style.Searchbar}>
        <form
          className={style.SearchForm}
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(find);
            this.setState({ find: "" });
          }}
        >
          <button type="submit" className={style.SearchForm__button}>
            <span className={style.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            className={style.SearchForm__input}
            type="text"
            value={find}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
