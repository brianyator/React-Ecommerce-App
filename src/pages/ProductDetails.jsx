import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../data/products";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductsById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="page">
      Product Details page {id}
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            {product && <img src={product.image} alt={product.name} />}
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
