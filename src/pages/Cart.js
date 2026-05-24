// src/pages/Cart.js

import { useContext } from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  StoreContext
} from "../context/StoreContext";

import "./Cart.css";

export default function Cart() {

  const navigate =
    useNavigate();

  const {

    cart,

    removeFromCart,

    increaseQty,

    decreaseQty

  } = useContext(StoreContext);

  /* ===== TOTAL ===== */

  const subtotal = cart.reduce(

    (total,item)=>

      total +
      item.price *
      (item.qty || 1),

    0
  );

  const delivery =
    cart.length > 0
    ? 99
    : 0;

  const total =
    subtotal + delivery;

  return (

    <div className="cartPage">

      {/* ===== TITLE ===== */}

      <h1 className="cartTitle">

        Shopping Cart

      </h1>

      {

        cart.length === 0

        ? (

          <div className="emptyCart">

            <h2>

              Your Cart Is Empty 🛒

            </h2>

            <p>

              Add products to
              continue shopping

            </p>

            <button
              className="continueBtn"

              onClick={() =>
                navigate("/")
              }
            >

              Continue Shopping

            </button>

          </div>

        )

        : (

          <div className="cartContainer">

            {/* ===== LEFT SIDE ===== */}

            <div className="cartItems">

              {

                cart.map((item)=>(

                  <div
                    className="cartCard"

                    key={item.id}
                  >

                    {/* ===== IMAGE ===== */}

                    <div className="cartLeft">

                      <img
                        src={item.image}
                        alt=""
                        className="cartImage"
                      />

                    </div>

                    {/* ===== DETAILS ===== */}

                    <div className="cartRight">

                      <h2 className="cartName">

                        {item.name}

                      </h2>

                      <p className="cartPrice">

                        ₹{item.price}

                      </p>

                      <p className="cartOffer">

                        {item.offer}

                      </p>

                      <p className="cartRating">

                        ⭐ {item.rating}

                        ({item.reviews})

                      </p>

                      {/* ===== QUANTITY ===== */}

                      <div className="qtyBox">

                        <button
                          className="qtyBtn"

                          onClick={() =>
                            decreaseQty(item.id)
                          }
                        >

                          -

                        </button>

                        <span>

                          {item.qty || 1}

                        </span>

                        <button
                          className="qtyBtn"

                          onClick={() =>
                            increaseQty(item.id)
                          }
                        >

                          +

                        </button>

                      </div>

                      {/* ===== BUTTONS ===== */}

                      <div
                        style={{
                          display:"flex",
                          gap:"12px",
                          marginTop:"18px"
                        }}
                      >

                        {/* REMOVE */}

                        <button

                          onClick={() =>
                            removeFromCart(item.id)
                          }

                          style={{
                            flex:1,
                            background:"#ef4444",
                            color:"white",
                            padding:"13px",
                            border:"none",
                            borderRadius:"10px",
                            fontWeight:"700",
                            cursor:"pointer"
                          }}
                        >

                          Remove

                        </button>

                        {/* BUY NOW */}

                        <button

                          onClick={() =>
                            navigate("/checkout")
                          }

                          style={{
                            flex:1,
                            background:"#2563eb",
                            color:"white",
                            padding:"13px",
                            border:"none",
                            borderRadius:"10px",
                            fontWeight:"700",
                            cursor:"pointer"
                          }}
                        >

                          Buy Now

                        </button>

                      </div>

                    </div>

                  </div>

                ))
              }

            </div>

            {/* ===== RIGHT SIDE ===== */}

            <div className="cartSummary">

              <h2>

                Price Details

              </h2>

              <div className="summaryRow">

                <span>

                  Subtotal

                </span>

                <span>

                  ₹{subtotal}

                </span>

              </div>

              <div className="summaryRow">

                <span>

                  Delivery

                </span>

                <span>

                  ₹{delivery}

                </span>

              </div>

              <div className="summaryRow totalRow">

                <span>

                  Total

                </span>

                <span>

                  ₹{total}

                </span>

              </div>

              {/* ===== CHECKOUT ===== */}

              <button
                className="checkoutBtn"

                onClick={() =>
                  navigate("/checkout")
                }
              >

                Proceed To Checkout

              </button>

            </div>

          </div>

        )
      }

    </div>
  );
}
