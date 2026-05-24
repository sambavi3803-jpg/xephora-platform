import "./Footer.css";

export default function Footer(){

  return(

    <footer className="footer">

      {/* ===== TOP ===== */}

      <div className="footerTop">

        {/* LOGO */}

        <div className="footerSection">

          <h1>

            XEPHORA

          </h1>

          <p>

            Premium Shopping
            Experience For Everyone

          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="footerSection">

          <h2>

            Quick Links

          </h2>

          <p>

            Home

          </p>

          <p>

            Cart

          </p>

          <p>

            Wishlist

          </p>

          <p>

            Orders

          </p>

        </div>

        {/* CUSTOMER */}

        <div className="footerSection">

          <h2>

            Customer Support

          </h2>

          <p>

            Help Center

          </p>

          <p>

            Returns

          </p>

          <p>

            Shipping

          </p>

          <p>

            Privacy Policy

          </p>

        </div>

        {/* CONTACT */}

        <div className="footerSection">

          <h2>

            Contact

          </h2>

          <p>

            Chennai, India

          </p>

          <p>

            support@xephora.com

          </p>

          <p>

            +91 9876543210

          </p>

        </div>

      </div>

      {/* ===== BOTTOM ===== */}

      <div className="footerBottom">

        © 2026 Xephora.
        All Rights Reserved.

      </div>

    </footer>
  );
}