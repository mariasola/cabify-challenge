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
      totalItems:0,
      totalAmount:0,
      quantity: {
        Shirt: 0,
        Mug: 0,
        Cap: 0
      }
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.sumProducts = this.sumProducts.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
  }
  componentDidMount() {
    getData().then(products => {
      this.setState({ products });
    });
  }

  handleEvent(item, number) {
    const quantity = { ...this.state.quantity, [item]: number };
    this.sumProducts();
    this.sumTotalAmount();

    this.setState({ quantity });
  }
  sumProducts() {
    let total=0;
    let itemsArray = Object.values(this.state.quantity);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    total=(itemsArray.reduce(reducer));
    this.setState({
      totalItems: total
    });
    console.log(this.state.products)
    console.log('Funciono');
  };
  sumTotalAmount(){
    let total=0;
    // this.state.products.map(products =>{total += products.price * this.props.quantity[products.name]})
    
    this.setState({
      totalAmount: total
    });
    console.log(this.state.products)
  }
  
  render() {
    const { products, quantity, totalItems,totalAmount } = this.state;
    return (
      <main className="App">
        <ProductList
          products={products}
          quantity={quantity}
          handleEvent={this.handleEvent}
        ></ProductList>
        <Summary totalAmount={totalAmount}  totalItems={totalItems} ></Summary>
      </main>
    );
  }
}

export default App;
