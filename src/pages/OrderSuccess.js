// src/pages/OrderSuccess.js

import {
  useNavigate
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import "./OrderSuccess.css";

export default function OrderSuccess(){

  const navigate =
    useNavigate();

  /* ===================================== */
  /* ===== STATES ===== */
  /* ===================================== */

  const [orderId, setOrderId] =
    useState("");

  const [deliveryDate, setDeliveryDate] =
    useState("");

  /* ===================================== */
  /* ===== GENERATE ORDER ID ===== */
  /* ===================================== */

  useEffect(() => {

    const randomId =

      "XEP" +

      Math.floor(

        100000 +

        Math.random() * 900000
      );

    setOrderId(randomId);

    /* DELIVERY DATE */

    const tomorrow =
      new Date();

    tomorrow.setDate(

      tomorrow.getDate() + 1
    );

    setDeliveryDate(

      tomorrow.toDateString()
    );

  },[]);

  return(

    <div className="successPage">

      <div className="successBox">

        {/* ===================================== */}
        {/* ===== SUCCESS ICON ===== */}
        {/* ===================================== */}

        <div className="successIcon">

          ✅

        </div>

        {/* ===================================== */}
        {/* ===== TITLE ===== */}
        {/* ===================================== */}

        <h1>

          Payment Successful 

        </h1>

        <h2>

          Order Confirmed

        </h2>

        {/* ===================================== */}
        {/* ===== MESSAGE ===== */}
        {/* ===================================== */}

        <p>

          Thank you for shopping with
          Xephora ❤️

        </p>

        {/* ===================================== */}
        {/* ===== ORDER DETAILS ===== */}
        {/* ===================================== */}

        <div className="orderInfo">

          <p>

            <strong>

              Order ID:

            </strong>

            {" "}

            {orderId}

          </p>

          <p>

            <strong>

              Expected Delivery:

            </strong>

            {" "}

            {deliveryDate}

          </p>

        </div>

        {/* ===================================== */}
        {/* ===== BUTTONS ===== */}
        {/* ===================================== */}

        <div className="successButtons">

          <button
            className="ordersBtn"

            onClick={() =>
              navigate("/orders")
            }
          >

            View My Orders

          </button>

          <button
            className="shopBtn"

            onClick={() =>
              navigate("/")
            }
          >

            Continue Shopping

          </button>

        </div>

      </div>

    </div>
  );
}