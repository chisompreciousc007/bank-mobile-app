import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function AccountsItem(props) {
  return (
    <div className="account-div">
      <div className="accnt-details">
        <div>
          <p className="highlight-text">{props.item.name}</p>
        </div>
        <div>
          <p>{props.item.description}</p>
        </div>
      </div>
      <div className="accnt-bal">
        <div>
          <p className="highlight-text">{props.item.amount}</p>
        </div>
        <div>
          <p>{props.item.amountLabel}</p>
        </div>
      </div>
    </div>
  );
}

function Account() {
  const history = useHistory();

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
  const inputCard = () => {
    setPopupStyle({ ...popupStyle, display: "block" });
  };
  const hideInputCard = () => {
    setPopupStyle({ ...popupStyle, display: "none" });
  };
  const accountList = [
    {
      name: "Barclays card Platinum",
      description: "**************856",
      amount: "68,950.88",
      amountLabel: "Credit",
    },
    {
      name: "Savings Account",
      description: "Savings Account ******781",
      amount: "356,065.11",
      amountLabel: "Current Balance",
    },
    {
      name: "E-Savings",
      description: "E-Savings Reward ******798",
      amount: "104,901.15",
      amountLabel: "Credit",
    },
    {
      name: "Mortgage Account",
      description: "*****396",
      amount: "78,000.00",
      amountLabel: "Remaining",
    },
  ];
  // const url = "http://localhost:4000";
  const [balance, setBalance] = useState("Loading");

  const getTransactionList = async () => {
    const response = await fetch("/api/balance");
    const data = await response.json();
    setBalance(Number(data[0].Amount.toFixed(2)));
  };
  useEffect(() => {
    getTransactionList();
  }, []);

  return (
    <div className="ac">
      <div className="detail">
        <div id="top-bar">
          {" "}
          <p>Accounts</p>
        </div>
        <div id="box-space">
          <div
            key="1"
            className="account-div"
            onClick={() => history.push("/payment")}
          >
            <div className="accnt-details">
              <div>
                <p className="highlight-text">Barclays Current Account</p>
              </div>
              <div>
                <p>Current Account</p>
              </div>
            </div>
            <div className="accnt-bal">
              <div>
                <p className="highlight-text"> {balance} </p>
              </div>
              <div>
                <p>Available</p>
              </div>
            </div>
          </div>

          {accountList.map((item, index) => (
            <AccountsItem index={index} item={item} key={index} />
          ))}
        </div>
        <button
          onClick={inputCard}
          className="btn btn-success mt-4"
          style={{
            display: "inline-block",
            width: "233px",
            background: "#28a74569",
          }}
        >
          Transfer between Accounts
        </button>
      </div>
      <div className="popup" style={popupStyle}>
        <h3 style={{ margin: "35px", fontSize: "4.75rem" }}>
          <i
            className="fa fa-credit-card-alt"
            style={{ color: "green" }}
            aria-hidden="true"
          ></i>
        </h3>
        <p style={{ color: "#0b500bc7" }}>Enter Card Details</p>
        <input type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
        <button
          onClick={hideInputCard}
          type="button"
          className="btn btn-default"
          style={{
            right: "70px",
            position: "relative",
            top: "20px",
            color: "#c17575",
          }}
        >
          close
        </button>
        <button
          onClick={hideInputCard}
          type="button"
          className="btn btn-success"
          style={{ left: "70px", position: "relative", top: "20px" }}
        >
          Verify
        </button>
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

export default Account;
