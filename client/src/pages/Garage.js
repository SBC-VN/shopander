import React, { Component } from "react";
import Bay from "../components/Bay";
import ScaleBar from "../components/ScaleBar";
import "./Garage.css";
import API from "../utils/API";

let items = [{key: 1, name:"Task1",duration:10,type:"work",bay:1},
             {key: 2, name:"Task2",duration:15,type:"unavailable",bay:2},
             {key: 3, name:"Task3",duration:6,type:"unavailable",bay:1},
             {key: 4, name:"Task4",duration:10,type:"work",bay:1},
             {key: 5, name:"Task5",duration:10,type:"work",bay:2},
             {key: 6, name:"Task6",duration:42,type:"work",bay:3},
            ];


class Garage extends Component {
  state = {
    scale     : "1 week",
    bays      : 5,
    bayTasks  : []
  };

  componentDidMount() {
    API.getTasks()
    .then( res => {
        console.log('In Garage, res.data from API.getTasks2', res.data); 
    })
  }
  constructor(props) {
    super(props);
    console.log("In Garage, constructor(props)");        
    items.forEach(element => {
      if (this.state.bayTasks[element.bay-1] === undefined) {
        this.state.bayTasks[element.bay-1] = [];
      }
      this.state.bayTasks[element.bay-1].push(element);
    });
  };

  render() {
    return(      
      <div className="garage-block">
        <ScaleBar scale={this.state.scale} />
        {this.state.bayTasks.map(element => (<Bay key={element.key} tasks={element}/>))}
      </div>
    );
    };
}

export default Garage;