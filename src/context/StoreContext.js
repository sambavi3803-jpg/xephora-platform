import {
  createContext,
  useState,
  useEffect
} from "react";

import Swal from "sweetalert2";

/* ===================================== */
/* ===== STATIC PRODUCTS ===== */
/* ===================================== */

import products
from "../data/products";

import {
  placeOrderApi,
  getOrdersApi
} from "../api/orderApi";

export const StoreContext =
  createContext();

export default function StoreProvider({
  children
}) {

  /* ===================================== */
  /* ===== CART ===== */
  /* ===================================== */

  const [cart, setCart] =
    useState(

      JSON.parse(

        localStorage.getItem(
          "cart"
        )

      ) || []
    );

  /* ===================================== */
  /* ===== ORDERS ===== */
  /* ===================================== */

  const [orders, setOrders] =
    useState([]);

  /* ===================================== */
  /* ===== USER ===== */
  /* ===================================== */

  const [user, setUser] =
    useState(

      JSON.parse(

        localStorage.getItem(
          "user"
        )

      ) || null
    );

  /* ===================================== */
  /* ===== LOGIN STATUS ===== */
  /* ===================================== */

  const [isLoggedIn, setIsLoggedIn] =
    useState(

      !!localStorage.getItem(
        "user"
      )
    );

  /* ===================================== */
  /* ===== DARK MODE ===== */
  /* ===================================== */

  const [darkMode, setDarkMode] =
    useState(

      JSON.parse(

        localStorage.getItem(
          "darkMode"
        )

      ) || false
    );

  /* ===================================== */
  /* ===== WISHLIST ===== */
  /* ===================================== */

  const [wishlist, setWishlist] =
    useState(

      JSON.parse(

        localStorage.getItem(
          "wishlist"
        )

      ) || []
    );

  /* ===================================== */
  /* ===== WALLET ===== */
  /* ===================================== */

  const [wallet, setWallet] =
    useState(5000);

  /* ===================================== */
  /* ===== LOCAL STORAGE ===== */
  /* ===================================== */

  useEffect(()=>{

    localStorage.setItem(

      "cart",

      JSON.stringify(cart)
    );

  },[cart]);

  useEffect(()=>{

    localStorage.setItem(

      "wishlist",

      JSON.stringify(wishlist)
    );

  },[wishlist]);

  useEffect(()=>{

    localStorage.setItem(

      "darkMode",

      JSON.stringify(darkMode)
    );

  },[darkMode]);

  /* ===================================== */
  /* ===== ADD TO CART ===== */
  /* ===================================== */

  const addToCart = (item) => {

    const exist = cart.find(
      (p) => p.id === item.id
    );

    if(exist){

      setCart(

        cart.map((p)=>

          p.id === item.id

            ? {
                ...p,
                qty:p.qty + 1
              }

            : p
        )
      );

    }else{

      setCart([

        ...cart,

        {
          ...item,
          qty:item.qty || 1
        }

      ]);
    }

    Swal.fire({

      icon:"success",

      title:"Added to Cart 🛒",

      text:"Product added successfully",

      showConfirmButton:false,

      timer:1500

    });
  };

  /* ===================================== */
  /* ===== INCREASE QTY ===== */
  /* ===================================== */

  const increaseQty = (id) => {

    setCart(

      cart.map((p)=>

        p.id === id

          ? {
              ...p,
              qty:p.qty + 1
            }

          : p
      )
    );
  };

  /* ===================================== */
  /* ===== DECREASE QTY ===== */
  /* ===================================== */

  const decreaseQty = (id) => {

    setCart(

      cart.map((p)=>

        p.id === id

          ? {
              ...p,
              qty:
              p.qty > 1
              ? p.qty - 1
              : 1
            }

          : p
      )
    );
  };

  /* ===================================== */
  /* ===== REMOVE FROM CART ===== */
  /* ===================================== */

  const removeFromCart = (id) => {

    setCart(

      cart.filter((p)=>

        p.id !== id
      )
    );

    Swal.fire({

      icon:"success",

      title:"Removed From Cart 🗑️",

      showConfirmButton:false,

      timer:1200

    });
  };

  /* ===================================== */
  /* ===== PLACE ORDER ===== */
  /* ===================================== */

  const placeOrder =
  async(paymentMethod = "cod") => {

    if(!user){

      Swal.fire({

        icon:"warning",

        title:"Please Login First",

        text:"Login to place your order"

      });

      return;
    }

    const newOrder = {

      userId:

      user._id ||

      user.id,

      items:cart,

      payment:
      paymentMethod,

      total:

        cart.reduce(

          (total,item)=>

            total +

            item.price *

            item.qty,

          0
        ),

      date:
      new Date()
      .toLocaleDateString(),

      status:
      "Shipped 🚚"
    };

    try{

      const savedOrder =
      await placeOrderApi(
        newOrder
      );

      setOrders((prev)=>([

        savedOrder,

        ...prev
      ]));

      /* ===================================== */
      /* ===== WALLET CASHBACK ===== */
      /* ===================================== */

      if(paymentMethod === "upi"){

        const updatedWallet =
        wallet + 50;

        setWallet(updatedWallet);

        Swal.fire({

          icon:"success",

          title:"₹50 Cashback Added 💰",

          text:"Cashback added to wallet",

          timer:1800,

          showConfirmButton:false
        });
      }

      if(paymentMethod === "card"){

        const updatedWallet =
        wallet + 30;

        setWallet(updatedWallet);

        Swal.fire({

          icon:"success",

          title:"₹30 Cashback Added 💰",

          text:"Cashback added to wallet",

          timer:1800,

          showConfirmButton:false
        });
      }

      setCart([]);

      Swal.fire({

        icon:"success",

        title:"Order Placed 🎉",

        text:"Your order placed successfully",

        confirmButtonColor:"#2563eb"

      });

    }

    catch(err){

      console.log(err);

      Swal.fire({

        icon:"error",

        title:"Something Went Wrong"

      });
    }
  };

  /* ===================================== */
  /* ===== GET ORDERS ===== */
  /* ===================================== */

  const fetchOrders =
  async(userId)=>{

    try{

      const data =
      await getOrdersApi(
        userId
      );

      setOrders(
        data || []
      );

    }

    catch(err){

      console.log(err);

      setOrders([]);
    }
  };

  /* ===================================== */
  /* ===== ADD TO WISHLIST ===== */
  /* ===================================== */

  const addToWishlist = (item) => {

    const exist = wishlist.find(
      (p) => p.id === item.id
    );

    if(!exist){

      setWishlist([

        ...wishlist,

        item
      ]);

      Swal.fire({

        icon:"success",

        title:"Added to Wishlist ❤️",

        text:"Product saved successfully",

        showConfirmButton:false,

        timer:1500

      });

    }else{

      Swal.fire({

        icon:"info",

        title:"Already in Wishlist ❤️",

        showConfirmButton:false,

        timer:1200

      });
    }
  };

  /* ===================================== */
  /* ===== REMOVE WISHLIST ===== */
  /* ===================================== */

  const removeFromWishlist = (id) => {

    setWishlist(

      wishlist.filter((p)=>

        p.id !== id
      )
    );

    Swal.fire({

      icon:"success",

      title:"Removed From Wishlist ❌",

      showConfirmButton:false,

      timer:1200

    });
  };

  /* ===================================== */
  /* ===== LOGIN ===== */
  /* ===================================== */

  const login = (userData) => {

    localStorage.setItem(

      "user",

      JSON.stringify(userData)
    );

    setUser(userData);

    setIsLoggedIn(true);

    Swal.fire({

      icon:"success",

      title:"Login Successful 😎",

      showConfirmButton:false,

      timer:1500

    });
  };

  /* ===================================== */
  /* ===== LOGOUT ===== */
  /* ===================================== */

  const logout = () => {

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "cart"
    );

    localStorage.removeItem(
      "wishlist"
    );

    setUser(null);

    setIsLoggedIn(false);

    setCart([]);

    setWishlist([]);

    setOrders([]);

    Swal.fire({

      icon:"success",

      title:"Logged Out 👋",

      showConfirmButton:false,

      timer:1200

    });
  };

  return (

    <StoreContext.Provider

      value={{

        products,

        cart,

        addToCart,

        increaseQty,

        decreaseQty,

        removeFromCart,

        orders,

        placeOrder,

        fetchOrders,

        user,

        isLoggedIn,

        login,

        logout,

        darkMode,

        setDarkMode,

        wishlist,

        addToWishlist,

        removeFromWishlist,

        wallet,

        setWallet
      }}
    >

      {children}

    </StoreContext.Provider>
  );
}