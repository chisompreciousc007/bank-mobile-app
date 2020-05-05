import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AccountsItem(props) {
  return (
    <div key={props.index + 1} className="account-div">
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
  const accountList = [
    {
      name: "Barclays card Platinum",
      description: "debit Card ******56",
      amount: "28,950.88",
      amountLabel: "Credit",
    },
    {
      name: "Barclays card Platinum",
      description: "debit Card ******56",
      amount: "28,950.88",
      amountLabel: "Credit",
    },
    {
      name: "Barclays card Platinum",
      description: "debit Card ******56",
      amount: "28,950.88",
      amountLabel: "Credit",
    },
    {
      name: "Barclays card Platinum",
      description: "debit Card ******56",
      amount: "28,950.88",
      amountLabel: "Credit",
    },
  ];
  // const url = "http://localhost:4000";
  const [balance, setBalance] = useState(0);

  const getTransactionList = async () => {
    const response = await fetch("/api/balance");
    const data = await response.json();
    setBalance(data[0].Amount);
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
          <div key="1" className="account-div">
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
            <AccountsItem index={index} item={item} />
          ))}
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

export default Account;
