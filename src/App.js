import "./App.css";
import { Component } from "react";
// import style from "./components/styles.module.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    searchImg: "",
  };

  onSubmit = (data) => {
    this.setState({ searchImg: data });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchImg={this.state.searchImg} />
      </div>
    );
  }
}

export default App;
