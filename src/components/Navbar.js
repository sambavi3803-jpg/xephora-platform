// src/components/Navbar.js

import {
  useNavigate
} from "react-router-dom";

import {
  useContext,
  useState
} from "react";

import {
  StoreContext
} from "../context/StoreContext";

import "./Navbar.css";

export default function Navbar() {

  const navigate =
    useNavigate();

  const {

    cart,

    darkMode,

    setDarkMode,

    products,

    isLoggedIn,

    user

  } = useContext(StoreContext);

  const [search, setSearch] =
    useState("");

  const [menuOpen, setMenuOpen] =
    useState(false);

  /* ===================================== */
  /* ===== FILTER PRODUCTS ===== */
  /* ===================================== */

  const filteredProducts =

    products.filter((item)=>

      item.name
      .toLowerCase()

      .includes(

        search.toLowerCase()
      )
    )

    .slice(0,6);

  /* ===================================== */
  /* ===== SEARCH ===== */
  /* ===================================== */

  const handleSearch = () => {

    if(search.trim() !== ""){

      navigate(

        `/category/${search.toLowerCase()}`
      );

      setMenuOpen(false);
    }
  };

  return (

    <div className="navbar">

      {/* ===================================== */}
      {/* ===== LOGO ===== */}
      {/* ===================================== */}

      <div
        className="logo"

        onClick={() =>
          navigate("/")
        }
      >

        <h1>

          XEPHORA

        </h1>

        <p>

          Premium Shopping

        </p>

      </div>

      {/* ===================================== */}
      {/* ===== MOBILE MENU ===== */}
      {/* ===================================== */}

      <div
        className="menuToggle"

        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {

          menuOpen

          ? "✖"

          : "☰"
        }

      </div>

      {/* ===================================== */}
      {/* ===== SEARCH ===== */}
      {/* ===================================== */}

      <div className="searchBoxWrapper">

        <div className="searchBox">

          <input

            type="text"

            placeholder=
            "Search products..."

            value={search}

            onChange={(e)=>
              setSearch(
                e.target.value
              )
            }

            onKeyDown={(e)=>

              e.key === "Enter"

              &&

              handleSearch()
            }
          />

          <button

            className="searchBtn"

            onClick={handleSearch}
          >

            Search

          </button>

        </div>

        {/* ===================================== */}
        {/* ===== SEARCH DROPDOWN ===== */}
        {/* ===================================== */}

        {

          search.length > 0 && (

            <div className="searchDropdown">

              {

                filteredProducts.length > 0

                ?

                filteredProducts.map((item)=>(

                  <div

                    key={item.id}

                    className="searchItem"

                    onClick={() => {

                      navigate(

                        `/product/${item.id}`
                      );

                      setSearch("");

                      setMenuOpen(false);
                    }}
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

                        ₹{item.price}

                      </p>

                    </div>

                  </div>
                ))

                :

                <div className="noSearch">

                  No Products Found 😢

                </div>
              }

            </div>
          )
        }

      </div>

      {/* ===================================== */}
      {/* ===== RIGHT MENU ===== */}
      {/* ===================================== */}

      <div

        className={

          menuOpen

          ?

          "navRight active"

          :

          "navRight"
        }
      >

        {/* ===== HOME ===== */}

        <span
          onClick={() => {

            navigate("/");

            setMenuOpen(false);
          }}
        >

          🏠 Home

        </span>

        {/* ===== LOGIN ===== */}

        {

          !isLoggedIn && (

            <span
              onClick={() => {

                navigate("/login");

                setMenuOpen(false);
              }}
            >

              👤 Login

            </span>
          )
        }

        {/* ===== PROFILE ===== */}

        {

          isLoggedIn && (

            <span
              onClick={() => {

                navigate("/profile");

                setMenuOpen(false);
              }}
            >

              🙍 Profile

            </span>
          )
        }

        {/* ===== WALLET ===== */}

        <span
          onClick={() => {

            navigate("/wallet");

            setMenuOpen(false);
          }}
        >

          💳 Wallet

        </span>

        {/* ===== WISHLIST ===== */}

        <span
          onClick={() => {

            navigate("/wishlist");

            setMenuOpen(false);
          }}
        >

          ❤️ Wishlist

        </span>

        {/* ===== ADMIN ===== */}

        {

          user?.email ===
          "admin@gmail.com"

          &&

          <span
            className="adminBtn"

            onClick={() => {

              navigate("/admin");

              setMenuOpen(false);
            }}
          >

            👑 Admin

          </span>
        }

        {/* ===== DARK MODE ===== */}

        <span
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >

          {

            darkMode

            ? "☀ Light"

            : "🌙 Dark"
          }

        </span>

        {/* ===== CART ===== */}

        <span
          className="cartNav"

          onClick={() => {

            navigate("/cart");

            setMenuOpen(false);
          }}
        >

          🛒 Cart

          <div className="cartCount">

            {cart.length}

          </div>

        </span>

      </div>

    </div>
  );
}