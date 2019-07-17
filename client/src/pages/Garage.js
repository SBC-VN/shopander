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
            ]

class Garage extends Component {
    constructor(props) {
    super(props);
    console.log("In Garage");
    this.getRepairHours=this.getRepairHours.bind(this)
    items.forEach(element => {
      if (this.state.bayTasks[element.bay-1] === undefined) {
        this.state.bayTasks[element.bay-1] = [];
      }
      this.state.bayTasks[element.bay-1].push(element);
    });
  };

  state = {
    scale     : "1 week",
    bays      : 5,
    bayTasks  : []
  };

  componentDidMount() {
    console.log("Word up this is the stuff")
    this.loadRepair();
  }
// grabs raw data
  loadRepair = () => {
    API.getRepair()
    .then(res => {
     let carRepair = this.getRepairHours(res, "5NPD84LF9KH419178" );
     let carRepairHours = carRepair.xcall.data[0].repair.hours
    //  make VIN in line 44 a dynamic element. Pass through using input values 
      console.log("Estimated hours: ",carRepairHours)
    }
    )}

    // loops through raw data array for matching VIN
  getRepairHours = (arr, vin) => {
    return arr.find((element) => {
      // console.log(element.VIN)
      return element.VIN === vin
    })
    console.log(arr)
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