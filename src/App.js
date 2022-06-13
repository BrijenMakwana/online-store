import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import Product from "./components/product/Product";
import { products, categories, ratings, reviews, sorting } from "./data/data";

function App() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("Mobiles");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(0);
  const [sort, setSort] = useState("l");

  let timeout;

  // search products 2 s after user stops typing
  const searchProduct = (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearchText(e.target.value);
    }, 1500);
  };

  // sort
  switch (sort) {
    case "l":
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    case "h":
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
      break;
    case "rl":
      products.sort((a, b) => (a.rating > b.rating ? 1 : -1));
      break;
    case "rh":
      products.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      break;
    default:
      break;
  }

  return (
    <div className="app">
      <h1 className="company-name">Online Store</h1>

      {/* search box */}
      <div className="search-container">
        <form onSubmit={(e) => e.preventDefault()}>
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
        {/* category filter */}
        <Filter
          title={"Category"}
          category={category}
          selectCategory={(e) => setCategory(e.target.value)}
          categories={categories}
        />

        {/* ratting filter */}
        <Filter
          title={"Rating"}
          category={rating}
          selectCategory={(e) => setRating(e.target.value)}
          categories={ratings}
        />

        {/* reviews filter */}
        <Filter
          title={"Reviews"}
          category={review}
          selectCategory={(e) => setReview(e.target.value)}
          categories={reviews}
        />

        {/* sorting */}
        <Filter
          title={"Sorting"}
          category={sort}
          selectCategory={(e) => setSort(e.target.value)}
          categories={sorting}
        />
      </div>

      {/* product list */}
      <div className="products-container">
        {products
          .filter(
            (product) =>
              product.title.toLowerCase().includes(searchText.toLowerCase()) &&
              product.category === category &&
              product.rating >= rating &&
              product.reviews >= review
          )
          .map((item) => (
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
