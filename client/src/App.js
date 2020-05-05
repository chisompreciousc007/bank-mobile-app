import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav";
import Account from "./components/account";
import Payment from "./components/payment";
import Transfers from "./components/transfers";
import Locator from "./components/locator";
import More from "./components/more";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route path="/" exact component={Account} />
          <Route path="/payment" component={Payment} />
          <Route path="/transfers" component={Transfers} />
          <Route path="/locator" exact component={Locator} />
          <Route path="/more" exact component={More} />
        </Switch>
      </div>
      <Login />
    </Router>
  );
}

export default App;
