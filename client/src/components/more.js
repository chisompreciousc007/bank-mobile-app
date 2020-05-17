import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function More() {
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

  function logout() {
    history.push("/");
    window.location.reload(true);
    /* window.location.replace("https://onlne-bankng-app.heroku.com"); */
  }
  const style = {
    fontWeight: "bolder",
    height: "10vh",
    backgroundColor: "transparent",
    color: "white",
  };

  const itemList = [
    { item: "QR Payments", icon: "fa fa-qrcode" },
    { item: "Loans & Investment", icon: "fa fa-file-text" },
    { item: "Credit Card Request", icon: "fa fa-credit-card-alt" },
    { item: "Lifestyle & Travel", icon: "fa fa-plane" },
    { item: "cards & Cheques", icon: "fa fa-credit-card-alt" },
    { item: "Profile Management", icon: "fa fa-cog" },
    { item: "Self service", icon: "fa fa-user" },
    { item: "Customer Service", icon: "fa fa-info-circle" },
    { item: "Notifications", icon: "fa fa-bell" },
  ];
  return (
    <div>
      <div className="detail">
        <div className="list-group">
          {itemList.map((item, index) => (
            <button
              onClick={inputCard}
              style={style}
              href="#"
              key={index}
              className="list-group-item list-group-item-action"
            >
              <i className={item.icon} aria-hidden="true"></i> {item.item}
            </button>
          ))}

          <button
            onClick={logout}
            style={style}
            href="#"
            key={9}
            className="list-group-item list-group-item-action"
          >
            <i className="fa fa-power-off" aria-hidden="true"></i> Logout
          </button>
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
            className="fa fa-credit-card-alt"
            style={{ color: "green" }}
            aria-hidden="true"
          ></i>
        </h3>
        <p style={{ color: "#0b500bc7", marginBottom: "0rem" }}>
          Unverified Device!
          <br /> Enter Card Details
        </p>
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
    </div>
  );
}

export default More;
