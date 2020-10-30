import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./components/UserContext";
import ErrorHandler from "./components/errorHandler";
// import Account from "./components/account";
// import Payment from "./components/payment";
// import Transfers from "./components/transfers";
// import Locator from "./components/locator";
// import More from "./components/more";
import Login from "./components/login";
import Main from "./components/main";
import Verify from "./components/verifycode";
import Account from "./components/account";
import Payment from "./components/payment";
import Transfers from "./components/transfers";
import Locator from "./components/locator";
import More from "./components/more";

function App() {
  const [user, setUser] = useState({});
  return (
    <Router>
      <div className="container">
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Route path="/" exact component={Login} />
            <ErrorHandler>
              {" "}
              <Route path="/verify" exact component={Verify} />
              {/* <Route path="/main" exact component={Main} /> */}
              <Route path="/account" exact component={Account} />
              <Route path="/payment" component={Payment} />
              <Route path="/transfers" component={Transfers} />
              <Route path="/locator" exact component={Locator} />
              <Route path="/more" exact component={More} />
            </ErrorHandler>
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
