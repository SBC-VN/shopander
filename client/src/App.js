import React from "react";
import Garage from "./components/Garage";
import NavBar from "./components/NavBar";

import "./App.css";

let items = [{key: 1, name:"Task1",duration:10,type:"work",bay:1},
             {key: 2, name:"Task2",duration:15,type:"unavailable",bay:2},
             {key: 3, name:"Task3",duration:5,type:"filler",bay:1},
             {key: 4, name:"Task4",duration:10,type:"work",bay:1},
             {key: 5, name:"Task5",duration:10,type:"work",bay:2},
             {key: 6, name:"Task6",duration:42,type:"work",bay:3},
            ]

function App() {
  return (
    <div>
      <div className="header">
      </div>
      <NavBar />
      <Garage tasks={items}/>
      <div className="footer">        
      </div>
    </div>
  );
}

export default App;
