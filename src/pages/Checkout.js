// src/pages/Checkout.js

import {
  useContext,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import Swal from "sweetalert2";

import {
  StoreContext
} from "../context/StoreContext";

import "./Checkout.css";

function Checkout() {

  const {

    cart,

    placeOrder,

    user

  } = useContext(StoreContext);

  const navigate =
    useNavigate();

  /* ===================================== */
  /* ===== STATES ===== */
  /* ===================================== */

  const [fullName, setFullName] =
    useState(
      user?.name || ""
    );

  const [mobile, setMobile] =
    useState(
      user?.phone || ""
    );

  const [

    alternateMobile,

    setAlternateMobile

  ] = useState("");

  const [house, setHouse] =
    useState("");

  const [street, setStreet] =
    useState("");

  const [landmark, setLandmark] =
    useState("");

  const [city, setCity] =
    useState("");

  const [state, setState] =
    useState("");

  const [area, setArea] =
    useState("");

  const [pincode, setPincode] =
    useState("");

  const [payment, setPayment] =
    useState("cod");

  /* ===================================== */
  /* ===== PAYMENT STATES ===== */
  /* ===================================== */

  const [upiId, setUpiId] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [cardName, setCardName] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  /* ===================================== */
  /* ===== LOCATIONS ===== */
  /* ===================================== */

  const locations = {

    Chennai: {

      state:"Tamil Nadu",

      pincode:"600001",

      areas:[

        "T Nagar",

        "Velachery",

        "Anna Nagar",

        "Tambaram",

        "OMR",

        "Guindy",

        "Adyar",

        "Porur"
      ]
    },

    Coimbatore: {

      state:"Tamil Nadu",

      pincode:"641001",

      areas:[

        "Gandhipuram",

        "RS Puram",

        "Peelamedu",

        "Singanallur"
      ]
    },

    Madurai: {

      state:"Tamil Nadu",

      pincode:"625001",

      areas:[

        "KK Nagar",

        "Mattuthavani",

        "Anna Bus Stand"
      ]
    }
  };

  /* ===================================== */
  /* ===== LOCATION ===== */
  /* ===================================== */

  const handleLocation = () => {

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(

        () => {

          Swal.fire({

            icon:"success",

            title:"Location Accessed 📍",

            showConfirmButton:false,

            timer:1500
          });
        },

        () => {

          Swal.fire({

            icon:"error",

            title:"Location Permission Denied ❌"
          });
        }
      );

    }else{

      Swal.fire({

        icon:"error",

        title:"Geolocation Not Supported"
      });
    }
  };

  /* ===================================== */
  /* ===== TOTAL ===== */
  /* ===================================== */

  const subtotal =

    cart.reduce(

      (total,item)=>

        total +

        item.price *

        (item.qty || 1),

      0
    );

  const deliveryCharge =

    payment === "cod"

    ? 99

    : 0;

  const offerDiscount =

    payment === "upi"

    ? 120

    : payment === "card"

    ? 80

    : 0;

  const walletCashback =

    payment === "upi"

    ? 50

    : payment === "card"

    ? 30

    : 0;

  const total =

    subtotal +

    deliveryCharge -

    offerDiscount;

  /* ===================================== */
  /* ===== ORDER / PAYMENT ===== */
  /* ===================================== */

  const handleOrder = () => {

    if(

      !fullName ||

      !mobile ||

      !house ||

      !street ||

      !city ||

      !state ||

      !area ||

      !pincode

    ){

      Swal.fire({

        icon:"warning",

        title:"Fill All Address Fields ❌"
      });

      return;
    }

    if(

      payment === "upi"

      &&

      !upiId

    ){

      Swal.fire({

        icon:"warning",

        title:"Enter UPI ID ❌"
      });

      return;
    }

    if(

      payment === "card"

      &&

      (

        !cardNumber ||

        !cardName ||

        !expiry ||

        !cvv
      )
    ){

      Swal.fire({

        icon:"warning",

        title:"Fill Card Details ❌"
      });

      return;
    }

    if(cart.length === 0){

      Swal.fire({

        icon:"warning",

        title:"Cart is Empty 🛒"
      });

      return;
    }

    /* ===================================== */
    /* ===== COD ===== */
    /* ===================================== */

    if(payment === "cod"){

      Swal.fire({

        icon:"success",

        title:"Order Confirmed ✅",

        text:"Cash On Delivery Order Placed",

        confirmButtonColor:"#2563eb"
      });

      placeOrder();

      navigate("/orders");

      return;
    }

    /* ===================================== */
    /* ===== RAZORPAY ===== */
    /* ===================================== */

    const options = {

      key:"rzp_test_StEU73tHDmEJl8",

      amount:total * 100,

      currency:"INR",

      name:"Xephora",

      description:"Order Payment",

      image:
      "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",

      handler:function(response){

        Swal.fire({

          icon:"success",

          title:"Payment Successful 🎉",

          text:"Order placed successfully",

          confirmButtonColor:"#2563eb"
        });

        placeOrder();

        navigate("/orders");
      },

      prefill:{

        name:fullName,

        contact:mobile
      },

      theme:{

        color:"#2563eb"
      }
    };

    const razorpay =
    new window.Razorpay(options);

    razorpay.open();
  };

  return (

    <div className="checkoutPage">

      <div className="checkoutContainer">

        {/* ===================================== */}
        {/* ===== LEFT ===== */}
        {/* ===================================== */}

        <div className="checkoutLeft">

          <div className="checkoutHeading">

            <h1>

              Secure Checkout 🔒

            </h1>

            <p>

              Fast delivery • Safe payment • Premium shopping

            </p>

          </div>

          {/* ===================================== */}
          {/* ===== ADDRESS ===== */}
          {/* ===================================== */}

          <div className="checkoutBox">

            <h2>

              Delivery Address

            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e)=>
                setFullName(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e)=>
                setMobile(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Alternate Mobile Number"
              value={alternateMobile}
              onChange={(e)=>
                setAlternateMobile(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="House No / Flat No"
              value={house}
              onChange={(e)=>
                setHouse(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Street / Area"
              value={street}
              onChange={(e)=>
                setStreet(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Landmark"
              value={landmark}
              onChange={(e)=>
                setLandmark(
                  e.target.value
                )
              }
            />

            <div className="addressRow">

              <select

                value={city}

                onChange={(e)=>{

                  setCity(
                    e.target.value
                  );

                  setState(

                    locations[
                      e.target.value
                    ]?.state || ""
                  );

                  setPincode(

                    locations[
                      e.target.value
                    ]?.pincode || ""
                  );
                }}
              >

                <option value="">

                  Select City

                </option>

                <option value="Chennai">

                  Chennai

                </option>

                <option value="Coimbatore">

                  Coimbatore

                </option>

                <option value="Madurai">

                  Madurai

                </option>

              </select>

              <select

                value={state}

                onChange={(e)=>
                  setState(
                    e.target.value
                  )
                }
              >

                <option value="">

                  Select State

                </option>

                <option value="Tamil Nadu">

                  Tamil Nadu

                </option>

              </select>

            </div>

            <select

              value={area}

              onChange={(e)=>
                setArea(
                  e.target.value
                )
              }
            >

              <option>

                Select Area

              </option>

              {

                city &&

                locations[city]
                ?.areas.map(

                  (area,index)=>(

                    <option
                      key={index}
                    >

                      {area}

                    </option>
                  )
                )
              }

            </select>

            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={(e)=>
                setPincode(
                  e.target.value
                )
              }
            />

            <button
              className="locationBtn"
              onClick={handleLocation}
            >

              📍 Use Current Location

            </button>

          </div>

          {/* ===================================== */}
          {/* ===== PAYMENT ===== */}
          {/* ===================================== */}

          <div className="checkoutBox">

            <h2>

              Payment Method

            </h2>

            <label>

              <input
                type="radio"

                checked={
                  payment === "upi"
                }

                onChange={() =>
                  setPayment("upi")
                }
              />

              UPI Payment

            </label>

            <label>

              <input
                type="radio"

                checked={
                  payment === "card"
                }

                onChange={() =>
                  setPayment("card")
                }
              />

              Credit / Debit Card

            </label>

            <label>

              <input
                type="radio"

                checked={
                  payment === "cod"
                }

                onChange={() =>
                  setPayment("cod")
                }
              />

              Cash On Delivery

            </label>

            {

              payment === "upi"

              &&

              <div className="paymentForm">

                <input
                  type="text"

                  placeholder="Enter UPI ID"

                  value={upiId}

                  onChange={(e)=>
                    setUpiId(
                      e.target.value
                    )
                  }
                />

                <p className="offerText">

                  💸 Get ₹120 OFF + ₹50 Cashback

                </p>

              </div>
            }

            {

              payment === "card"

              &&

              <div className="paymentForm">

                <input
                  type="text"

                  placeholder="Card Number"

                  value={cardNumber}

                  onChange={(e)=>
                    setCardNumber(
                      e.target.value
                    )
                  }
                />

                <input
                  type="text"

                  placeholder="Card Holder Name"

                  value={cardName}

                  onChange={(e)=>
                    setCardName(
                      e.target.value
                    )
                  }
                />

                <div className="addressRow">

                  <input
                    type="text"

                    placeholder="MM/YY"

                    value={expiry}

                    onChange={(e)=>
                      setExpiry(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="password"

                    placeholder="CVV"

                    value={cvv}

                    onChange={(e)=>
                      setCvv(
                        e.target.value
                      )
                    }
                  />

                </div>

                <p className="offerText">

                  💳 Get ₹80 OFF + ₹30 Cashback

                </p>

              </div>
            }

            {

              payment === "cod"

              &&

              <p className="codText">

                 Cash On Delivery charge ₹99 applicable

              </p>
            }

          </div>

        </div>

        {/* ===================================== */}
        {/* ===== RIGHT ===== */}
        {/* ===================================== */}

        <div className="checkoutRight">

          <div className="summaryBox">

            <h2>

              Order Summary

            </h2>

            {

              cart.map((item)=>(

                <div
                  key={item.id}

                  className="checkoutItem"
                >

                  <img
                    src={item.image}
                    alt=""
                  />

                  <div>

                    <h4>

                      {item.name}

                    </h4>

                    <p>

                      Qty:
                      {" "}
                      {item.qty || 1}

                    </p>

                    <p>

                      ₹
                      {

                        item.price *

                        (item.qty || 1)
                      }

                    </p>

                  </div>

                </div>
              ))
            }

            <div className="priceDetails">

              <div className="priceRow">

                <span>

                  Subtotal

                </span>

                <span>

                  ₹{subtotal}

                </span>

              </div>

              <div className="priceRow">

                <span>

                  Delivery Charge

                </span>

                <span>

                  {

                    deliveryCharge === 0

                    ?

                    "FREE"

                    :

                    `₹${deliveryCharge}`
                  }

                </span>

              </div>

              <div className="priceRow offerRow">

                <span>

                  Offer Discount

                </span>

                <span>

                  - ₹{offerDiscount}

                </span>

              </div>

              {

                walletCashback > 0

                &&

                <div className="priceRow walletRow">

                  <span>

                    Wallet Cashback

                  </span>

                  <span>

                    + ₹{walletCashback}

                  </span>

                </div>
              }

              <div className="checkoutTotal">

                <h3>

                  Final Total

                </h3>

                <h2>

                  ₹{total}

                </h2>

              </div>

            </div>

            <button
              className="placeOrderBtn"
              onClick={handleOrder}
            >

              {

                payment === "cod"

                ?

                `Place Order • ₹${total}`

                :

                `Pay Now • ₹${total}`
              }

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;