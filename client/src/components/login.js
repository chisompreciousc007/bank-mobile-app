import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Transfer() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [verifyCode, setVerifyCode] = useState({
    inputCode: "- - - - - -",
  });
  const [verifyDiv, setVerifyDiv] = useState("d-none");
  const [signinLabel, setSigninLabel] = useState("fa fa-sign-in");
  const [loginStyle, setLoginStyle] = useState({
    height: "100vh",
    position: "absolute",
    top: "0px",
    zIndex: "9999",
    backgroundColor: "white",
    backgroundImage: "background.png",
  });

  const updateField = (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const updateVerification = (e) => {
    e.preventDefault();
    setVerifyCode({ ...verifyCode, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    if (
      loginData.email === "dwhitmore3107" &&
      loginData.password === "sunflower123"
    ) {
      setSigninLabel("fa fa-spinner");
      setTimeout(() => {
        setFormStyle({ ...formstyle, display: "none" });
        setSigninLabel("fa fa-sign-in");
        setVerifyDiv("verify-div");
      }, 3000);
    } else setSigninLabel("incorrect Username or password");
  };
  const verify = (e) => {
    e.preventDefault();
    if (verifyCode.inputCode === "987321") {
      setSigninLabel("fa fa-spinner");
      setTimeout(() => {
        setLoginStyle({ ...loginStyle, display: "none" });
      }, 3000);
    } else setSigninLabel("incorrect Code!");
  };
  const [formstyle, setFormStyle] = useState({
    width: "82vw",
    position: "relative",
    top: "-95vh",
    marginLeft: "5vw",
  });
  const verifystyle = {
    width: "82vw",
    position: "relative",
    top: "-95vh",
    marginLeft: "5vw",
  };

  return (
    <div className="container-fluid">
      <div className=" text-center" style={loginStyle}>
        <img
          alt=""
          src="background.png"
          style={{ width: "92vw", height: "100vh", backgroundSize: "cover" }}
        />
        <div className={verifyDiv} style={verifystyle}>
          <img
            className="mb-4 mt-4"
            src="logo.png"
            alt=""
            width="100%"
            height="72"
            style={{ opacity: "0.2" }}
          />
          <div className=" text-center" style={{ marginTop: "20vh" }}>
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
        <form className="form-signin" style={formstyle}>
          <img
            className="mb-4 mt-4"
            src="logo.png"
            alt=""
            width="100%"
            height="72"
            style={{ opacity: "0.2" }}
          />
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ color: "#c3f3bffa" }}
          >
            <i className={signinLabel} aria-hidden="true"></i>{" "}
            <span className="h6">Login</span>
          </h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            style={{ marginBottom: "3vh" }}
            type="email"
            name="email"
            id="inputEmail"
            className="form-control"
            placeholder="Username"
            required={true}
            autoFocus=""
            onChange={updateField}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            style={{ marginBottom: "3vh" }}
            onChange={updateField}
            type="password"
            name="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required={true}
          />
          <div className="checkbox mb-3" style={{ height: "8vh" }}>
            <label style={{ color: "#c3f3bffa" }}>
              <input
                type="checkbox"
                value="remember-me"
                style={{
                  maxWidth: "15px",
                  maxHeight: "2vh",
                }}
              />
              Remember me
            </label>
            <p>
              {" "}
              <a
                href="www.google.com"
                style={{
                  marginRight: "4vw",
                  textDecoration: "none",
                  color: "#c3f3bffa",
                }}
              >
                Forgotten Password?
              </a>
              <a
                href="wwww.google.com"
                style={{
                  marginRight: "1vw",
                  textDecoration: "none",
                  color: "#c3f3bffa",
                }}
              >
                Sign Up
              </a>{" "}
            </p>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="button"
            onClick={Submit}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2003-2020</p>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
