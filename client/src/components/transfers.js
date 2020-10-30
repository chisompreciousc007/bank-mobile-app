import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./UserContext";
import Nav from "./nav";

function Transfer() {
  const { user, setUser } = useContext(UserContext);
  const transactionList = user.transactions.reverse();

  return (
    <div>
      <Nav />
      <div className="detail" style={{ minHeight: "82vh" }}>
        <div id="top-bar">
          {" "}
          <p>Transfer History(Last Ten...)</p>
        </div>
        <div id="box-space">
          {transactionList.slice(0, 10).map((transaction) => (
            <div className="transfer-div" key={transaction._id}>
              <div className="accnt-details">
                <div>
                  <p className="transfer-highlight-debit">{transaction.name}</p>
                </div>
                <div>
                  <p> {`Ref ID:${transaction._id}`} </p>
                </div>
              </div>
              <div className="accnt-bal">
                <div>
                  <p className="transfer-highlight-debit">
                    {" "}
                    {`-${transaction.amount}`}{" "}
                  </p>
                </div>
                <div>
                  <p> {transaction.date} </p>
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
        <p style={{ textAlign: "right", fontSize: "0.7rem" }}>
          Mainstreet Community Bank,Florida 2020
        </p>
      </footer>
    </div>
  );
}

export default Transfer;
