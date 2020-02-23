import React from "react";
import Item from "./Item";

const ProductList = props => {
  const renderList = () => {
    return props.products.map(products => {
      return (
        <li className="product row" key={products.id}>
          <Item handleEvent={props.handleEvent} products={products} />
        </li>
      );
    });
  };
  return (
    <section className="products">
      <h1 className="main">Shopping cart</h1>
      <ul className="products-list tableHead">
        <li className="products-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ul className="products-list">{renderList()}</ul>
    </section>
  );
};

export default ProductList;
