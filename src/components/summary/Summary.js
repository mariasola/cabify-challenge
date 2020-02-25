import React from "react";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  // renderPrices() {
  //   let quantity = 0;

  //   console.log(Object.values(this.props.quantity));
  //   // this.props.products.map(())
  // }

  render() {
    return (
      <aside className="summary">
        <h1 className="main">Order Summary</h1>
        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">
              {this.props.totalItems} Items
            </span>
            <span className="summary-items-price">
              {this.props.totalAmount}
              <span className="currency">€</span>
            </span>
          </li>
        </ul>
        <div className="summary-discounts wrapper-half border">
          <h2>Discounts</h2>
          <ul>
            <li>
              <span>2x1 Mug offer</span>
              <span>-10€</span>
            </li>
            <li>
              <span>x3 Shirt offer</span>
              <span>-3€</span>
            </li>
            <li>
              <span>Promo code</span>
              <span>0€</span>
            </li>
          </ul>
        </div>
        <div className="summary-total wrapper">
          <ul>
            <li>
              <span className="summary-total-cost">Total cost</span>
              <span className="summary-total-price">107€</span>
            </li>
          </ul>
          <button type="submit">Checkout</button>
        </div>
      </aside>
    );
  }
}

export default Summary;
