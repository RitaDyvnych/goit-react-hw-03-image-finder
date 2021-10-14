import "./App.css";
import { Component } from "react";
// import style from "./components/styles.module.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";

class App extends Component {
  state = {
    searchImg: "",
    loading: false,
  };

  onSubmit = (data) => {
    this.setState({ searchImg: data, loading: true });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchImg={this.state.searchImg} />
        {this.state.loading && <Button />}
      </div>
    );
  }
}

export default App;
