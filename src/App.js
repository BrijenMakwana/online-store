import { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import Product from "./components/product/Product";
import { products, categories } from "./data/data";

function App() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  const searchProduct = (e) => {
    setSearchText(e.target.value);
    // console.log(searchText);
  };

  const selectCategory = (e) => {
    setCategory(e.target.value);
  };

  // filter products based on search
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) &&
      product.category === category
  );

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

      {/* filters */}
      <div className="product-options">
        <Filter
          title={"Category"}
          category={category}
          selectCategory={selectCategory}
          categories={categories}
        />
      </div>

      <div className="products-container">
        {filteredProducts.map((item) => (
          <Product
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
