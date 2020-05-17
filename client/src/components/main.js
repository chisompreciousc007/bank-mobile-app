import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./nav";
import Account from "./account";
import Payment from "./payment";
import Transfers from "./transfers";
import Locator from "./locator";
import More from "./more";

function Main() {
  return (
    <Router>
      <div className="mainPage">
        <Nav />
        <Switch>
          <Route path="/main" exact component={Account} />
          <Route path="/payment" component={Payment} />
          <Route path="/transfers" component={Transfers} />
          <Route path="/locator" exact component={Locator} />
          <Route path="/more" exact component={More} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
