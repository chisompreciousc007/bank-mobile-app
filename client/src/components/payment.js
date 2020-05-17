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
    Account_Name: "",
    Routing_Number: "Routing Number(US Only)",
    Account_Number: "Account Number/IBAN",
    Amount: "Amount in USD",
    Ref: "Payment for Service",
    Pin: "XXXX",
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
  const [secondform, setSecondForm] = useState("d-none");
  const [firstform, setfirstForm] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    const { error } = transactionValidation(transactionData);
    // if (error) return console.log(error.details[0].message);
    if (error) {
      const errmsg = error.details[0].message;
      console.log(errmsg);

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
        console.log(transactionData);
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
    if (
      transactionData.Account_Number === "123456" &&
      transactionData.Pin == "3307" &&
      transactionData.Routing_Number == "Routing Number(US Only)"
    ) {
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
        setfirstForm("d-none");
        setSecondForm("");
      }, 4000);
    } else if (
      transactionData.Account_Number === "246810" &&
      transactionData.Routing_Number == "13579" &&
      transactionData.Pin == "3307"
    ) {
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
        setfirstForm("d-none");
        setSecondForm("");
      }, 4000);
    } else {
      setTimeout(() => {
        setTransactionMessage({
          ...transactionMessage,
          icon: "fa fa-times-circle-o",
          message: "Oops Something went wrong, try again!",
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
      <div className="detail" style={{ minHeight: "82vh" }}>
        <div id="top-bar">
          {" "}
          <p>Payment</p>
        </div>
        <div id="info">
          {" "}
          <p>From Account</p>{" "}
        </div>
        <div id="box-space">
          <form className={firstform}>
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
                <div
                  style={{
                    backgroundColor: "#9eea9ee3",
                    borderRadius: "7px",
                    width: "67vw",
                    height: "10vh",
                    padding: "5px 5px",
                  }}
                >
                  <p style={{ marginBottom: "0" }}>CURRENT ACCOUNT</p>{" "}
                  <p>0024586259</p>
                </div>

                {/* <input
                  type="text"
                  name="Account_Name"
                  onChange={updateField}
                  placeholder="CURRENT ACCOUNT <br>"
                  required={true}
                  disabled={true}
                /> */}
              </div>
            </div>
            <p
              style={{
                paddingLeft: "10vw",
                color: "rgb(159, 236, 159)",
                marginBottom: "0",
                marginTop: "1rem",
              }}
            >
              To Account
            </p>{" "}
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
                  onChange={updateField}
                  maxLength="9"
                  placeholder={transactionData.Routing_Number}
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
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      className="fa fa-unlock"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="pin"
                  maxLength="4"
                  placeholder={transactionData.Pin}
                  name="Pin"
                  onChange={updateField}
                />
              </div>
            </div>
            <div className="box-space-childs">
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={verify}
                >
                  verify
                </button>
              </div>
              <div></div>
            </div>
          </form>
          <form className={secondform}>
            <div className="box-space-childs confirmpage">
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
                <div
                  style={{
                    backgroundColor: "#9eea9ee3",
                    width: "67vw",
                    borderRadius: "7px",
                    padding: "5px 5px",
                    height: "11vh",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                >
                  <p style={{ marginBottom: "0" }}>CURRENT ACCOUNT</p>{" "}
                  <p>0024586259</p>
                </div>
              </div>
            </div>
            <p
              style={{
                paddingLeft: "10vw",
                color: "rgb(159, 236, 159)",
                marginBottom: "0",
                marginTop: "1rem",
              }}
            >
              To Account
            </p>{" "}
            <div className="box-space-childs confirmpage">
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
                  name="Routing_Number"
                  maxLength="9"
                  placeholder={transactionData.Account_Name}
                  disabled={true}
                />
              </div>
            </div>
            <div className="box-space-childs confirmpage">
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
                  disabled={true}
                  placeholder={transactionData.Account_Number}
                  required={true}
                  maxLength="34"
                />
              </div>
            </div>
            <div className="box-space-childs confirmpage">
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
                  disabled={true}
                  placeholder={`$${transactionData.Amount}`}
                  required={true}
                />
              </div>
            </div>
            <div className="box-space-childs confirmpage">
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
                  disabled={true}
                  placeholder="Optional"
                  required={false}
                />
              </div>
            </div>
            {/* <div className="box-space-childs confirmpage">
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      className="fa fa-unlock"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="pin"
                  maxLength="4"
                  placeholder={transactionData.Pin}
                  name="Pin"
                  disabled={true}
                />
              </div>
            </div> */}
            <div className="box-space-childs confirmpage">
              <div></div>
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
        <p style={{ textAlign: "right", fontSize: "0.7rem" }}>
          Mainstreet Community Bank,Florida 2020
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
