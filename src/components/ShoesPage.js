import { Component } from "react";
import API from "./API";
import ShoeItem from "./ShoeItem";
import Spinner from "./Spinner";

class ShoesPage extends Component {
  state = {
    originalData: [],
    shoesArr: [],
    isSpinner: false,
    newBrand: "",
    newSize: "",
    newPrice: "",
    newImage: "",
    isValidValue: "",
    isUpdateValid: "",
  };
  async componentDidMount() {
    this.setState({ isSpinner: true });
    try {
      const { data } = await API.get("/shoes");
      this.setState({ originalData: data, shoesArr: data, isSpinner: false });
    } catch (err) {
      console.log(err);
    }
  }
  insertItems = () => {
    return this.state.shoesArr.map(({ Brand, Price, Size, id, imageUrl }) => {
      return <ShoeItem key={id} id={id} brand={Brand} size={Size} price={Price} image={imageUrl} onHandleDelete={this.onHandleDelete} onHandleUpdate={this.onHandleUpdate} checkIfNumber={this.checkIfNumber} />;
    });
  };
  checkIfNumber = (value) => {
    //checks if string contain only digits
    let isNum = /^\d+$/.test(value);
    return isNum;
  };
  //create
  handleCreate = async () => {
    if (this.state.newBrand.length < 1 || !this.checkIfNumber(this.state.newSize) || !this.checkIfNumber(this.state.newPrice)) {
      this.setState({ isValidValue: true });
    } else {
      this.setState({ isValidValue: false, isSpinner: true });
      const newShoes = {
        Brand: this.state.newBrand,
        Size: this.state.newSize,
        Price: this.state.newPrice,
        imageUrl: this.state.newImage,
      };
      try {
        const createdShoes = await API.post("/shoes", newShoes);
        this.setState((prev) => {
          return {
            shoesArr: [...prev.shoesArr, createdShoes.data],
            isSpinner: false,
            newBrand: "",
            newSize: "",
            newPrice: "",
            newImage: "",
          };
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  //delete by id
  onHandleDelete = async (id) => {
    this.setState({ isSpinner: true });
    try {
      await API.delete(`/shoes/${id}`);
      this.setState((prev) => {
        const newShoesArr = prev.shoesArr.filter((shoe) => shoe.id !== id);
        return { shoesArr: newShoesArr, isSpinner: false };
      });
    } catch (err) {
      console.log(err);
    }
  };
  //update
  onHandleUpdate = async (newBrand, newSize, newPrice, newImageUrl, id) => {
    this.setState({ isSpinner: true });

    try {
      const shoesObjToBeUpdate = this.state.shoesArr.find((shoesObj) => {
        return id === shoesObj.id;
      });
      const updatedShoesObj = { ...shoesObjToBeUpdate, Brand: newBrand, Size: newSize, Price: newPrice, imageUrl: newImageUrl };
      const { data } = await API.put(`/shoes/${id}`, updatedShoesObj);
      this.setState((prev) => {
        return {
          shoesArr: prev.shoesArr.map((shoes) => {
            if (shoes.id === data.id) {
              return data;
            } else {
              return shoes;
            }
          }),
          isSpinner: false,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        {this.state.isSpinner ? (
          <Spinner />
        ) : (
          <div className="items-container">
            <div className="add-bar">
              <p className="description">Add a new pair of shoes:</p>
              <div className="add-inputs">
                <input
                  id="newBrand"
                  type="text"
                  placeholder="enter brand's name"
                  onChange={(e) => {
                    this.setState({ newBrand: e.target.value });
                  }}
                  value={this.state.newBrand}
                />
                <input
                  id="newSize"
                  type="text"
                  placeholder="enter size"
                  onChange={(e) => {
                    this.setState({ newSize: e.target.value });
                  }}
                  value={this.state.newSize}
                />
                <input
                  id="newPrice"
                  type="text"
                  placeholder="enter price"
                  onChange={(e) => {
                    this.setState({ newPrice: e.target.value });
                  }}
                  value={this.state.newPrice}
                />
                <input
                  id="newImage"
                  type="text"
                  placeholder="enter image url"
                  onChange={(e) => {
                    this.setState({ newImage: e.target.value });
                  }}
                  value={this.state.newImage}
                />
                <button className="btn" onClick={this.handleCreate}>
                  Add
                </button>
              </div>
              {this.state.isValidValue && <p style={{ color: "rgba(253, 71, 43, 0.785)", margin: "0" }}>Please enter a valid value.</p>}
            </div>
            <div className="cards-wrap">{this.insertItems()}</div>
          </div>
        )}
      </div>
    );
  }
}
export default ShoesPage;
