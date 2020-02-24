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
        Shirt: 0,
        Mug: 0,
        Cap: 0
      }
    };
    console.log(this.state.quantity);
  }
  componentDidMount() {
    getData().then(products => {
      this.setState({ products });
    });
  }
  handleEvent(donde, cantidad) {
    const quantity = {...this.state.quantity, donde : cantidad } ;

    this.setState(quantity);
  }

  render() {
    const { products, quantity } = this.state;
    return (
      <main className="App">
        <ProductList
          products={products} quantity={quantity}
          handleEvent={this.handleEvent}
        ></ProductList>
        <Summary></Summary>
      </main>
    );
  }
}

export default App;