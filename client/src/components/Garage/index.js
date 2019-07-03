import React, { Component } from "react";
import Bay from "../Bay";
import ScaleBar from "../ScaleBar";
import "./style.css";

class Garage extends Component {
  state = {
    scale     : "1 week",
    bays      : 5,
    bayTasks  : []
  };

  constructor(props) {
    super(props);
    console.log("Tasks",props.tasks);
    props.tasks.forEach(element => {
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