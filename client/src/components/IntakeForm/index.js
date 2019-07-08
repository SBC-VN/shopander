import React, { Component } from "react";
import "./style.css";

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


class IntakeForm extends Component {
  // Setting the component's initial state
  state = {
    customerid: "",
    custInfo: {},
    custVehicles: [],
    vehicleInfo: {},
    vehicleTasks: [],
    taskInfo: {}
  };

  lookupCustomer = custid => {
    const cinfo = { 
      firstname : "Joe",
      lastname : "Customer",
      address: "1111 Null Street"
    }

    const vinfo = [{
      color : "Red",
      year : "1994",
      make : "Chevy",
      model : "Camaro",
      engine : "V8 305cc",
      transmission: "Manual"
    }, {
      color : "White",
      year : "2003",
      make : "Dodge",
      model : "Grand Caravan",
      engine : "V6 3.8L",
      transmission: "Automatic"
    }]

    this.setState({
      customerid : custid,
      custInfo : cinfo,
      custVehicles : vinfo
    });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "customerid") {
      value = value.replace(/\D/g,'');
      if (value.length === 10) {
        this.lookupCustomer(value);
        return;
      }
    }

    //Updating the input's state
    this.setState({
       [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    console.log("Parent add task",this.state.taskinfo);
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div id="intake-form">
        <form className="form">
          <div id="custphone">
            Customer's phone number:
            <i className="material-icons prefix">phone</i>
            <input  id="icon_telephone" 
                    name="customerid"
                    type="tel"
                    value={this.state.customerid}
                    onChange={this.handleInputChange}
                    className="validate"/>              
          </div>

          <div id="custinfo">
            <div className="info-field-block" id="custinfo-name">
              Customer Name: {this.state.custInfo.firstname} {this.state.custInfo.lastname}
            </div>
            <div className="info-field-block" id="custinfo-address">
              Address: {this.state.custInfo.address}
            </div>
          </div>

          <div className="input-field col s12" id="custvehicle-select">
            Choose customer's vehicle:
            <select onChange={this.handleInputChange} name="custvehicle-select">
            </select>
          </div>

          <div id="vehicleinfo">
            <div className="info-field-inline" id="custvehicle-color">
              Color: {this.state.vehicleInfo.color}
            </div>
            <div className="info-field-inline" id="custvehicle-year">
              Year: {this.state.vehicleInfo.year}
            </div>
            <div className="info-field-inline" id="custvehicle-make">
              Make: {this.state.vehicleInfo.make}
            </div>
            <div className="info-field-inline" id="custvehicle-model">
              Model: {this.state.vehicleInfo.model}
            </div>
            <div className="info-field-block" id="custvehicle-engine">
              Engine: {this.state.vehicleInfo.engine}
            </div>
          </div>

          <div className="input-field col s12" id="vehicletask-select">
            Choose task:
            <select onChange={this.handleInputChange} name="vehicletask-select">
            </select>
          </div>

          <div id="taskinfo">
            <div className="info-field-block" id="vehicletask-name">
              Task: {this.state.taskInfo.name}
            </div>
            <div className="info-field-inline" id="vehicletask-hours">
              Hours: {this.state.taskInfo.duration}
            </div>
            <div className="info-field-inline" id="vehicletask-difficulty">
              Difficulty: {this.state.vehicleInfo.difficulty}
            </div>
          </div>
          
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default IntakeForm;
