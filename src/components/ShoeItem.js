import { Component } from "react";
import PopUp from "./PopUp";

class ShoeItem extends Component {
  state = {
    isPopOpen: false,
    isDeletePressed: false,
    isUpdatePressed: false,
  };
  togglePopUp = () => {
    this.setState((prev) => {
      return { isPopOpen: !prev.isPopOpen };
    });
  };
  toggleDeletePressed = () => {
    this.setState((prev) => {
      return { isDeletePressed: !prev.isDeletePressed };
    });
  };
  toggleUpdatePressed = () => {
    this.setState((prev) => {
      return { isUpdatePressed: !prev.isUpdatePressed };
    });
  };
  render() {
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

          <button
            className="btn"
            onClick={() => {
              this.toggleDeletePressed();
              this.togglePopUp();
            }}>
            Delete
          </button>
          <button
            className="btn"
            onClick={() => {
              this.toggleUpdatePressed();
              this.togglePopUp();
            }}>
            Update
          </button>

          {/*   <img src={close} /> */}
        </div>

        <div className="image">
          <img src={this.props.image} alt="shoes" />
        </div>
        {this.state.isPopOpen && (
          <PopUp
            close={this.togglePopUp}
            toggleDeletePressed={this.toggleDeletePressed}
            isDeletePressed={this.state.isDeletePressed}
            toggleUpdatePressed={this.toggleUpdatePressed}
            onHandleDelete={this.props.onHandleDelete}
            onHandleUpdate={this.props.onHandleUpdate}
            isUpdatePressed={this.state.isUpdatePressed}
            id={this.props.id}
            brand={this.props.brand}
            size={this.props.size}
            price={this.props.price}
            image={this.props.image}
            checkIfNumber={this.props.checkIfNumber}></PopUp>
        )}
      </div>
    );
  }
}
export default ShoeItem;
