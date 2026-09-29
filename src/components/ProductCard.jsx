import { Link } from "react-router-dom";

export default function ProductCard({ prod }) {
  return (
    <div className="product-card">
      <img src={prod.image} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-name">{prod.name}</h3>
        <p className="product-card-price">${prod.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary" to={`/products/${prod.id}`}>
            View Details
          </Link>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
