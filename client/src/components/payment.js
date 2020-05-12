import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
const { transactionValidation } = require("../validation");
function Payment() {
  // const url = "http://localhost:4000";
  const [oldBalance, setOldBalance] = useState(0);
  const getBalance = async () => {
    const response = await fetch("/api/balance");
    const data = await response.json();
    setOldBalance(data[0].Amount);
  };
  useEffect(() => {
    getBalance();
  }, []);
  const [transactionData, setTransactionData] = useState({
    Account_Name: "Click 'VERIFY' to confirm account",
    Account_Number: "Account Number/IBAN",
    Amount: "Amount in USD",
    Ref: "Payment for Service",
  });
  const newBalance = {
    Amount: oldBalance - parseFloat(transactionData.Amount),
  };
  const [popupStyle, setPopupStyle] = useState({
    position: "absolute",
    top: "20vh",
    left: "10%",
    backgroundColor: "#ffffffdb",
    height: "50vh",
    width: "80vw",
    textAlign: "center",
    borderRadius: "10px",
    display: "none",
  });
  const [transactionMessage, setTransactionMessage] = useState({
    message: "Transaction Successful!!!",
    icon: "fa fa-check-circle-o",
  });
  const Submit = (e) => {
    e.preventDefault();
    const { error } = transactionValidation(transactionData);
    // if (error) return console.log(error.details[0].message);
    if (error) {
      const errmsg = error.details[0].message;
      console.log(typeof errmsg);

      setTransactionMessage({
        ...transactionMessage,
        icon: "fa fa-times-circle-o",
        message: `${errmsg} `,
      });
      setPopupStyle({ ...popupStyle, display: "block" });
      return setTimeout(() => {
        setPopupStyle({ ...popupStyle, display: "none" });
      }, 1000);
    }
    // res.status(400).send(error.details[0].message);
    else {
      setTransactionMessage({
        ...transactionMessage,
        icon: "fa fa-spinner",
        message: "Please wait...",
      });
      setPopupStyle({ ...popupStyle, display: "block" });
      setTimeout(() => {
        setTransactionMessage({
          ...transactionMessage,
          icon: "fa fa-check-circle-o",
          message: "Transaction Successful!!",
        });
      }, 3000);
      setTimeout(() => {
        setPopupStyle({ ...popupStyle, display: "none" });
      }, 4000);
      axios
        .post("/api/transactions/post", transactionData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      axios
        .post("/api/balance/update/5eabe12044a9c11490453485", newBalance)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };
  const updateField = (e) => {
    e.preventDefault();
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
  };
  const verify = (e) => {
    e.preventDefault();
    setTransactionMessage({
      ...transactionMessage,
      icon: "fa fa-spinner",
      message: "Please wait...",
    });
    setPopupStyle({ ...popupStyle, display: "block" });
    if (transactionData.Account_Number === "123456") {
      setTransactionData({
        ...transactionData,
        Account_Name: "Exxon Mobil drilling Services",
      });
      setTimeout(() => {
        setTransactionMessage({
          ...transactionMessage,
          icon: "fa fa-check-circle-o",
          message: "Account verified!!",
        });
      }, 3000);
      setTimeout(() => {
        setPopupStyle({ ...popupStyle, display: "none" });
      }, 4000);
    } else if (transactionData.Account_Number === "246810") {
      setTransactionData({
        ...transactionData,
        Account_Name: "Shell oil Company",
      });
      setTimeout(() => {
        setTransactionMessage({
          ...transactionMessage,
          icon: "fa fa-check-circle-o",
          message: "Account verified!!",
        });
      }, 3000);
      setTimeout(() => {
        setPopupStyle({ ...popupStyle, display: "none" });
      }, 4000);
    } else {
      setTimeout(() => {
        setTransactionMessage({
          ...transactionMessage,
          icon: "fa fa-times-circle-o",
          message: "Account cannot be verified!",
        });
      }, 3000);
      setTimeout(() => {
        setPopupStyle({ ...popupStyle, display: "none" });
      }, 4000);
    }
  };
  const iconStyle = { color: "white" };
  return (
    <div className="">
      <div className="detail">
        <div id="top-bar">
          {" "}
          <p>Payment</p>
        </div>
        <div id="info">
          {" "}
          <p>Make a Payment</p>{" "}
        </div>
        <div id="box-space">
          <form>
            <div className="box-space-childs">
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      className="fa fa-university"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="Routing_Number"
                  maxLength="9"
                  placeholder="Bank Routing Number"
                  required={true}
                />
              </div>
            </div>
            <div className="box-space-childs">
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      className="fa fa-address-card"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="Account_Number"
                  onChange={updateField}
                  placeholder={transactionData.Account_Number}
                  required={true}
                  maxLength="34"
                />
              </div>
            </div>
            <div className="box-space-childs">
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      className="fa fa-user"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="Account_Name"
                  onChange={updateField}
                  placeholder={transactionData.Account_Name}
                  required={true}
                  disabled={true}
                />
              </div>
            </div>
            <div className="box-space-childs">
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      className="fa fa-money"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="Amount"
                  onChange={updateField}
                  placeholder={transactionData.Amount}
                  required={true}
                />
              </div>
            </div>
            <div className="box-space-childs">
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      className="fa fa-commenting"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="Ref"
                  onChange={updateField}
                  placeholder="Optional"
                  required={false}
                />
              </div>
            </div>
            <div className="box-space-childs">
              {/* <div style={{ flexDirection: "column" }}> */}
              {/* <label htmlFor="label">
                  <p>When would you like this to happen</p>
                </label>{" "} */}
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      className="fa fa-calendar"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Immediately"
                  disabled={true}
                  // style={{ width: "60vw", height: "7vh" }}
                />
              </div>
              {/* </div> */}
            </div>
            <div
              className="box-space-childs"
              style={{ justifyContent: "space-around" }}
            >
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={verify}
                >
                  verify
                </button>
              </div>
              <div>
                <button
                  onClick={Submit}
                  type="button"
                  className="btn btn-success"
                >
                  send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <p>
          Dear Customer, beware of Scam emails and pop-ups requesting for your
          login details or credit card details, never disclose your online
          details to a third party.{" "}
        </p>
      </footer>

      <div className="popup" style={popupStyle}>
        <h3 style={{ margin: "35px", fontSize: "4.75rem" }}>
          <i
            className={transactionMessage.icon}
            style={{ color: "green" }}
            aria-hidden="true"
          ></i>
        </h3>
        <p>{transactionMessage.message}</p>
      </div>
    </div>
  );
}

export default Payment;
