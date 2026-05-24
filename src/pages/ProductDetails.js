// src/pages/ProductDetails.js

import {
  useParams,
  useNavigate
} from "react-router-dom";

import {
  useContext,
  useState
} from "react";

import {
  StoreContext
} from "../context/StoreContext";

import "./ProductDetails.css";

export default function ProductDetails(){

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const {

    products,

    addToCart

  } = useContext(StoreContext);

  /* ===================================== */
  /* ===== FIND PRODUCT ===== */
  /* ===================================== */

  const product =
    products.find(

      (p)=>

        p.id === parseInt(id)
    );

  /* ===================================== */
  /* ===== PRODUCT NOT FOUND ===== */
  /* ===================================== */

  if(!product){

    return(

      <div
        style={{
          padding:"40px"
        }}
      >

        <h1>

          Product Not Found ❌

        </h1>

      </div>
    );
  }

  /* ===================================== */
  /* ===== CATEGORY CHECK ===== */
  /* ===================================== */

  const isFashion =

    product.category
    ?.toLowerCase()

    ===

    "fashion";

  const isFootwear =

    product.category
    ?.toLowerCase()

    ===

    "footwear";

  /* ===================================== */
  /* ===== STATES ===== */
  /* ===================================== */

  const [qty, setQty] =
    useState(1);

  const [selectedSize, setSelectedSize] =
    useState("M");

  const [mainImage, setMainImage] =
    useState(product.image);

  const [pincode, setPincode] =
    useState("");

  const [deliveryMsg, setDeliveryMsg] =
    useState("");

  /* ===================================== */
  /* ===== RELATED PRODUCTS ===== */
  /* ===================================== */

  const relatedProducts =

    products.filter(

      (item)=>

        item.category
        ?.toLowerCase()

        ===

        product.category
        ?.toLowerCase()

        &&

        item.id !== product.id
    )

    .slice(0,4);

  /* ===================================== */
  /* ===== DELIVERY CHECK ===== */
  /* ===================================== */

  const checkDelivery = () => {

    if(

      pincode.length !== 6

    ){

      setDeliveryMsg(

        "❌ Invalid Pincode"
      );

      return;
    }

    setDeliveryMsg(

      "✅ FREE Delivery Tomorrow 🚚"
    );
  };

  /* ===================================== */
  /* ===== BUY NOW ===== */
  /* ===================================== */

  const handleBuyNow = () => {

    addToCart({

      ...product,

      qty,

      selectedSize
    });

    navigate("/checkout");
  };

  return(

    <div className="detailsPage">

      {/* ===================================== */}
      {/* ===== MAIN CARD ===== */}
      {/* ===================================== */}

      <div className="detailsCard">

        {/* ===================================== */}
        {/* ===== IMAGE SECTION ===== */}
        {/* ===================================== */}

        <div className="detailsImageSection">

          <div className="detailsImage">

            {/* THUMBNAILS */}

            <div className="thumbnailColumn">

              <img
                src={product.image}
                alt=""

                loading="lazy"

                className={
                  mainImage === product.image
                  ? "activeThumb"
                  : ""
                }

                onClick={() =>
                  setMainImage(product.image)
                }
              />

              {

                relatedProducts
                .slice(0,3)
                .map((item)=>(

                  <img
                    key={item.id}

                    src={item.image}

                    alt=""

                    loading="lazy"

                    onClick={() =>
                      setMainImage(
                        item.image
                      )
                    }
                  />
                ))
              }

            </div>

            {/* MAIN IMAGE */}

            <div className="imageBg"></div>

            <img
              src={mainImage}

              alt={product.name}

              className="zoomImage"

              loading="lazy"
            />

          </div>

        </div>

        {/* ===================================== */}
        {/* ===== PRODUCT INFO ===== */}
        {/* ===================================== */}

        <div className="detailsInfo">

          <p className="brandName">

            Brand: Xephora

          </p>

          <h1>

            {product.name}

          </h1>

          <p className="detailsRating">

            ⭐ {product.rating}

            ({product.reviews} Reviews)

          </p>

          {/* PRICE */}

          <div className="priceBox">

            <h2>

              ₹ {product.price}

            </h2>

            <span>

              ₹ {product.mrp}

            </span>

          </div>

          {/* OFFER */}

          <p className="detailsOffer">

            {product.offer}

          </p>

          {/* STOCK */}

          <p className="stock">

            In Stock ✅

          </p>

          {/* DELIVERY */}

          <p className="delivery">

            FREE Delivery Tomorrow 🚚

          </p>

          {/* PINCODE */}

          <div className="pincodeBox">

            <input
              type="number"

              placeholder="Enter Pincode"

              value={pincode}

              onChange={(e)=>
                setPincode(
                  e.target.value
                )
              }
            />

            <button
              onClick={checkDelivery}
            >

              Check

            </button>

          </div>

          {

            deliveryMsg !== ""

            &&

            <p className="deliveryResult">

              {deliveryMsg}

            </p>
          }

          {/* DESCRIPTION */}

          <p className="detailsDesc">

            Premium quality product
            with amazing features,
            stylish modern design,
            comfortable usage and
            long-lasting durability.
            Perfect for daily use.

          </p>

          {/* SIZE */}

          {

            (isFashion || isFootwear)

            &&

            (

              <div className="selectSection">

                <h3>

                  Select Size

                </h3>

                <div className="sizeOptions">

                  {

                    ["S","M","L","XL"]
                    .map((size)=>(

                      <span
                        key={size}

                        className={
                          selectedSize === size
                          ? "activeSize"
                          : ""
                        }

                        onClick={() =>
                          setSelectedSize(size)
                        }
                      >

                        {size}

                      </span>
                    ))
                  }

                </div>

              </div>
            )
          }

          {/* QUANTITY */}

          <div className="qtyBox">

            <button
              onClick={() =>

                qty > 1 &&

                setQty(qty - 1)
              }
            >

              -

            </button>

            <span>

              {qty}

            </span>

            <button
              onClick={() =>
                setQty(qty + 1)
              }
            >

              +

            </button>

          </div>

          {/* BUTTONS */}

          <div className="buttonGroup">

            <button
              className="detailsBtn"

              onClick={() =>

                addToCart({

                  ...product,

                  qty,

                  selectedSize
                })
              }
            >

              Add To Cart

            </button>

            <button
              className="buyBtn"

              onClick={handleBuyNow}
            >

              Buy Now

            </button>

          </div>

          {/* EXTRA INFO */}

          <div className="extraInfo">

            <p>

              ✔ 7 Days Replacement

            </p>

            <p>

              ✔ Secure Payment

            </p>

            <p>

              ✔ Cash On Delivery Available

            </p>

            <p>

              ✔ Free Shipping Across India

            </p>

          </div>

        </div>

      </div>

      {/* ===================================== */}
      {/* ===== REVIEWS ===== */}
      {/* ===================================== */}

      <div className="reviewsSection">

        <h2 className="reviewTitle">

          Customer Reviews ⭐

        </h2>

        <div className="reviewGrid">

          <div className="reviewCard">

            <h3>

              Priya

            </h3>

            <p className="reviewRating">

              ⭐⭐⭐⭐⭐

            </p>

            <p>

              Amazing quality product.
              Worth the money 😍

            </p>

          </div>

          <div className="reviewCard">

            <h3>

              Arun

            </h3>

            <p className="reviewRating">

              ⭐⭐⭐⭐☆

            </p>

            <p>

              Fast delivery and
              premium packaging 🔥

            </p>

          </div>

          <div className="reviewCard">

            <h3>

              Keerthi

            </h3>

            <p className="reviewRating">

              ⭐⭐⭐⭐⭐

            </p>

            <p>

              Stylish design and
              comfortable to use ❤️

            </p>

          </div>

        </div>

      </div>

      {/* ===================================== */}
      {/* ===== RELATED PRODUCTS ===== */}
      {/* ===================================== */}

      <div className="relatedSection">

        <h2 className="relatedTitle">

          Related Products 🔥

        </h2>

        <div className="relatedProducts">

          {

            relatedProducts.length > 0

            ?

            relatedProducts.map((item)=>(

              <div
                className="relatedCard"

                key={item.id}

                onClick={() =>
                  navigate(
                    `/product/${item.id}`
                  )
                }
              >

                <img
                  src={item.image}

                  alt={item.name}

                  loading="lazy"
                />

                <h3>

                  {item.name}

                </h3>

                <p className="relatedPrice">

                  ₹{item.price}

                </p>

              </div>

            ))

            :

            <p className="noRelated">

              No Related Products 😢

            </p>
          }

        </div>

      </div>

    </div>
  );
}