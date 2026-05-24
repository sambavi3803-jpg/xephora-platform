// src/pages/CategoryPage.js

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

import "./CategoryPage.css";

export default function CategoryPage() {

  const { name } =
    useParams();

  const navigate =
    useNavigate();

  const {

    products,

    addToCart,

    wishlist,

    addToWishlist,

    removeFromWishlist,

    isLoggedIn

  } = useContext(StoreContext);

  const [popup, setPopup] =
    useState("");

  /* ===================================== */
  /* ===== FILTER STATES ===== */
  /* ===================================== */

  const [sort, setSort] =
    useState("");

  const [rating, setRating] =
    useState("");

  const [price, setPrice] =
    useState("");

  /* ===================================== */
  /* ===== FILTER PRODUCTS ===== */
  /* ===================================== */

  let filteredProducts =

    products.filter(

      (p)=>

        p.category
        ?.toLowerCase()

        ===

        name.toLowerCase()

        ||

        p.name
        ?.toLowerCase()

        .includes(
          name.toLowerCase()
        )
    );

  /* ===================================== */
  /* ===== SORT ===== */
  /* ===================================== */

  if(sort === "low"){

    filteredProducts.sort(

      (a,b)=>

        a.price - b.price
    );
  }

  if(sort === "high"){

    filteredProducts.sort(

      (a,b)=>

        b.price - a.price
    );
  }

  if(sort === "rating"){

    filteredProducts.sort(

      (a,b)=>

        b.rating - a.rating
    );
  }

  /* ===================================== */
  /* ===== RATING ===== */
  /* ===================================== */

  if(rating){

    filteredProducts =

    filteredProducts.filter(

      (item)=>

        item.rating >=
        Number(rating)
    );
  }

  /* ===================================== */
  /* ===== PRICE ===== */
  /* ===================================== */

  if(price === "500"){

    filteredProducts =

    filteredProducts.filter(

      (item)=>

        item.price <= 500
    );
  }

  if(price === "1000"){

    filteredProducts =

    filteredProducts.filter(

      (item)=>

        item.price <= 1000
    );
  }

  if(price === "5000"){

    filteredProducts =

    filteredProducts.filter(

      (item)=>

        item.price <= 5000
    );
  }

  /* ===================================== */
  /* ===== CART ===== */
  /* ===================================== */

  const handleCart = (product) => {

    if(!isLoggedIn){

      navigate("/login");

      return;
    }

    addToCart(product);

    setPopup(

      `${product.name}
      added to cart `
    );

    setTimeout(() => {

      setPopup("");

    },2000);
  };

  /* ===================================== */
  /* ===== WISHLIST ===== */
  /* ===================================== */

  const handleWishlist = (product) => {

    if(!isLoggedIn){

      navigate("/login");

      return;
    }

    const alreadyExist =

      wishlist.find(

        (item)=>

          item.id === product.id
      );

    if(alreadyExist){

      removeFromWishlist(
        product.id
      );

    }else{

      addToWishlist(product);
    }
  };

  return (

    <div className="categoryPage">

      {/* ===================================== */}
      {/* ===== POPUP ===== */}
      {/* ===================================== */}

      {

        popup !== ""

        &&

        <div className="popup">

          {popup}

        </div>
      }

      {/* ===================================== */}
      {/* ===== HEADER ===== */}
      {/* ===================================== */}

      <div className="categoryHeader">

        <p className="categoryPath">

          Home

          {" > "}

          Category

          {" > "}

          <span>

            {name}

          </span>

        </p>

        <h1 className="categoryTitle">

          {name.toUpperCase()}

        </h1>

        <p className="categoryDesc">

          Explore our premium
          collection with best
          quality and exciting
          offers.

        </p>

      </div>

      {/* ===================================== */}
      {/* ===== MAIN LAYOUT ===== */}
      {/* ===================================== */}

      <div className="categoryLayout">

        {/* ===================================== */}
        {/* ===== SIDEBAR FILTER ===== */}
        {/* ===================================== */}

        <div className="filterSidebar">

          <h2 className="filterTitle">

            Filters

          </h2>

          {/* SORT */}

          <div className="filterGroup">

            <h3>

              Sort By

            </h3>

            <select
              value={sort}

              onChange={(e)=>
                setSort(
                  e.target.value
                )
              }
            >

              <option value="">

                Default

              </option>

              <option value="low">

                Low To High

              </option>

              <option value="high">

                High To Low

              </option>

              <option value="rating">

                Top Rated

              </option>

            </select>

          </div>

          {/* RATING */}

          <div className="filterGroup">

            <h3>

              Customer Rating

            </h3>

            <label className="filterOption">

              <div className="filterOptionLeft">

                <input
                  type="radio"

                  name="rating"

                  onChange={() =>
                    setRating("4")
                  }
                />

                4★ & Above

              </div>

            </label>

            <label className="filterOption">

              <div className="filterOptionLeft">

                <input
                  type="radio"

                  name="rating"

                  onChange={() =>
                    setRating("3")
                  }
                />

                3★ & Above

              </div>

            </label>

          </div>

          {/* PRICE */}

          <div className="filterGroup">

            <h3>

              Price Range

            </h3>

            <label className="filterOption">

              <div className="filterOptionLeft">

                <input
                  type="radio"

                  name="price"

                  onChange={() =>
                    setPrice("500")
                  }
                />

                Under ₹500

              </div>

            </label>

            <label className="filterOption">

              <div className="filterOptionLeft">

                <input
                  type="radio"

                  name="price"

                  onChange={() =>
                    setPrice("1000")
                  }
                />

                Under ₹1000

              </div>

            </label>

            <label className="filterOption">

              <div className="filterOptionLeft">

                <input
                  type="radio"

                  name="price"

                  onChange={() =>
                    setPrice("5000")
                  }
                />

                Under ₹5000

              </div>

            </label>

          </div>

          {/* CLEAR */}

          <button

            className="clearFilterBtn"

            onClick={() => {

              setSort("");

              setRating("");

              setPrice("");
            }}
          >

            Clear All Filters

          </button>

        </div>

        {/* ===================================== */}
        {/* ===== RIGHT SIDE ===== */}
        {/* ===================================== */}

        <div className="categoryRight">

          <p className="productCount">

            Showing

            {" "}

            <span>

              {filteredProducts.length}

            </span>

            {" "}

            products

          </p>

          {/* PRODUCTS */}

          <div className="categoryProducts">

            {

              filteredProducts.length > 0

              ?

              filteredProducts.map((p)=>(

                <div
                  className="categoryCard"

                  key={p.id}

                  onClick={() =>
                    navigate(
                      `/product/${p.id}`
                    )
                  }
                >

                  {/* WISHLIST */}

                  <div className="wishlistIcon">

                    <button

                      className="heartBtn"

                      onClick={(e)=>{

                        e.stopPropagation();

                        handleWishlist(p);
                      }}
                    >

                      {

                        wishlist.find(

                          (item)=>

                            item.id === p.id
                        )

                        ?

                        "❤"

                        :

                        "♡"
                      }

                    </button>

                  </div>

                  {/* IMAGE */}

                  <img
                    src={p.image}
                    alt={p.name}

                    className="categoryImage"
                  />

                  {/* NAME */}

                  <h3>

                    {p.name}

                  </h3>

                  {/* RATING */}

                  <p className="categoryRating">

                    ⭐ {p.rating}

                    ({p.reviews})

                  </p>

                  {/* PRICE */}

                  <p className="categoryPrice">

                    ₹{p.price}

                  </p>

                  {/* MRP */}

                  <p className="categoryMrp">

                    ₹{p.mrp}

                  </p>

                  {/* OFFER */}

                  <p className="categoryOffer">

                    {p.offer}

                  </p>

                  {/* BUTTON */}

                  <button

                    className="categoryBtn"

                    onClick={(e)=>{

                      e.stopPropagation();

                      handleCart(p);
                    }}
                  >

                    Add To Cart

                  </button>

                </div>

              ))

              :

              <h2 className="noProducts">

                No Products Found ❌

              </h2>
            }

          </div>

        </div>

      </div>

    </div>
  );
}