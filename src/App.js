import { useState } from "react";
import "./App.css";
import Product from "./components/product/Product";

function App() {
  const [searchText, setSearchText] = useState("");

  const searchProduct = (e) => {
    setSearchText(e.target.value);
    // console.log(searchText);
  };
  return (
    <div className="app">
      {/* search box */}
      <div className="search-container">
        <form>
          <input
            type="text"
            placeholder="search products here"
            className="search-input"
            onChange={searchProduct}
          ></input>
        </form>
      </div>

      <div className="products-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
