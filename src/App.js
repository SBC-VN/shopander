import React from "react";
import Bay from "./components/Bay";

let items = [{key: 1, name:"Task1",duration:10,type:"work"},
             {key: 2, name:"Task2",duration:15,type:"unavailable"},
             {key: 3, name:"Task3",duration:5,type:"filler"},
             {key: 4, name:"Task3",duration:10,type:"filler"}]

function App() {
  return <Bay tasks={items}/>;
}

export default App;
