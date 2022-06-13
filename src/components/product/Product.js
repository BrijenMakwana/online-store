import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div className="product-container">
      <img
        src="https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="iphone"
        className="product-image"
      />
      <span className="product-name">iPhone 13 Black</span>
      <div className="rating-container">
        <img
          src={require("../../images/star.png")}
          alt="iphone"
          className="rating"
        />
        <span className="rating-text">4.5</span>

        <img
          src={require("../../images/messages.png")}
          alt="iphone"
          className="rating"
        />
        <span className="rating-text">120</span>
      </div>
      <span className="category">Mobiles</span>
    </div>
  );
}
