import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./UserContext";
import Nav from "./nav";

function AccountsItem(props) {
  return (
    <div className="account-div">
      <div className="accnt-details">
        <div>
          <p className="highlight-text">{props.item.title}</p>
        </div>
        <div>
          <p>{props.item.subTitle}</p>
        </div>
      </div>
      <div className="accnt-bal">
        <div>
          <p className="highlight-text">{props.item.balance}</p>
        </div>
        <div>
          <p>{props.item.subBalance}</p>
        </div>
      </div>
    </div>
  );
}

function Account() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

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
  const [popupDisplay, setPopupDisplay] = useState({
    display: "none",
  });
  const inputCard = () => {
    setPopupStyle((prevState) => ({
      ...prevState,
      display: "block",
    }));
  };
  const hideInputCard = () => {
    setPopupStyle((prevState) => ({
      ...prevState,
      display: "none",
    }));
  };
  const accountList = user.subAccounts;

  return (
    <>
      <Nav />
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
                  <p className="highlight-text">MainStreet Account</p>
                </div>
                <div>
                  <p>Current Account</p>
                </div>
              </div>
              <div className="accnt-bal">
                <div>
                  <p className="highlight-text">
                    {" "}
                    {user.balance ? user.balance : "loading"}{" "}
                  </p>
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
        <div
          className="popup"
          style={popupStyle}
          // style={popupDisplay}
        >
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
    </>
  );
}

export default Account;
