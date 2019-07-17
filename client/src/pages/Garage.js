import React, { Component } from "react";
import Bay from "../components/Bay";
import ScaleBar from "../components/ScaleBar";
import "./Garage.css";
import API from "../utils/API";

// let items = [{key: 1, name:"Task1",duration:10,type:"work",bay:1},
// {key: 2, name:"Task2",duration:15,type:"unavailable",bay:2},
// {key: 3, name:"Task3",duration:6,type:"unavailable",bay:1},
// {key: 4, name:"Task4",duration:10,type:"work",bay:1},
// {key: 5, name:"Task5",duration:10,type:"work",bay:2},
// {key: 6, name:"Task6",duration:42,type:"work",bay:3},
// ];

class Garage extends Component {

  state = {
    scale     : "1 week",
    bays      : 5,
    bayTasks  : []
  };

  componentDidMount() {
    this.loadTasks();
  };

  loadTasks = () => {
    API.getTasks()
    .then( res => {
      console.log('In Garage, loadtasks, res.data from API.getTasks', res.data); 
      // -----------------------------------------------
      // Load bays from database into local array so 
      // that we have just one setState for all the bays
      // added July 16, 2019 by Robin Hale-Cooper 
      // -----------------------------------------------
      const newBayTasks = [];
      res.data.forEach(element => {
        if (newBayTasks[element.Bay.baynumber-1] === undefined) {
          newBayTasks[element.Bay.baynumber-1] = [];
        }
        newBayTasks[element.Bay.baynumber-1].push(element);
      });
      console.log(newBayTasks);
      this.setState({ bayTasks: newBayTasks })
    })
    .catch(err => console.log(err));
  }

  render() {
    return(      
      <div className="garage-block">
        <ScaleBar scale={this.state.scale} />
        {this.state.bayTasks.map(element => (<Bay key={element.key} tasks={element}/>))}
      </div>
    );
  };

} // End of class Garage

export default Garage;