import "./App.css";
import { Component } from "react";
// import style from "./components/styles.module.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
// import Button from "./components/Button";

class App extends Component {
  state = {
    searchImg: "",
    loading: false,
  };

  onSubmit = (data) => {
    this.setState({ searchImg: data });
    setTimeout(() => this.onPageScroll(), 1000);
    setTimeout(() => this.setState({ loading: true }), 1000);
  };

  onPageScroll() {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          searchImg={this.state.searchImg}
          load={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
