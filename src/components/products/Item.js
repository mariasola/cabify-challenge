import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    this.setState({ quantity: this.state.quantity + 1 });
  }
  removeProduct() {
    this.setState({ quantity: this.state.quantity - 1 });
  }
  render() {
    const { products, handleEvent, quantity } = this.props;
    return (
      <React.Fragment>
        <div className="col-product">
          <figure className="product-image">
            <img
              src={require(`../../images/${products.image}`)}
              alt={products.name}
            />
            <div className="product-description">
              <h1>{products.name}</h1>
              <p className="product-code">{products.description}</p>
            </div>
          </figure>
        </div>
        <div className="col-quantity">
          <button className="count">-</button>
          <input
            type="value"
            className="product-quantity"
            onChange={handleEvent}
            value={quantity}
            defaultValue="0"
          />
          <button className="count" onClick={this.addProduct}>
            +
          </button>
        </div>
        <div className="col-price">
          <span className="product-price">{products.price}</span>
          <span className="product-currency currency">€</span>
        </div>
        <div className="col-total">
          <span className="product-price">60</span>
          <span className="product-currency currency">€</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
