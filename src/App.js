// src/App.js

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import {
  useContext
} from "react";

/* ===== TOAST ===== */

import {
  ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

/* ===== CONTEXT ===== */

import {
  StoreContext
} from "./context/StoreContext";

/* ===== COMPONENTS ===== */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ===== PAGES ===== */

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Wallet from "./pages/Wallet";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";

/* ===== NEW PAGES ===== */

import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";


/* ===================================== */
/* ===== PROTECTED ROUTE ===== */
/* ===================================== */

function ProtectedRoute({
  children
}) {

  const {
    isLoggedIn
  } = useContext(StoreContext);

  if(!isLoggedIn){

    return <Navigate to="/login" />;
  }

  return children;
}

function App() {

  const {
    darkMode
  } = useContext(StoreContext);

  return (

    <div
      className={
        darkMode
        ? "dark"
        : ""
      }
    >

      <BrowserRouter>

        {/* ===== NAVBAR ===== */}

        <Navbar />

        {/* ===== ROUTES ===== */}

        <Routes>

          {/* ===================================== */}
          {/* ===== HOME ===== */}
          {/* ===================================== */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* ===================================== */}
          {/* ===== LOGIN ===== */}
          {/* ===================================== */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* ===================================== */}
          {/* ===== PROFILE ===== */}
          {/* ===================================== */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute>

                <Profile />

              </ProtectedRoute>
            }
          />

          {/* ===================================== */}
          {/* ===== WISHLIST ===== */}
          {/* ===================================== */}

          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>

                <Wishlist />

              </ProtectedRoute>
            }
          />

          {/* ===================================== */}
          {/* ===== WALLET ===== */}
          {/* ===================================== */}

          <Route
            path="/wallet"
            element={
              <ProtectedRoute>

                <Wallet />

              </ProtectedRoute>
            }
          />

          

          {/* ===================================== */}
          {/* ===== CART ===== */}
          {/* ===================================== */}

          <Route
            path="/cart"
            element={
              <ProtectedRoute>

                <Cart />

              </ProtectedRoute>
            }
          />

          {/* ===================================== */}
          {/* ===== CATEGORY ===== */}
          {/* ===================================== */}

          <Route
            path="/category/:name"
            element={<CategoryPage />}
          />

          {/* ===================================== */}
          {/* ===== PRODUCT DETAILS ===== */}
          {/* ===================================== */}

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* ===================================== */}
          {/* ===== CHECKOUT ===== */}
          {/* ===================================== */}

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>

                <Checkout />

              </ProtectedRoute>
            }
          />

          {/* ===================================== */}
          {/* ===== ORDER SUCCESS ===== */}
          {/* ===================================== */}

          <Route
            path="/success"
            element={
              <ProtectedRoute>

                <OrderSuccess />

              </ProtectedRoute>
            }
          />

          {/* ===================================== */}
          {/* ===== ORDERS ===== */}
          {/* ===================================== */}

          <Route
            path="/orders"
            element={
              <ProtectedRoute>

                <Orders />

              </ProtectedRoute>
            }
          />

          {/* ===================================== */}
          {/* ===== ADMIN ===== */}
          {/* ===================================== */}

          <Route
            path="/admin"
            element={<Admin />}
          />

        </Routes>

        {/* ===== FOOTER ===== */}

        <Footer />

        {/* ===== TOAST ===== */}

        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="dark"
        />

      </BrowserRouter>

    </div>
  );
}

export default App;