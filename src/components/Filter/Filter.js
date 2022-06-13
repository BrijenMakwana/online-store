import React from "react";
import "./Filter.css";

export default function Filter(props) {
  return (
    <div className="product-dropdown">
      {props.title}
      <select
        value={props.category}
        onChange={props.selectCategory}
        className="dropdown-menu"
      >
        {props.categories.map((item) => (
          <option value={item.value} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
