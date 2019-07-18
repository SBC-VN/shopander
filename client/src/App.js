import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Garage from "./pages/Garage";
import LogIn from "./pages/LogIn";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/garage" component={Garage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
