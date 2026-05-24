// src/pages/Login.js

import {
  useState,
  useContext
} from "react";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

import Swal from "sweetalert2";

import {
  StoreContext
} from "../context/StoreContext";

import {
  registerUser,
  loginUser
} from "../api/authApi";

import "./Login.css";

export default function Login() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const {
    login
  } = useContext(StoreContext);

  /* ===================================== */
  /* ===== STATES ===== */
  /* ===================================== */

  const [isSignup, setIsSignup] =
    useState(false);

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  /* ===================================== */
  /* ===== LOGIN MESSAGE ===== */
  /* ===================================== */

  const showMessage =
    location.search.includes("login");

  /* ===================================== */
  /* ===== SUBMIT ===== */
  /* ===================================== */

  const handleSubmit =
    async() => {

      try{

        setError("");

        /* ===================================== */
        /* ===== VALIDATIONS ===== */
        /* ===================================== */

        if(!email || !password){

          Swal.fire({

            icon:"warning",

            title:"Fill Email & Password ❌"
          });

          return;
        }

        /* ===================================== */
        /* ===== SIGNUP ===== */
        /* ===================================== */

        if(isSignup){

          if(
            !name ||
            !phone ||
            !email ||
            !password
          ){

            Swal.fire({

              icon:"warning",

              title:"Please Fill All Fields ❌"
            });

            return;
          }

          /* ===== PHONE VALIDATION ===== */

          if(phone.length !== 10){

            Swal.fire({

              icon:"warning",

              title:"Enter Valid Mobile Number 📱"
            });

            return;
          }

          /* ===== PASSWORD VALIDATION ===== */

          if(password.length < 8){

            Swal.fire({

              icon:"warning",

              title:
              "Password must be 8 characters 🔒"
            });

            return;
          }

          /* ===== REGISTER ===== */

          const data =
            await registerUser({

              name,

              phone,

              email,

              password
            });

          /* ===== SAVE TOKEN ===== */

          localStorage.setItem(

            "token",

            data.token
          );

          /* ===== SAVE USER ===== */

          localStorage.setItem(

            "user",

            JSON.stringify(
              data.user
            )
          );

          /* ===== CONTEXT LOGIN ===== */

          login(data.user);

          /* ===== SUCCESS ===== */

          Swal.fire({

            icon:"success",

            title:"Account Created 🎉",

            text:"Signup Successful",

            background:"#1e293b",

            color:"#fff",

            confirmButtonColor:"#ff9900"
          });

          navigate("/profile");

          return;
        }

        /* ===================================== */
        /* ===== LOGIN ===== */
        /* ===================================== */

        const data =
          await loginUser({

            email,

            password
          });

        /* ===== SAVE TOKEN ===== */

        localStorage.setItem(

          "token",

          data.token
        );

        /* ===== SAVE USER ===== */

        localStorage.setItem(

          "user",

          JSON.stringify(
            data.user
          )
        );

        /* ===== CONTEXT LOGIN ===== */

        login(data.user);

        /* ===== SUCCESS ===== */

        Swal.fire({

          icon:"success",

          title:"Login Successful 😎",

          text:
          `Welcome Back ${data.user.name}`,

          background:"#1e293b",

          color:"#fff",

          confirmButtonColor:"#ff9900"
        });

        navigate("/profile");

      }

      catch(err){

        console.log(err);

        const message =

          err.response?.data?.message ||

          "Something Went Wrong ❌";

        setError(message);

        Swal.fire({

          icon:"error",

          title:"Oops...",

          text:message,

          background:"#1e293b",

          color:"#fff",

          confirmButtonColor:"#ff9900"
        });
      }
    };

  return (

    <div className="loginPage">

      <div className="loginBox">

        {/* ===== TITLE ===== */}

        <h1>

          {
            isSignup
            ? "Create Account"
            : "Welcome Back"
          }

        </h1>

        {/* ===== SUBTITLE ===== */}

        <p className="loginText">

          {
            isSignup
            ? "Signup to continue shopping"
            : "Login to continue shopping"
          }

        </p>

        {/* ===== LOGIN ALERT ===== */}

        {

          showMessage && (

            <div className="loginAlert">

              Please Login to Continue

            </div>
          )
        }

        {/* ===== ERROR ===== */}

        {

          error && (

            <div className="loginAlert">

              {error}

            </div>
          )
        }

        {/* ===== NAME ===== */}

        {

          isSignup && (

            <input
              type="text"

              placeholder="Enter Full Name"

              value={name}

              onChange={(e)=>
                setName(
                  e.target.value
                )
              }
            />
          )
        }

        {/* ===== PHONE ===== */}

        {

          isSignup && (

            <div className="phoneInput">

              <span className="flag">

                +91

              </span>

              <input
                type="number"

                placeholder="Enter Phone Number"

                value={phone}

                onChange={(e)=>
                  setPhone(
                    e.target.value
                  )
                }
              />

            </div>
          )
        }

        {/* ===== EMAIL ===== */}

        <input
          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        {/* ===== PASSWORD ===== */}

        <div className="passwordBox">

          <input
            type={
              showPassword
              ? "text"
              : "password"
            }

            placeholder="Enter Password"

            value={password}

            onChange={(e)=>
              setPassword(
                e.target.value
              )
            }
          />

          <span
            className="showPass"

            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >

            👁

          </span>

        </div>

        {/* ===== PASSWORD NOTE ===== */}

        {

          isSignup && (

            <p className="passwordNote">

              Password must be at least
              8 characters

            </p>
          )
        }

        {/* ===== BUTTON ===== */}

        <button
          className="loginBtn"

          onClick={handleSubmit}
        >

          {
            isSignup
            ? "Create Account"
            : "Login"
          }

        </button>

        {/* ===== TOGGLE ===== */}

        <div className="signupText">

          {
            isSignup
            ? "Already have an account?"
            : "Don't have an account?"
          }

          <span
            onClick={() => {

              setIsSignup(!isSignup);

              setError("");
            }}
          >

            {
              isSignup
              ? " Login"
              : " Signup"
            }

          </span>

        </div>

      </div>

    </div>
  );
}