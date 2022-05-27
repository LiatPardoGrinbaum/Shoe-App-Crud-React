import { Component } from "react";
import API from "./API";
import ShoeItem from "./ShoeItem";
import Spinner from "./Spinner";

class ShoesPage extends Component {
  state = {
    originalData: [],
    shoesArr: [],
    isSpinner: false,
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
      return <ShoeItem key={id} id={id} brand={Brand} size={Size} price={Price} image={imageUrl} />;
    });
  };
  render() {
    return (
      <div>
        {this.state.isSpinner ? (
          <Spinner />
        ) : (
          <div className="items-container">
            <div className="side-bar">
              <p className="description">Create a new pair of shoes:</p>
              <input id="newBrand" type="text" placeholder="enter brand's name" />
              <input id="newBrand" type="text" placeholder="enter size" />
              <input id="newBrand" type="text" placeholder="enter price" />
              <input id="newBrand" type="text" placeholder="enter image url" />
            </div>
            <div className="cards-wrap">{this.insertItems()}</div>
          </div>
        )}
      </div>
    );
  }
}
export default ShoesPage;
