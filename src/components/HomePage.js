import { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <h1>Welcome to my store!</h1>
        <p>Find your next pair of shoes for every occasion.</p>
        <img src="https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shoes"></img>
        <p style={{ fontSize: "14px", color: "  rgba(121, 201, 121, 0.419)", marginTop: "100px" }}> &copy;Liat Pardo Grinbaum&copy;</p>
      </div>
    );
  }
}
export default HomePage;
