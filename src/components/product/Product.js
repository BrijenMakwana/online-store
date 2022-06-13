import React from "react";
import "./Product.css";

export default function Product(props) {
  const { title, price, rating, reviews, category } = props;
  return (
    <div className="product-container">
      <img src={props.image} alt={title} className="product-image" />
      <h3 className="product-name">{title}</h3>
      <span className="product-price">Rs.{price}</span>
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
      <span className="category">{category}</span>
    </div>
  );
}
