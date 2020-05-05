import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Transfer() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signinLabel, setSigninLabel] = useState("please sign in");
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

  const Submit = (e) => {
    e.preventDefault();
    if (
      loginData.email === "dwhitmore3107" &&
      loginData.password === "sunflower123"
    ) {
      setSigninLabel("Loading...Please wait");
      setTimeout(() => {
        setLoginStyle({ ...loginStyle, display: "none" });
      }, 3000);
    } else setSigninLabel("incorrect Username or password");
  };
  const formstyle = {
    width: "82vw",
    position: "relative",
    top: "-95vh",
    marginLeft: "5vw",
  };

  return (
    <div class="container-fluid">
      <div class=" text-center" style={loginStyle}>
        <img
          alt=""
          src="background.png"
          style={{ width: "92vw", height: "100vh", backgroundSize: "cover" }}
        />
        <form class="form-signin" style={formstyle}>
          <img
            class="mb-4 mt-4"
            src="logo.png"
            alt=""
            width="100%"
            height="72"
            style={{ opacity: "0.2" }}
          />
          <h1 class="h3 mb-3 font-weight-normal" style={{ color: "#c3f3bffa" }}>
            {signinLabel}
          </h1>
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            style={{ marginBottom: "3vh" }}
            type="email"
            name="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required={true}
            autofocus=""
            onChange={updateField}
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            style={{ marginBottom: "3vh" }}
            onChange={updateField}
            type="password"
            name="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required={true}
          />
          <div class="checkbox mb-3" style={{ height: "5vh" }}>
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
          </div>
          <button
            class="btn btn-lg btn-primary btn-block"
            type="button"
            onClick={Submit}
          >
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">© 2003-2020</p>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
