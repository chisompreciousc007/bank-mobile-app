import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function More() {
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
    { item: "Logout", icon: "fa fa-power-off" },
  ];
  return (
    <div>
      <div className="detail">
        <div className="list-group">
          {itemList.map((item, index) => (
            <button
              style={style}
              href="#"
              key={index}
              className={"list-group-item list-group-item-action"}
            >
              <i className={item.icon} aria-hidden="true"></i> {item.item}
            </button>
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

export default More;
