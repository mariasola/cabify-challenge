import React from "react";

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }
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
              <span>-{this.props.discouts.mugDiscount}€</span>
            </li>
            <li>
              <span>x3 Shirt offer</span>
              <span>-{this.props.discouts.shirtDiscount}€</span>
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
              <span className="summary-total-price">
                {this.props.totalAmount -
                  (this.props.discouts.mugDiscount +
                    this.props.discouts.shirtDiscount)}
                €
              </span>
            </li>
          </ul>
          <button type="submit">Checkout</button>
        </div>
      </aside>
    );
  }
}

export default Summary;
