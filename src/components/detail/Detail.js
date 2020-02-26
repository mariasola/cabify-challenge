import React from "react";

const Detail = (props) => {
    console.log(props);
    const { closeDetail, productSelected } = props;
    return(
        <figure className="detail">
                <h1 className="detail-title">{productSelected.name}</h1>
                <button className="detail-close" onClick={closeDetail}>X</button>
                <div className="detail-col">
                    <img
                    className="detail-col-img"
                    src={require(`../../images/${productSelected.image}`)}
                    alt={productSelected.name}
                    />
                <div className="detail-details">
                    <p className="product-code">{productSelected.description}</p>
                    <div className="col-price">
                        <span className="product-price">{productSelected.price}</span>
                        <span className="product-currency currency">€</span>
                    </div>
                </div>
                </div>
        </figure>
    )

}



export default Detail;