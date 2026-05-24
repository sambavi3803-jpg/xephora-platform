import { useRef } from "react";
import { Link } from "react-router-dom";
import "./ProductSlider.css";

function ProductSlider({ products, addToCart }) {

  const sliderRef = useRef();

  const scroll = (dir) => {
    sliderRef.current.scrollLeft += dir * 300;
  };

  return (
    <div className="sliderWrapper">

      <button className="navBtn left" onClick={() => scroll(-1)}>❮</button>

      <div className="slider" ref={sliderRef}>

        {products.map((item) => (
          <div className="sliderCard" key={item.id}>

            <img src={item.image} />

            <h4>{item.name}</h4>

            <p>₹{item.price}</p>

            <p className="mrp">MRP ₹{item.mrp}</p>

            <p>⭐ {item.rating} ({item.reviews})</p>

            <p className="offer">{item.offer}</p>

            <button className="yellowBtn" onClick={() => addToCart(item)}>
              Add To Cart
            </button>

            <Link to={`/product/${item.id}`}>
              <button className="buyBtn">View</button>
            </Link>

          </div>
        ))}

      </div>

      <button className="navBtn right" onClick={() => scroll(1)}>❯</button>

    </div>
  );
}

export default ProductSlider;