import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
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
    Account_Number: "Enter Account Number",
    Amount: "Amount in USD",
    Ref: "Payment for Service",
  });
  const newBalance = {
    Amount: oldBalance - parseFloat(transactionData.Amount),
  };
  const init = () => {
    setTransactionData({
      Account_Name: "Transaction Successful!!",
      Account_Number: "Enter Account Number",
      Amount: "Amount in USD",
      Ref: "Payment for Service",
    });
  };
  const Submit = (e) => {
    e.preventDefault();

    axios
      .post("/api/transactions/post", transactionData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    axios
      .post("/api/balance/update/5eabe12044a9c11490453485", newBalance)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    init();
  };
  const updateField = (e) => {
    e.preventDefault();
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
  };
  const verify = (e) => {
    e.preventDefault();
    if (transactionData.Account_Number === "123456") {
      setTransactionData({
        Account_Name: "Exxon Mobil drilling Services",
        Account_Number: "123456",
        Amount: "Amount in USD",
        Ref: "Payment for Service",
      });
    } else if (transactionData.Account_Number === "2468") {
      setTransactionData({
        Account_Name: "Shell oil Company",
        Account_Number: "2468",
        Amount: "Amount in USD",
        Ref: "Payment for Service",
      });
    } else {
      setTransactionData({
        Account_Name: "Account Not Found!",
        Account_Number: "enter Account Number",
        Amount: "Amount in USD",
        Ref: "Payment for Service",
      });
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
                      class="fa fa-address-card"
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
                />
              </div>
            </div>
            <div className="box-space-childs">
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      class="fa fa-user"
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
                  disabled
                />
              </div>
            </div>
            <div className="box-space-childs">
              <div className="input-div">
                <div className="input-label">
                  <span>
                    <i
                      class="fa fa-money"
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
                      class="fa fa-commenting"
                      style={iconStyle}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="Ref"
                  onChange={updateField}
                  placeholder={transactionData.Ref}
                  required={false}
                />
              </div>
            </div>
            <div className="box-space-childs">
              <div style={{ flexDirection: "column" }}>
                <label for="label">
                  <p>When would you like this to happen</p>
                </label>{" "}
                <div className="input-div">
                  <div className="input-label">
                    <span>
                      <i
                        class="fa fa-calendar"
                        style={iconStyle}
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Immediately"
                    disabled="true"
                    style={{ width: "60vw", height: "7vh" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="box-space-childs"
              style={{ marginTop: "5vh", justifyContent: "space-around" }}
            >
              <div>
                <button type="button" class="btn btn-primary" onClick={verify}>
                  verify
                </button>
              </div>
              <div>
                <button onClick={Submit} type="button" class="btn btn-success">
                  send
                </button>
              </div>
            </div>{" "}
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
    </div>
  );
}

export default Payment;
