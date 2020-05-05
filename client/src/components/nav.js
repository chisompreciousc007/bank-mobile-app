import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="nv">
      <div className="nvbuttons">
        <Link to="/">
          <div className="nv-details">
            <h1>
              <i className="fa fa-university" aria-hidden="true"></i>
            </h1>
            <p>ACCOUNTS</p>{" "}
          </div>
        </Link>
      </div>
      <div className="nvbuttons">
        <Link to="/payment">
          <div className="nv-details">
            <h1>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </h1>
            <p>PAYMENTS</p>
          </div>
        </Link>
      </div>
      <div className="nvbuttons">
        <Link to="/transfers">
          <div className="nv-details">
            <h1>
              <i className="fa fa-exchange" aria-hidden="true"></i>
            </h1>
            <p>TRANSFERS</p>
          </div>
        </Link>
      </div>
      <div className="nvbuttons">
        <Link to="/locator">
          <div className="nv-details">
            <h1>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </h1>
            <p>LOCATOR</p>
          </div>
        </Link>
      </div>
      <div className="nvbuttons">
        <Link to="/more">
          <div className="nv-details">
            <h1>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </h1>
            <p>MORE</p>
          </div>
        </Link>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script>
        window.jQuery || document.write('
        <script src="../../assets/js/vendor/jquery-slim.min.js"></script>')
      </script>
      <script src="../../assets/js/vendor/popper.min.js"></script>
      <script src="../../dist/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Nav;
