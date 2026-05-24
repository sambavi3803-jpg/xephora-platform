import {
  useContext
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  StoreContext
} from "../context/StoreContext";

import "./Wishlist.css";

export default function Wishlist(){

  const navigate =
    useNavigate();

  const {

    wishlist,

    removeFromWishlist,

    addToCart

  } = useContext(StoreContext);

  return(

    <div className="wishlistPage">

      {/* ===== TITLE ===== */}

      <h1 className="wishlistTitle">

        My Wishlist ❤️

      </h1>

      {/* ===== EMPTY ===== */}

      {

        wishlist.length === 0

        ? (

          <div className="emptyWishlist">

            <h2>
 
                <b>Wishlist is Empty</b>

            </h2>

            <p>

            Save your favorite
              products here.

            </p>
            <br></br>

            <button
              onClick={() =>
                navigate("/")
              }
            >
              

              Continue Shopping
              

            </button>

          </div>

        )

        : (

          /* ===== PRODUCTS ===== */

          <div className="wishlistGrid">

            {wishlist.map((item)=>(

              <div
                className="wishlistCard"

                key={item.id}
              >

                {/* ===== IMAGE ===== */}

                <img
                  src={item.image}
                  alt=""
                />

                {/* ===== NAME ===== */}

                <h2>

                  {item.name}

                </h2>

                {/* ===== PRICE ===== */}

                <p className="wishlistPrice">

                  ₹{item.price}

                </p>

                {/* ===== RATING ===== */}

                <p className="wishlistRating">

                  ⭐ {item.rating}

                  ({item.reviews})

                </p>

                {/* ===== OFFER ===== */}

                <p className="wishlistOffer">

                  {item.offer}

                </p>

                {/* ===== BUTTONS ===== */}

                <div className="wishlistButtons">

                  {/* ADD TO CART */}

                  <button
                    className="cartBtn"

                    onClick={() =>
                      addToCart(item)
                    }
                  >

                    Add To Cart

                  </button>

                  {/* REMOVE */}

                  <button
                    className="removeBtn"

                    onClick={() =>
                      removeFromWishlist(
                        item.id
                      )
                    }
                  >

                    Remove

                  </button>

                </div>

              </div>

            ))}

          </div>

        )
      }

    </div>
  );
}