import React from "react";


const Item = props => {
  const { products, handleEvent, quantity } = props;
  
  const addProduct = (ev)=> {
    handleChange()
  }
  const removeProduct = (ev)=> {
    handleChange();
  }
  
  const handleChange = () => {
   handleEvent(products.name, quantity[products.name]+1)
  }

  // const handleChange = () => {
  //   if(addProduct===true){
  //     handleEvent(products.name, quantity[products.name]+1)
  //   }if (removeProduct===true){
  //     handleEvent(products.name, quantity[products.name]-1)
  //   }
  // }
 
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
        <button className="count" onClick={removeProduct}>-</button>
        <input
          type="value"
          className="product-quantity"
          onChange={handleChange}
          value={quantity[products.name]}
        />
        <button className="count" onClick={addProduct}>
          +
        </button>
      </div>
      <div className="col-price">
        <span className="product-price">{products.price}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
  <span className="product-price">{quantity[products.name]*products.price}</span>
        <span className="product-currency currency">€</span>
      </div>
    </React.Fragment>
  );

}

export default Item;