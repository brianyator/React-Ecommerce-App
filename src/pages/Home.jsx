import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts(); //stores all the products we get from products.js into 'products' array

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome To Home Tab</h1>
        <p className="home-subtitle">Discover the best prices here</p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
          {/* we loop through data stored in 'products' array using .map() function storing each product as parameter 'product' for this .map() function and passes the items to ProductCard as a prop named 'prod' which loops through the actual key-value pairs*/}
          {/* It's a good idea to keep 'key={product.id}' in <ProductCard /> on Home than in ProductCard.js as 'key={prod.id}'cause React will map the product elements as unkeyed important for tracking when list changes or reorders*/}
        </div>
      </div>
    </div>
  );
}
