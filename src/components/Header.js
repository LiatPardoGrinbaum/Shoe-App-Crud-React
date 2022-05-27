import { Component } from "react";
import { Link } from "react-router-dom";

class ShoesPage extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo">Shoes For Life</div>
        <div className="links">
          <div>
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div>
            <Link to="/ShoesPage" className="link">
              Shoes
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default ShoesPage;
