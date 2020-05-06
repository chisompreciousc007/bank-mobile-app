import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function BankAddress(props) {
  return (
    <tr>
      <th className="bank-location-paragraphs" scope="row">
        {props.index + 1}
      </th>
      <td>
        <p className="bank-location-paragraphs">{props.address}</p>
        <p className="bank-location-paragraphs">{props.city}</p>
        <p className="bank-location-paragraphs">{props.phone}</p>
      </td>
    </tr>
  );
}
function Locator() {
  const locations = [
    {
      address: "3150milk",
      city: "florida",
      phone: "11111111",
    },
    {
      address: "380 eress",
      city: "hawaii",
      phone: "000000000",
    },
    {
      address: "hgvkhgjhgk",
      city: "jhvlgkhjbkl,",
      phone: "58888885555",
    },
    {
      address: "bv,mbvvjl,khgb",
      city: "gv,khjvj,kbk",
      phone: "444444444444444444",
    },
    {
      address: "hvlkb.jkhn.lj",
      city: "bv,hjvbhkjlbgjhb.ljkhjhbkh",
      phone: "hvhglbknb.jlknl.",
    },
  ];

  return (
    <div>
      <div className="detail">
        <div id="top-bar">
          {" "}
          <p>Locate an ATM or office closest to you</p>
        </div>

        <div style={{ width: "100%", height: "68vh" }}>
          <table className="table table-striped" style={{ color: "white" }}>
            <thead>
              {/* <tr>
                <th scope="col">#</th>
                <th scope="col">Address</th>
              </tr> */}
            </thead>
            <tbody>
              {locations.map((location, index) => (
                <BankAddress
                  key={index}
                  index={index}
                  address={location.address}
                  city={location.city}
                  phone={location.phone}
                />
              ))}
              {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
              </tr> */}
            </tbody>
          </table>
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

export default Locator;
