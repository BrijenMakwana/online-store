import React from "react";
import "./Product.css";

export default function Product(props) {
  const { title, price, rating, reviews, category } = props;
  return (
    <div className="product-container">
      {/* product image */}
      <img src={props.image} alt={title} className="product-image" />
      {/* product name */}
      <h3 className="product-name">{title}</h3>
      {/* product price */}
      <span className="product-price">Rs.{price}</span>

      {/* ratings and reviews */}
      <div className="rating-container">
        <img
          src={require("../../images/star.png")}
          alt="rating"
          className="rating"
        />
        <span className="rating-text">{rating}</span>

        <img
          src={require("../../images/messages.png")}
          alt="reviews"
          className="rating"
        />
        <span className="rating-text">{reviews}</span>
      </div>
      {/* category */}
      <span className="category">{category}</span>
    </div>
  );
}
