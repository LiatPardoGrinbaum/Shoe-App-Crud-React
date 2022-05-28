import { Component } from "react";
import HomePage from "./components/HomePage";
import ShoesPage from "./components/ShoesPage";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";

import "./App.css";

class App extends Component {
  state = {
    isPop: false,
  };
  isPopped = (bool) => {
    this.setState({ isPop: bool });
  };
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />

          <Route path="/" exact component={HomePage} />
          <Route path="/ShoesPage" exact component={ShoesPage} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

/*  style={this.state.isPop ? { overflowY: "hidden" } : { overflowY: "scroll" }} */

/* isPopped={this.isPopped} */
