// src/pages/Login.js

import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { StoreContext } from "../context/StoreContext";

import "./Login.css";

export default function Login() {

  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(StoreContext);

  const [isSignup, setIsSignup] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    password: ""
  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (

      !formData.email ||

      !formData.password
    ) {

      alert("Please fill all fields");

      return;
    }

    /* ========================= */
    /* ===== SIGNUP ===== */
    /* ========================= */

    if (isSignup) {

      localStorage.setItem(

        "xephoraUser",

        JSON.stringify(formData)
      );

      alert("Account Created Successfully 🎉");

      setIsLoggedIn(true);

      navigate("/");
    }

    /* ========================= */
    /* ===== LOGIN ===== */
    /* ========================= */

    else {

      const savedUser = JSON.parse(

        localStorage.getItem("xephoraUser")
      );

      if (

        savedUser &&

        savedUser.email === formData.email &&

        savedUser.password === formData.password
      ) {

        alert("Login Successful 🎉");

        setIsLoggedIn(true);

        navigate("/");
      }

      else {

        alert("Oops! Something went wrong 😢");
      }
    }
  };

  return (

    <div className="loginPage">

      <div className="loginBox">

        <h1>

          {

            isSignup

            ? "Create Account"

            : "Welcome Back"
          }

        </h1>

        <p>

          {

            isSignup

            ? "Signup to continue shopping"

            : "Login to continue shopping"
          }

        </p>

        <form onSubmit={handleSubmit}>

          {

            isSignup && (

              <input

                type="text"

                name="name"

                placeholder="Enter your name"

                value={formData.name}

                onChange={handleChange}

              />
            )
          }

          <input

            type="email"

            name="email"

            placeholder="Enter your email"

            value={formData.email}

            onChange={handleChange}

          />

          <div className="passwordBox">

            <input

              type={

                showPassword

                ? "text"

                : "password"
              }

              name="password"

              placeholder="Enter your password"

              value={formData.password}

              onChange={handleChange}

            />

            <span

              className="showBtn"

              onClick={() =>

                setShowPassword(

                  !showPassword
                )
              }
            >

              {

                showPassword

                ? "🙈"

                : "👁️"
              }

            </span>

          </div>

          <button type="submit">

            {

              isSignup

              ? "Create Account"

              : "Login"
            }

          </button>

        </form>

        <div className="switchAuth">

          {

            isSignup

            ? "Already have an account?"

            : "Don't have an account?"
          }

          <span

            onClick={() =>

              setIsSignup(

                !isSignup
              )
            }
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