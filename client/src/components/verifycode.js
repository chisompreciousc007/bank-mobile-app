import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function VerifyCode() {
  const history = useHistory();
  const [verifyCode, setVerifyCode] = useState({
    inputCode: "- - - - - -",
  });
  const [signinLabel, setSigninLabel] = useState("fa fa-sign-in");

  const updateVerification = (e) => {
    e.preventDefault();
    setVerifyCode({ ...verifyCode, [e.target.name]: e.target.value });
  };

  const verify = (e) => {
    e.preventDefault();
    if (verifyCode.inputCode === "987321") {
      setSigninLabel("fa fa-spinner");
      setTimeout(() => {
        history.push("/main");
      }, 3000);
    } else setSigninLabel("incorrect Code!");
  };
  const verifystyle = {
    width: "82vw",
    position: "relative",
    top: "-95vh",
    marginLeft: "5vw",
  };

  return (
    <div className="verifyPage">
      <div className=" text-center" style={{ height: "100vh" }}>
        <img
          alt=""
          src="background.png"
          style={{ width: "92vw", height: "100vh", backgroundSize: "cover" }}
        />
        <div style={verifystyle}>
          <img
            className="mb-4 mt-4"
            src="logo.png"
            alt=""
            width="100%"
            height="72"
            style={{ opacity: "0.2" }}
          />
          <div className=" text-center" style={{ marginTop: "5vh" }}>
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ color: "#c3f3bffa" }}
            >
              <i className={signinLabel} aria-hidden="true"></i>{" "}
              <span className="h6">
                Unregistered Device! <br /> Enter Verification Code sent to
                dwh*******@gmail.com
              </span>
            </h1>
            <input
              style={{
                display: "inline-block",
                width: "154px",
                fontSize: "2rem",
              }}
              type="number"
              name="inputCode"
              id="inputCode"
              className="form-control"
              placeholder={verifyCode.inputCode}
              required={true}
              autoFocus=""
              onChange={updateVerification}
            />{" "}
            <br />
            <button
              className="btn btn-default mt-1"
              style={{ color: "#c3f3bffa", fontWeight: "bold" }}
              onClick={verify}
            >
              verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyCode;
