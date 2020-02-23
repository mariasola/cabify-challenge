import React from "react";
import getData from "./services/getData";
import ProductList from "./components/products/ProductList";
import Summary from "./components/summary/Summary";
import "./styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      quantity: {
        shirt: 0,
        mug: 0,
        cub: 0
      }
    };
    console.log(this.state.quantity);
  }
  componentDidMount() {
    getData().then(products => {
      this.setState({ products });
    });
  }
  handleEvent(ev) {
    this.setState({ quantity: ev.target.value });
  }

  render() {
    const { products } = this.state;
    return (
      <main className="App">
        <ProductList
          products={products}
          handleEvent={this.handleEvent}
        ></ProductList>
        <Summary></Summary>
      </main>
    );
  }
}

export default App;
