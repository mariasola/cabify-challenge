import React from "react";

const Item = props => {
  const { products, handleEvent, quantity, handleDetail } = props;

  const increaseProduct = ev => {
    handleEvent(products.name, quantity[products.name] + 1);
  };
  const decreaseProduct = ev => {
    if (quantity[products.name] > 0) {
      handleEvent(products.name, quantity[products.name] - 1);
    }
  };

  const setProductQuantity = ev => {
    const quantity = parseInt(ev.target.value);
    if (isNaN(quantity)) {
      handleEvent(products.name, 0);
    } else {
      handleEvent(products.name, quantity);
    }
  };

  return (
    <React.Fragment>
      <div className="col-product">
        <figure className="product-image">
          <button className="product-button" onClick={() =>handleDetail(products)}>
          <img
            src={require(`../../images/${products.image}`)}
            alt={products.name}
          />
          </button>
          <div className="product-description">
            <h1>{products.name}</h1>
            <p className="product-code">{products.description}</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button className="count" onClick={decreaseProduct}>
          -
        </button>
        <input
          type="value"
          className="product-quantity"
          onChange={setProductQuantity}
          value={quantity[products.name]}
        />
        <button className="count" onClick={increaseProduct}>
          +
        </button>
      </div>
      <div className="col-price">
        <span className="product-price">{products.price}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">
          {quantity[products.name] * products.price}
        </span>
        <span className="product-currency currency">€</span>
      </div>
    </React.Fragment>
  );
};

export default Item;
