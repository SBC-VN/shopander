import React from "react";
import Bay from "./components/Bay";
import NavBar from "./components/NavBar";

import "./App.css";

let items = [{key: 1, name:"Task1",duration:10,type:"work"},
             {key: 2, name:"Task2",duration:15,type:"unavailable"},
             {key: 3, name:"Task3",duration:5,type:"filler"},
             {key: 4, name:"Task4",duration:10,type:"work"}]

function App() {
  return (
    <div>
      <div className="header">
      </div>
      <NavBar />
      <Bay tasks={items}/>
      <div className="footer">        
      </div>
    </div>
  );
}

export default App;
