import React from "react";
import alert from "../assets/iconerror.gif";

class PopUp extends React.Component {
  state = {
    newBrand: this.props.brand,
    newSize: this.props.size,
    newPrice: this.props.price,
    newImageUrl: this.props.image,
    isUpdateValid: "",
  };
  /* content for delete button when pressed */
  whenDeletePressed = () => {
    return (
      <React.Fragment>
        <img src={alert} style={{ height: "35px" }} alt="" />
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
        <div className="update-inputs">
          <input type="text" placeholder="" value={this.state.newBrand} onChange={(e) => this.setState({ newBrand: e.target.value })} className="add-inputs" />
          <input type="text" placeholder="" value={this.state.newSize} onChange={(e) => this.setState({ newSize: e.target.value })} className="add-inputs" />
          <input type="text" placeholder="" value={this.state.newPrice} onChange={(e) => this.setState({ newPrice: e.target.value })} className="add-inputs" />
          <input type="text" placeholder="" value={this.state.newImageUrl} onChange={(e) => this.setState({ newImageUrl: e.target.value })} className="add-inputs" />
        </div>

        <div className="actionButtons">
          <button
            className="btn btnYesNo btnUpdate"
            onClick={() => {
              if (this.state.newBrand.length < 1 || !this.props.checkIfNumber(this.state.newSize) || !this.props.checkIfNumber(this.state.newPrice)) {
                this.setState({ isUpdateValid: true });
              } else {
                this.setState({ isUpdateValid: false });
                this.props.onHandleUpdate(this.state.newBrand, this.state.newSize, this.state.newPrice, this.state.newImageUrl, this.props.id);

                this.setState({ newBrand: "", newSize: "", newPrice: "", newImageUrl: "" });
                this.props.toggleUpdatePressed();
              }
            }}>
            Save
          </button>
          <button
            className="btn btnYesNo btnUpdate"
            onClick={() => {
              this.props.close();
              this.props.toggleUpdatePressed();
            }}>
            Cancel
          </button>
        </div>
        {this.state.isUpdateValid && <p style={{ color: "rgba(253, 71, 43, 0.785)", margin: "0" }}>Please enter a valid value.</p>}
      </React.Fragment>
    );
  };
  render() {
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
