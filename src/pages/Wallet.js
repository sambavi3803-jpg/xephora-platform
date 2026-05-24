// src/pages/Wallet.js

import {
  useContext
} from "react";

import Swal from "sweetalert2";

import {
  StoreContext
} from "../context/StoreContext";

import {
  FaWallet,
  FaGift,
  FaArrowDown,
  FaPlus,
  FaMoneyBillWave
} from "react-icons/fa";

import "./Wallet.css";

export default function Wallet() {

  const {

    wallet,

    setWallet

  } = useContext(StoreContext);

  /* ===================================== */
  /* ===== ADD MONEY ===== */
  /* ===================================== */

  const handleAddMoney = async() => {

    const { value } = await Swal.fire({

      title:"Add Money 💰",

      input:"number",

      inputLabel:"Enter Amount",

      inputPlaceholder:"Enter amount",

      confirmButtonText:"Add Money",

      confirmButtonColor:"#2563eb",

      showCancelButton:true
    });

    if(!value) return;

    const amount =
    Number(value);

    if(amount <= 0){

      Swal.fire({

        icon:"error",

        title:"Invalid Amount ❌"
      });

      return;
    }

    const updatedWallet =
    wallet + amount;

    setWallet(updatedWallet);

    Swal.fire({

      icon:"success",

      title:`₹${amount} Added 💰`,

      text:"Money added to wallet",

      confirmButtonColor:"#2563eb"
    });
  };

  /* ===================================== */
  /* ===== WITHDRAW ===== */
  /* ===================================== */

  const handleWithdraw = async() => {

    const { value } = await Swal.fire({

      title:"Withdraw Money 💸",

      input:"number",

      inputLabel:"Enter Amount",

      inputPlaceholder:"Enter amount",

      confirmButtonText:"Withdraw",

      confirmButtonColor:"#2563eb",

      showCancelButton:true
    });

    if(!value) return;

    const amount =
    Number(value);

    if(amount <= 0){

      Swal.fire({

        icon:"error",

        title:"Invalid Amount ❌"
      });

      return;
    }

    if(wallet < amount){

      Swal.fire({

        icon:"warning",

        title:"Insufficient Balance ❌"
      });

      return;
    }

    const updatedWallet =
    wallet - amount;

    setWallet(updatedWallet);

    Swal.fire({

      icon:"success",

      title:`₹${amount} Withdrawn 💸`,

      confirmButtonColor:"#2563eb"
    });
  };

  return (

    <div className="walletPage">

      <div className="walletContainer">

        {/* ===================================== */}
        {/* ===== WALLET CARD ===== */}
        {/* ===================================== */}

        <div className="walletCard">

          <div className="walletTop">

            <div>

              <p className="walletLabel">

                Available Balance

              </p>

              <h1>

                ₹ {wallet}

              </h1>

            </div>

            <div className="walletIcon">

              <FaWallet />

            </div>

          </div>

          <div className="walletBottom">

            <div className="walletInfo">

              <FaGift />

              <span>

                Cashback Rewards Active

              </span>

            </div>

            <div className="walletInfo">

              <FaArrowDown />

              <span>

                Instant Cashback Credits

              </span>

            </div>

          </div>

          {/* ===================================== */}
          {/* ===== BUTTONS ===== */}
          {/* ===================================== */}

          <div className="walletButtons">

            <button
              type="button"
              className="walletBtn addBtn"
              onClick={handleAddMoney}
            >

              <FaPlus />

              Add Money

            </button>

            <button
              type="button"
              className="walletBtn withdrawBtn"
              onClick={handleWithdraw}
            >

              <FaMoneyBillWave />

              Withdraw

            </button>

          </div>

        </div>

        {/* ===================================== */}
        {/* ===== OFFERS ===== */}
        {/* ===================================== */}

        <div className="walletOffers">

          <h2>

            Wallet Offers 🎉

          </h2>

          <div className="offerCard">

            <h3>

              UPI Payment Offer

            </h3>

            <p>

              Get ₹50 cashback on every UPI order.

            </p>

          </div>

          <div className="offerCard">

            <h3>

              Card Payment Offer

            </h3>

            <p>

              Get ₹30 cashback on Credit/Debit card payments.

            </p>

          </div>

          <div className="offerCard">

            <h3>

              Premium Delivery

            </h3>

            <p>

              FREE delivery on prepaid orders.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}