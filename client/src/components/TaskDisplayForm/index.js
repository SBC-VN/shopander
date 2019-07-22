import React from "react";
import "./style.css";

const TaskDisplayForm = (props) => {

  if (props.task === null) {
    return(<span></span>);
  }
  // For right now this is hard coded as tasks don't have this information yet.
  //  Once the structure is fully populated downstream, we can remove these next assignments.
  props.task.custInfo = { 
    firstname : "Joe",
    lastname : "Customer",
    address: "1111 Null Street"
  };

  props.task.vehicleInfo = {
    id: 1,
    color : "Red",
    year : "1994",
    make : "Chevy",
    model : "Camaro",
    engine : "V8 305cc",
    transmission: "Manual"
  };

  return (
      <div id="task-display-form">
        <h4>{props.task.name}</h4>
        <div id="custinfo">
          <div className="info-field-block" id="custinfo-name">
            Customer Name: {props.task.custInfo.firstname} {props.task.custInfo.lastname}
          </div>
          <div className="info-field-block" id="custinfo-address">
            Address: {props.task.custInfo.address}
          </div>
        </div>

        <div id="vehicleinfo">
          <div className="info-field-inline" id="custvehicle-color">
            Color: {props.task.vehicleInfo.color}
          </div>
          <div className="info-field-inline" id="custvehicle-year">
            Year: {props.task.vehicleInfo.year}
          </div>
          <div className="info-field-inline" id="custvehicle-make">
            Make: {props.task.vehicleInfo.make}
          </div>
          <div className="info-field-inline" id="custvehicle-model">
            Model: {props.task.vehicleInfo.model}
          </div>
          <div className="info-field-block" id="custvehicle-engine">
            Engine: {props.task.vehicleInfo.engine}
          </div>
        </div>

        <div id="taskinfo">
          <div className="info-field-block" id="vehicletask-name">
            Task: {props.task.name}
          </div>
          <div className="info-field-inline" id="vehicletask-hours">
            Hours: {props.task.duration}
          </div>
        </div>

        <button id="cancel-button" onClick={props.closeModalHandler}>Cancel</button>
      </div>
    );
  }

export default TaskDisplayForm;
