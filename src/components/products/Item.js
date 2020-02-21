import React from "react";

const Item = props => {
  return (
    <React.Fragment>
      <div className="col-product">
        <figure className="product-image">
          <img src={props.products.image} alt={props.products.name} />
          <div className="product-description">
            <h1>{props.products.name}</h1>
            <p className="product-code">{props.products.description}</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button className="count">-</button>
        <input type="text" className="product-quantity" defaultValue="3" />
        <button className="count">+</button>
      </div>
      <div className="col-price">
        <span className="product-price">{props.products.price}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">60</span>
        <span className="product-currency currency">€</span>
      </div>
    </React.Fragment>
  );
};

export default Item;
