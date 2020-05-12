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
      address: "204 S. Woodland Boulevard",
      city: "DeLand, FL 32720",
      phone: "(386) 734-5930",
    },
    {
      address: "1500 N. Spring Garden Ave",
      city: "DeLand, FL 32720",
      phone: "(386) 734-0237",
    },
    {
      address: "101 Northlake Drive",
      city: "Orange City, FL 32763,",
      phone: "(386) 960-1200",
    },
    {
      address: "850 S. Volusia Avenue",
      city: "Orange City, FL 32763",
      phone: "(386) 774-2090",
    },
    {
      address: "1812 Ridgewood Avenue",
      city: "Holly Hill, FL 32117",
      phone: "(386) 366-9205",
    },
    {
      address: "1515 East Highway 50",
      city: "Clermont, FL 34711",
      phone: "(352) 404-0404",
    },
    {
      address: "112 N Magnolia Avenue",
      city: "Ocala, FL 34475",
      phone: "352-355-4579",
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
            </tbody>
          </table>
          <a
            onClick={() =>
              window.location.replace(
                "https://www.bankonmainstreet.com/about/locator"
              )
            }
            href="#"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#c3f3bffa",
            }}
          >
            Get more Locations
          </a>
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
