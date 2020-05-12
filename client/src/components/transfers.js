import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Transfer() {
  const [transactionList, setTransactionList] = useState([]);

  const getTransactionList = async () => {
    const response = await fetch("/api/transactions");
    const data = await response.json();
    setTransactionList([...transactionList, ...data]);
  };
  useEffect(() => {
    getTransactionList();
  }, []);

  return (
    <div>
      <div className="detail">
        <div id="top-bar">
          {" "}
          <p>Transfer History(Last Ten...)</p>
        </div>
        <div id="box-space">
          {transactionList.slice(0, 10).map((transaction) => (
            <div className="transfer-div" key={transaction._id}>
              <div className="accnt-details">
                <div>
                  <p className="transfer-highlight-debit">
                    {transactionList[0].Account_Name}
                  </p>
                </div>
                <div>
                  <p> {`Ref ID:${transaction._id}`} </p>
                </div>
              </div>
              <div className="accnt-bal">
                <div>
                  <p className="transfer-highlight-debit">
                    {" "}
                    {`-${transaction.Amount}`}{" "}
                  </p>
                </div>
                <div>
                  <p> {transaction.Date} </p>
                </div>
              </div>
            </div>
          ))}

          <div className="transfer-div">
            <div className="accnt-details">
              <div>
                <p className="transfer-highlight-debit"></p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="accnt-bal">
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => console.log(transactionList[0].Account_Name)}
                >
                  Statement of Account
                </button>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
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

export default Transfer;
