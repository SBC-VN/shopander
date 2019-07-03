import React, { Component } from "react";
import Bay from "../Bay";
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
        {this.state.bayTasks.map(element => (<Bay tasks={element}/>))}
      </div>
    );
    };
}

export default Garage;