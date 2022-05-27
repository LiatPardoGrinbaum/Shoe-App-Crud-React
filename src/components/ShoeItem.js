import { Component } from "react";

class ShoeItem extends Component {
  render() {
    console.log(this.props.brand);
    return (
      <div className="item-card">
        <div className="description-wrap">
          <p className="title">{this.props.brand}</p>
          <p className="title">
            Size: <span className="description">{this.props.size}</span>
          </p>
          <p className="title">
            Price: <span className="description">{this.props.price} &#8362;</span>
          </p>
        </div>

        <div className="image">
          <img src={this.props.image} />
        </div>
      </div>
    );
  }
}
export default ShoeItem;
