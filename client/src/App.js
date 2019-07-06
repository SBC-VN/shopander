import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Garage from "./pages/Garage";
import LogIn from "./pages/LogIn";
import NavBar from "./components/NavBar";

import "./App.css";

let items = [{key: 1, name:"Task1",duration:10,type:"work",bay:1},
             {key: 2, name:"Task2",duration:15,type:"unavailable",bay:2},
             {key: 3, name:"Task3",duration:6,type:"unavailable",bay:1},
             {key: 4, name:"Task4",duration:10,type:"work",bay:1},
             {key: 5, name:"Task5",duration:10,type:"work",bay:2},
             {key: 6, name:"Task6",duration:42,type:"work",bay:3},
            ]

function App() {
  return (
    <Router>
      <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/garage" render={() => <Garage tasks={items}/>}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
