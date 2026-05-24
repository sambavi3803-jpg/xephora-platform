import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(StoreContext);

  return (
    <div className="card">

      <img src={product.image} />

      <h4>{product.name}</h4>

      <p>₹{product.price}</p>

      <p className="mrp">MRP ₹{product.mrp}</p>

      <p>⭐ {product.rating} ({product.reviews})</p>

      <p className="offer">{product.offer}</p>

      <button className="yellowBtn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </div>
  );
}