import "./App.css";
import { Component } from "react";
// import style from "./components/styles.module.css";
import Searchbar from "./components/Searchbar";

class App extends Component {
  states = {
    searchImg: "",
  };

  onSubmit = (data) => {
    this.setState({ searchImg: data });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
