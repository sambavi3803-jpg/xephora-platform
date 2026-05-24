// src/pages/Profile.js

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

import "./Profile.css";

export default function Profile() {

  const navigate =
    useNavigate();

  const [

    showHelp,

    setShowHelp

  ] = useState(false);

  const [

    showSettings,

    setShowSettings

  ] = useState(false);

  const [

    complaint,

    setComplaint

  ] = useState("");

  const {

    isLoggedIn,

    user,

    logout,

    orders,

    wishlist,

    cart

  } = useContext(StoreContext);

  /* ===================================== */
  /* ===== LOGOUT ===== */
  /* ===================================== */

  const handleLogout = () => {

    Swal.fire({

      title:"Logout ?",

      text:"Are you sure want to logout?",

      icon:"warning",

      showCancelButton:true,

      confirmButtonColor:"#ef4444",

      cancelButtonColor:"#2563eb",

      confirmButtonText:"Yes Logout"

    }).then((result)=>{

      if(result.isConfirmed){

        logout();

        navigate("/");

      }
    });
  };

  /* ===================================== */
  /* ===== LOGIN REQUIRED ===== */
  /* ===================================== */

  if(!isLoggedIn){

    return (

      <div className="profilePage">

        <div className="profileCard loginRequired">

          <div className="profileLock">

            🔒

          </div>

          <h1>

            Login Required

          </h1>

          <p>

            Please login to access
            your profile

          </p>

          <button
            className="homeBtn"

            onClick={() =>
              navigate("/login")
            }
          >

            Go To Login

          </button>

        </div>

      </div>
    );
  }

  return (

    <div className="profilePage">

      <div className="profileCard">

        {/* ===================================== */}
        {/* ===== TOP ===== */}
        {/* ===================================== */}

        <div className="profileTop">

          <div className="profileImage">

            {
              user?.name
              ?.charAt(0)
              ?.toUpperCase()
            }

          </div>

          <div className="profileDetails">

            <h1>

              {user?.name}

            </h1>

            <p>

              {user?.email}

            </p>

            <span>

              Premium Member ✨

            </span>

          </div>

        </div>

        {/* ===================================== */}
        {/* ===== STATS ===== */}
        {/* ===================================== */}

        <div className="profileStats">

          <div className="statCard">

            <h2>

              {orders.length}

            </h2>

            <p>

              Orders

            </p>

          </div>

          <div className="statCard">

            <h2>

              {wishlist.length}

            </h2>

            <p>

              Wishlist

            </p>

          </div>

          <div className="statCard">

            <h2>

              {cart.length}

            </h2>

            <p>

              Cart Items

            </p>

          </div>

        </div>

        {/* ===================================== */}
        {/* ===== ACCOUNT OPTIONS ===== */}
        {/* ===================================== */}

        <div className="profileOptions">

          {/* ===== ORDERS ===== */}

          <div
            className="optionCard"

            onClick={() =>
              navigate("/orders")
            }
          >

            <span>

              📦

            </span>

            <div>

              <h3>

                My Orders

              </h3>

              <p>

                Track all your orders

              </p>

            </div>

          </div>

          {/* ===== WISHLIST ===== */}

          <div
            className="optionCard"

            onClick={() =>
              navigate("/wishlist")
            }
          >

            <span>

              ❤️

            </span>

            <div>

              <h3>

                Wishlist

              </h3>

              <p>

                View saved products

              </p>

            </div>

          </div>

          {/* ===== WALLET ===== */}

          <div
            className="optionCard"

            onClick={() =>
              navigate("/wallet")
            }
          >

            <span>

              💳

            </span>

            <div>

              <h3>

                Wallet

              </h3>

              <p>

                Manage your balance

              </p>

            </div>

          </div>

          {/* ===== SETTINGS ===== */}

          <div
            className="optionCard"

            onClick={() =>
              setShowSettings(true)
            }
          >

            <span>

              ⚙️

            </span>

            <div>

              <h3>

                Account Settings

              </h3>

              <p>

                Privacy & security

              </p>

            </div>

          </div>

          {/* ===== HELP CENTER ===== */}

          <div
            className="optionCard"

            onClick={() =>
              setShowHelp(true)
            }
          >

            <span>

              🎧

            </span>

            <div>

              <h3>

                Help Center

              </h3>

              <p>

                Complaints & support

              </p>

            </div>

          </div>

        </div>

        {/* ===================================== */}
        {/* ===== ADDRESS ===== */}
        {/* ===================================== */}

        <div className="savedAddress">

          <h2>

            Saved Address 📍

          </h2>

          <p>

            Chennai, Tamil Nadu,
            India - 600001

          </p>

        </div>

        {/* ===================================== */}
        {/* ===== BUTTONS ===== */}
        {/* ===================================== */}

        <div className="profileButtons">

          <button
            className="homeBtn"

            onClick={() =>
              navigate("/")
            }
          >

            Continue Shopping

          </button>

          <button
            className="logoutBtn"

            onClick={handleLogout}
          >

            Logout

          </button>

        </div>

      </div>

      {/* ===================================== */}
      {/* ===== SETTINGS MODAL ===== */}
      {/* ===================================== */}

      {

      showSettings &&

      <div className="profileModal">

        <div className="modalBox">

          <h2>

            Account Settings ⚙️

          </h2>

          <input
            type="text"
            placeholder="Change Username"
          />

          <input
            type="password"
            placeholder="Change Password"
          />

          <input
            type="email"
            placeholder="Update Email"
          />

          <button
            className="saveBtn"

            onClick={() => {

              Swal.fire({

                icon:"success",

                title:"Settings Updated ✅"
              });

              setShowSettings(false);
            }}
          >

            Save Changes

          </button>

          <button
            className="closeBtn"

            onClick={() =>
              setShowSettings(false)
            }
          >

            Close

          </button>

        </div>

      </div>
      }

      {/* ===================================== */}
      {/* ===== HELP CENTER MODAL ===== */}
      {/* ===================================== */}

      {

      showHelp &&

      <div className="profileModal">

        <div className="modalBox">

          <h2>

            Help Center 🎧

          </h2>

          <textarea

            placeholder="Write your complaint here..."

            value={complaint}

            onChange={(e)=>
              setComplaint(
                e.target.value
              )
            }
          />

          <button
            className="saveBtn"

            onClick={() => {

              if(!complaint){

                Swal.fire({

                  icon:"warning",

                  title:"Enter Complaint ❌"
                });

                return;
              }

              Swal.fire({

                icon:"success",

                title:"Complaint Submitted ✅"
              });

              setComplaint("");

              setShowHelp(false);
            }}
          >

            Submit Complaint

          </button>

          <button
            className="closeBtn"

            onClick={() =>
              setShowHelp(false)
            }
          >

            Close

          </button>

        </div>

      </div>
      }

    </div>
  );
}