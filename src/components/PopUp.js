import React from "react";
import alert from "../assets/iconerror.gif";

class PopUp extends React.Component {
  state = {
    newBrand: this.props.brand,
    newSize: this.props.size,
    newPrice: this.props.price,
    newImageUrl: this.props.image,
  };
  /* content for delete button when pressed */
  whenDeletePressed = () => {
    return (
      <React.Fragment>
        <img src={alert} style={{ height: "35px" }} />
        <h1>Are you sure you want to delete this item?</h1>
        <div className="actionButtons">
          <button
            className="btn btnYesNo"
            onClick={() => {
              this.props.onHandleDelete(this.props.id);
              this.props.toggleDeletePressed();
            }}>
            Yes
          </button>
          <button
            className="btn btnYesNo"
            onClick={() => {
              this.props.close();
              this.props.toggleDeletePressed();
            }}>
            no
          </button>
        </div>
      </React.Fragment>
    );
  };

  whenUpdatePressed = () => {
    return (
      //fill
      <React.Fragment>
        <h1> Please fill the following form:</h1>
        <input type="text" placeholder="" value={this.state.newBrand} onChange={(e) => this.setState({ newBrand: e.target.value })} />
        <input type="text" placeholder="" value={this.state.newSize} onChange={(e) => this.setState({ newSize: e.target.value })} />
        <input type="text" placeholder="" value={this.state.newPrice} onChange={(e) => this.setState({ newPrice: e.target.value })} />
        <input type="text" placeholder="" value={this.state.newImageUrl} onChange={(e) => this.setState({ newImageUrl: e.target.value })} />

        <div className="actionButtons">
          <button
            className="btn btnYesNo"
            onClick={() => {
              this.props.onHandleUpdate(this.state.newBrand, this.state.newSize, this.state.newPrice, this.state.newImageUrl, this.props.id);

              this.setState({ newBrand: "", newSize: "", newPrice: "", newImageUrl: "" });
              this.props.toggleUpdatePressed();
            }}>
            Save
          </button>
          <button
            className="btn btnYesNo"
            onClick={() => {
              this.props.close();
              this.props.toggleUpdatePressed();
            }}>
            Cancel
          </button>
        </div>
      </React.Fragment>
    );
  };
  render() {
    console.log(this.props.brand);
    return (
      <div className="popUp">
        <div className="popUpWindow">
          {this.props.isDeletePressed && this.whenDeletePressed()} {this.props.isUpdatePressed && this.whenUpdatePressed()}
        </div>
      </div>
    );
  }
}
export default PopUp;
