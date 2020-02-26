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
      totalItems:0,
      totalAmount:0,
      quantity: {
        Shirt: 0,
        Mug: 0,
        Cap: 0
      },
      showDetail:false,
      productSelected:{}
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.sumProducts = this.sumProducts.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
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

    this.setState(
      { quantity }, 
      () => {
      console.log("HandleEvent guarda:", this.state.quantity); 
      }
    );
  }
  sumProducts() {
    let total="";
    let itemsArray = Object.values(this.state.quantity);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    total=(itemsArray.reduce(reducer));
    console.log(itemsArray);
    this.setState(
      {
      totalItems: total
      },
      () => {
        console.log("SumProducts hace lo que quiere:", this.state.totalItems);
      }
    );
    
  };
  sumTotalAmount(){
    let sumTotal=0;
    this.state.products.forEach(element => {
      for(let key in this.state.quantity){
        if(key === element.name){
        sumTotal= sumTotal+(element.price*this.state.quantity[key])
        }
      }
    }
    );
    this.setState({
      totalAmount: sumTotal
    });
  }
  handleDetail=(products)=>{
    this.setState({
      productSelected: products,
      showDetail:true
    })
  }
  closeDetail= () =>{
    this.setState({ showDetail: false});
  }
  render() {
    const { products, quantity, totalItems,totalAmount,productSelected, closeDetail } = this.state;
    return (
      <main className="App">
        <ProductList
          products={products}
          quantity={quantity}
          handleEvent={this.handleEvent}
          handleDetail={this.handleDetail}
        ></ProductList>
        <Summary totalAmount={totalAmount}  totalItems={totalItems} ></Summary>
        {this.state.showDetail &&(
          <Detail closeDetail={this.closeDetail} productSelected={productSelected}/>
        )}
      </main>
    );
  }
}

export default App;
