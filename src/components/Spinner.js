import { Component } from "react";
import spinner from "../assets/spinner.png";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <img src={spinner} alt="" className="spinner" />
      </div>
    );
  }
}
export default Spinner;
