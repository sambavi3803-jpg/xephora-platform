import {
  useContext,
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import Skeleton
from "react-loading-skeleton";

import
"react-loading-skeleton/dist/skeleton.css";

import {
  StoreContext
} from "../context/StoreContext";

import "./Home.css";

export default function Home() {

  const navigate =
    useNavigate();

  const {

    products,

    addToCart,

    addToWishlist,

    removeFromWishlist,

    wishlist,

    isLoggedIn

  } = useContext(StoreContext);

  /* ===================================== */
  /* ===== HERO SLIDER ===== */
  /* ===================================== */

  const heroImages = [

"https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",

"https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1200",

"https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

  const [hero, setHero] =
    useState(0);

  useEffect(() => {

    const autoSlide =
      setInterval(() => {

        setHero((prev) =>

          (prev + 1) %

          heroImages.length
        );

      }, 3000);

    return () =>
      clearInterval(autoSlide);

  }, []);

  /* ===================================== */
  /* ===== LOADING ===== */
  /* ===================================== */

  const [loading,setLoading] =
  useState(true);

  useEffect(()=>{

    setTimeout(()=>{

      setLoading(false);

    },1500);

  },[]);

  /* ===================================== */
  /* ===== POPUP ===== */
  /* ===================================== */

  const [popup, setPopup] =
    useState("");

  /* ===================================== */
  /* ===== ADD TO CART ===== */
  /* ===================================== */

  const handleCart = (item) => {

    if(!isLoggedIn){

      navigate(
        "/login?message=login"
      );

      return;
    }

    addToCart(item);

    setPopup(
      `${item.name} Added To Cart 🛒`
    );

    setTimeout(() => {

      setPopup("");

    }, 2500);
  };

  /* ===================================== */
  /* ===== WISHLIST ===== */
  /* ===================================== */

  const handleWishlist = (
    e,
    item
  ) => {

    e.preventDefault();

    e.stopPropagation();

    if(!isLoggedIn){

      navigate(
        "/login?message=login"
      );

      return;
    }

    const exist =
      wishlist.find(
        (p) => p.id === item.id
      );

    if(exist){

      removeFromWishlist(item.id);

      setPopup(
        `${item.name} Removed ❌`
      );

    }else{

      addToWishlist(item);

      setPopup(
        `${item.name} Added To Wishlist ❤️`
      );
    }

    setTimeout(() => {

      setPopup("");

    }, 2500);
  };

  return (

    <div className="home">

      {/* ===================================== */}
      {/* ===== POPUP ===== */}
      {/* ===================================== */}

      {

        popup !== "" && (

          <div className="popup">

            {popup}

          </div>
        )
      }

      {/* ===================================== */}
      {/* ===== HERO ===== */}
      {/* ===================================== */}

      <div className="heroBanner">

        <img
          src={heroImages[hero]}
          alt=""

          loading="lazy"
        />

        <button
          className="heroArrow leftArrow"

          onClick={() =>

            setHero(

              hero === 0

              ?

              heroImages.length - 1

              :

              hero - 1
            )
          }
        >

          ❮

        </button>

        <button
          className="heroArrow rightArrow"

          onClick={() =>

            setHero(

              (hero + 1) %

              heroImages.length
            )
          }
        >

          ❯

        </button>

        <div className="heroOverlay">

          <span className="offerTag">

            UP TO 70% OFF

          </span>

          <h1>

            Mega Fashion Sale

          </h1>

          <p>

            Trending styles,
            gadgets &
            essentials at best prices.

          </p>

          <button
            className="shopNowBtn"

            onClick={() => {

              if(!isLoggedIn){

                navigate(
                  "/login?message=login"
                );

                return;
              }

              navigate(
                "/category/fashion"
              );
            }}
          >

            Shop Now

          </button>

        </div>

        <div className="heroDots">

          {

            heroImages.map((_,index)=>(

              <span

                key={index}

                className={

                  hero === index

                  ?

                  "dot activeDot"

                  :

                  "dot"
                }

                onClick={() =>
                  setHero(index)
                }
              >

              </span>
            ))
          }

        </div>

      </div>

      {/* ===================================== */}
      {/* ===== CATEGORIES ===== */}
      {/* ===================================== */}

      <div className="realCategories">

        <div
          className="realCategoryCard"

          onClick={() =>
            navigate(
              "/category/fashion"
            )
          }
        >

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900"
            alt=""

            loading="lazy"
          />

          <p>

            Fashion

          </p>

        </div>

        <div
          className="realCategoryCard"

          onClick={() =>
            navigate(
              "/category/kids"
            )
          }
        >

          <img
            src="https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""

            loading="lazy"
          />

          <p>

            Kids

          </p>

        </div>

        <div
          className="realCategoryCard"

          onClick={() =>
            navigate(
              "/category/toys"
            )
          }
        >

          <img
            src="https://m.media-amazon.com/images/I/51uS6S4fzBL._AC_UF350,350_QL80_.jpg"
            alt=""

            loading="lazy"
          />

          <p>

            Toys

          </p>

        </div>

        <div
          className="realCategoryCard"

          onClick={() =>
            navigate(
              "/category/accessories"
            )
          }
        >

          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900"
            alt=""

            loading="lazy"
          />

          <p>

            Accessories

          </p>

        </div>

        <div
          className="realCategoryCard"

          onClick={() =>
            navigate(
              "/category/footwear"
            )
          }
        >

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900"
            alt=""

            loading="lazy"
          />

          <p>

            Footwear

          </p>

        </div>

        <div
          className="realCategoryCard"

          onClick={() =>
            navigate(
              "/category/beauty"
            )
          }
        >

          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900"
            alt=""

            loading="lazy"
          />

          <p>

            Beauty

          </p>

        </div>

        <div
          className="realCategoryCard"

          onClick={() =>
            navigate(
              "/category/books"
            )
          }
        >

          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=900"
            alt=""

            loading="lazy"
          />

          <p>

            Books

          </p>

        </div>

        <div
          className="realCategoryCard"

          onClick={() =>
            navigate(
              "/category/electronics"
            )
          }
        >

          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900"
            alt=""

            loading="lazy"
          />

          <p>

            Electronics

          </p>

        </div>

      </div>

      {/* ===================================== */}
      {/* ===== PRODUCTS ===== */}
      {/* ===================================== */}

      <div className="section">

        <h2>

          Trending Products

        </h2>

        <div className="productsGrid">

          {

            loading ?

            [...Array(8)].map((_,index)=>(

              <div
                className="skeletonCard"
                key={index}
              >

                <Skeleton height={250} />

                <Skeleton
                  height={30}
                  style={{
                    marginTop:"10px"
                  }}
                />

                <Skeleton
                  height={20}
                  style={{
                    marginTop:"10px"
                  }}
                />

                <Skeleton
                  height={40}
                  style={{
                    marginTop:"15px"
                  }}
                />

              </div>
            ))

            :

            products.map((p) => (

              <div
                className="productCard"

                key={p.id}

                onClick={() => {

                  if(!isLoggedIn){

                    navigate(
                      "/login?message=login"
                    );

                    return;
                  }

                  navigate(
                    `/product/${p.id}`
                  );
                }}
              >

                <span className="topBadge">

                  Bestseller

                </span>

                <div className="wishlistIcon">

                  <button
                    className="heartBtn"

                    style={{

                      color:

                      wishlist.find(
                        (i)=> i.id === p.id
                      )

                      ? "red"

                      : "#bbb"
                    }}

                    onClick={(e)=>{

                      handleWishlist(
                        e,
                        p
                      );
                    }}
                  >

                    ♥

                  </button>

                </div>

                <img
                  src={p.image}
                  alt=""

                  loading="lazy"
                />

                <h3>

                  {p.name}

                </h3>

                <p className="price">

                  ₹{p.price}

                </p>

                <p className="mrp">

                  ₹{p.mrp}

                </p>

                <p className="rating">

                  ⭐ {p.rating}

                  ({p.reviews})

                </p>

                <p className="offer">

                  {p.offer}

                </p>

                <button
                  className="cartBtn"

                  onClick={(e) => {

                    e.preventDefault();

                    e.stopPropagation();

                    handleCart(p);
                  }}
                >

                  Add To Cart

                </button>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}