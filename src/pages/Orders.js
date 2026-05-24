// src/pages/Orders.js

import {
  useContext,
  useEffect
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  StoreContext
} from "../context/StoreContext";

import "./Orders.css";

export default function Orders(){

  const navigate =
    useNavigate();

  const {

    orders,

    fetchOrders,

    user

  } = useContext(StoreContext);

  /* ===================================== */
  /* ===== FETCH ORDERS ===== */
  /* ===================================== */

  useEffect(()=>{

    if(user){

      fetchOrders(

        user._id ||

        user.id
      );
    }

  },[user]);

  return(

    <div className="ordersPage">

      {/* ===================================== */}
      {/* ===== TITLE ===== */}
      {/* ===================================== */}

      {

        orders?.length > 0 &&

        <div className="ordersTop">

          <div>

            <h1>

              My Orders

            </h1>

            <p className="subtitle">

              Track all your recent purchases

            </p>

          </div>

          <button
            className="shopBtn"

            onClick={() =>
              navigate("/")
            }
          >

            Continue Shopping

          </button>

        </div>
      }

      {/* ===================================== */}
      {/* ===== EMPTY ORDERS ===== */}
      {/* ===================================== */}

      {

        orders?.length === 0

        &&

        <div className="emptyOrders">

          <div className="emptyBox">

            <div className="emptyIcon">

              📦

            </div>

            <h1>

              No Orders Yet

            </h1>

            <p>

              Looks like you haven’t
              placed any orders yet.

            </p>

            <button
              className="emptyBtn"

              onClick={() =>
                navigate("/")
              }
            >

              Start Shopping

            </button>

          </div>

        </div>
      }

      {/* ===================================== */}
      {/* ===== ORDERS ===== */}
      {/* ===================================== */}

      {

        orders?.map((order,index)=>(

          <div
            className="mainOrderCard"

            key={index}
          >

            {/* ===================================== */}
            {/* ===== ORDER HEADER ===== */}
            {/* ===================================== */}

            <div className="orderHeader">

              <div>

                <h3>

                  Order ID:
                  {" "}

                  {

                    order?._id
                    ?.slice(-8)
                    ?.toUpperCase()

                  }

                </h3>

                <p>

                  Ordered On:
                  {" "}
                  {order?.date}

                </p>

              </div>

              <span className="shipping">

                {order?.status}

              </span>

            </div>

            {/* ===================================== */}
            {/* ===== ITEMS ===== */}
            {/* ===================================== */}

            <div className="orderItemsWrapper">

              {

                order?.items?.map((item)=>(

                  <div
                    className="orderCard"

                    key={item.id}
                  >

                    {/* ===== IMAGE ===== */}

                    <div className="orderImageBox">

                      <img
                        src={item.image}
                        alt=""
                      />

                    </div>

                    {/* ===== DETAILS ===== */}

                    <div className="orderDetails">

                      <h2>

                        {item.name}

                      </h2>

                      <p>

                        Quantity:
                        {" "}
                        {item.qty}

                      </p>

                      <p>

                        Price:
                        {" "}
                        ₹
                        {item.price}

                      </p>

                    </div>

                    {/* ===== PRICE ===== */}

                    <div className="orderPrice">

                      ₹
                      {

                        item.price *

                        item.qty
                      }

                    </div>

                  </div>
                ))
              }

            </div>

            {/* ===================================== */}
            {/* ===== FOOTER ===== */}
            {/* ===================================== */}

            <div className="orderFooter">

              <div>

                <p>

                  Payment Method

                </p>

                <h4>

                  Cash On Delivery

                </h4>

              </div>

              <div className="totalBox">

                <p>

                  Total Amount

                </p>

                <h2>

                  ₹{order?.total}

                </h2>

              </div>

            </div>

          </div>
        ))
      }

    </div>
  );
}