import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/nav";
// import Account from "./components/account";
// import Payment from "./components/payment";
// import Transfers from "./components/transfers";
// import Locator from "./components/locator";
// import More from "./components/more";
import Login from "./components/login";
import Main from "./components/main";
import Verify from "./components/verifycode";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/verify" exact component={Verify} />
          <Route path="/main" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
