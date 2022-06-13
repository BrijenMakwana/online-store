import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product-container">
      <img src={props.image} alt={props.title} className="product-image" />
      <span className="product-name">{props.title}</span>
      <span className="product-price">Rs.{props.price}</span>
      <div className="rating-container">
        <img
          src={require("../../images/star.png")}
          alt="iphone"
          className="rating"
        />
        <span className="rating-text">{props.rating}</span>

        <img
          src={require("../../images/messages.png")}
          alt="iphone"
          className="rating"
        />
        <span className="rating-text">{props.reviews}</span>
      </div>
      <span className="category">{props.category}</span>
    </div>
  );
}
