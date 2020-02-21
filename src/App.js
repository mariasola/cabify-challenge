import React from "react";
import getData from "./services/getData";
import ProductList from "./components/products/ProductList";
import Summary from "./components/summary/Summary";
import "./styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    getData().then(products => {
      this.setState({ products });
    });
  }
  render() {
    const { products } = this.state;
    return (
      <main className="App">
        <ProductList products={products}></ProductList>
        <Summary></Summary>
      </main>
    );
  }
}

export default App;
