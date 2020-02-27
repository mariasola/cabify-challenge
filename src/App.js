import React from "react";
import getData from "./services/getData";
import ProductList from "./components/products/ProductList";
import Summary from "./components/summary/Summary";
import Detail from "./components/detail/Detail";
import "./styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalItems: 0,
      totalAmount: 0,
      quantity: {
        Shirt: 0,
        Mug: 0,
        Cap: 0
      },
      showDetail: false,
      productSelected: {},
      discouts: { mugDiscount: 0, shirtDiscount: 0 }
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.sumProducts = this.sumProducts.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    this.handleDiscounts = this.handleDiscounts.bind(this);
  }
  componentDidMount() {
    getData().then(products => {
      this.setState({ products });
    });
  }

  handleEvent(item, number) {
    const quantity = { ...this.state.quantity, [item]: number };

    this.setState({ quantity }, () => {
      this.sumProducts();
      this.sumTotalAmount();
      this.handleDiscounts();
    });
  }
  sumProducts() {
    let total = "";
    let itemsArray = Object.values(this.state.quantity);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    total = itemsArray.reduce(reducer);
    this.setState({
      totalItems: total
    });
  }
  sumTotalAmount() {
    let sumTotal = 0;
    this.state.products.forEach(element => {
      let key= this.state.quantity[element.name];
      sumTotal = sumTotal + element.price * key;
    });
    this.setState({
      totalAmount: sumTotal
    });
  }
  handleDetail = products => {
    this.setState({
      productSelected: products,
      showDetail: true
    });
  };
  closeDetail = () => {
    this.setState({ showDetail: false });
  };
  handleDiscounts() {
    let mugDiscount = 0;
    let shirtDiscount = 0;
    if (this.state.quantity.Mug % 2 === 0) {
      mugDiscount = Math.floor(this.state.quantity.Mug / 2) * 5;
    } else {
      mugDiscount = Math.floor(this.state.quantity.Mug / 2) * 5;
    }
    if (this.state.quantity.Shirt >= 3) {
      shirtDiscount = this.state.quantity.Shirt * 20 * 0.05;
    }
    this.setState({
      discouts: { mugDiscount: mugDiscount, shirtDiscount: shirtDiscount }
    });
  }
  render() {
    const {
      products,
      quantity,
      totalItems,
      totalAmount,
      productSelected,
      discouts
    } = this.state;
    return (
      <main className="App">
        <ProductList
          products={products}
          quantity={quantity}
          handleEvent={this.handleEvent}
          handleDetail={this.handleDetail}
        ></ProductList>
        <Summary
          discouts={discouts}
          totalAmount={totalAmount}
          totalItems={totalItems}
        ></Summary>
        {this.state.showDetail && (
          <Detail
            closeDetail={this.closeDetail}
            productSelected={productSelected}
          />
        )}
      </main>
    );
  }
}

export default App;
