import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { UserContext } from "./UserContext";
import Spinner from "./spinner";
function Login() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [signinLabel, setSigninLabel] = useState("fa fa-sign-in");
  const [signinNotice, setSigninNotice] = useState("Login");

  const Submit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post(`/api/users/login`, {
        email: userEmail,
        password: userPassword,
      });
      setUser((prevState) => ({
        ...prevState,
        ...res.data,
      }));
      history.push("/verify");
    } catch (error) {
      setSigninNotice("incorrect Username or password");
    }
  };

  const formstyle = {
    width: "82vw",
    position: "absolute",
    top: "35px",
    marginLeft: "5vw",
  };

  return (
    <div className="loginPage">
      {loading ? <Spinner /> : null}
      <div className=" text-center" style={{ height: "812px" }}>
        <img
          alt=""
          src="background.png"
          style={{ width: "92vw", height: "100%", backgroundSize: "cover" }}
        />

        <form className="form-signin" style={formstyle}>
          <h3>Dummy Bank App</h3>
          {/* <img
            className="mb-4 mt-4"
            src="logo.png"
            alt=""
            width="100%"
            height="72"
            style={{ opacity: "0.2" }}
          /> */}
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ color: "#c3f3bffa" }}
          >
            <i className={signinLabel} aria-hidden="true"></i>{" "}
            <span className="h6">{signinNotice}</span>
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
            placeholder="Username(johndoe@gmail.com)"
            required={true}
            autoFocus=""
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            style={{ marginBottom: "3vh" }}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password(sunflower)"
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
              </a>
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

export default Login;
