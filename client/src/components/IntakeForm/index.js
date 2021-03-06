import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

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

  // Stub customer data read.
  lookupCustomer = custid => {  

    let CustDbInfoRec = API.getCustomerInfo(custid);

    this.setState({
      customerid : CustDbInfoRec.custid,
      custInfo : CustDbInfoRec.custinfo,
      custVehicles : CustDbInfoRec.custvehicles
    });
  }

  // Stub vehicle task info read.
  lookupVehicleTasks = vehicleInfo => {
    if (vehicleInfo === 0) {
      return;
    }

    let vinfo = this.state.custVehicles.find(elem => {return( elem.id == vehicleInfo)});

    // Load the tasks for the vehicle
    let vtasks = API.getVehicleTasks(vinfo);

    this.setState( { vehicleInfo : vinfo, vehicleTasks : vtasks } );
  }

  // Stub to handle when the task is selected.
  setTask = taskInfo => {
    if (taskInfo === 0) {
      return;
    }

    let tinfo = this.state.vehicleTasks.find(elem => {return( elem.id == taskInfo)});

    this.setState( { taskInfo : tinfo } );
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // This is where we would do all the database reads - before updating the
    // state.   So: when a customer types thier phone number we look it up
    // and put the customer info in the state.  etc.
    let value = event.target.value;
    const name = event.target.name;

    if (name === "customerid") {
      value = value.replace(/\D/g,'');
      if (value.length === 10) {
        this.lookupCustomer(value);
        return;
      }
    }
    else if (name === "vehiclesel") {
      this.lookupVehicleTasks(value);
      return;
    }
    else if (name === "tasksel") {
      this.setTask(value);
      return;
    }

    //Updating the input's state
    this.setState({
       [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Need to validate data to make sure we have all the task info we need, then
    // it should be added to the database and task lists.  Otherwise make a nasty
    // beeping noise and make them stay here.
    //console.log("Parent add task",this.state.taskInfo);
    let retInfo = this.state.taskInfo;
    retInfo.custInfo = this.state.custInfo;
    retInfo.vehicleInfo = this.state.vehicleInfo;
    this.props.addTaskHandler(retInfo);
  };

  handleFormCancel = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Call the close modal function.
    this.props.closeModalHandler();
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div id="intake-form">
        <form className="form">

          {/* Simple form entry field for customer phone number = customer id */}
          <div id="custphone">
            <label className="input-label">
              Customer's phone number:
              <input  id="icon_telephone" 
                      name="customerid"
                      type="tel"
                      value={this.state.customerid}
                      onChange={this.handleInputChange}
                      className="validate"/>
            </label>            
          </div>

          { /* Next few fields get filled in with the customer information from the db */}
          <div id="custinfo">
            <div className="info-field-block" id="custinfo-name">
              Customer Name: {this.state.custInfo.firstname} {this.state.custInfo.lastname}
            </div>
            <div className="info-field-block" id="custinfo-address">
              Address: {this.state.custInfo.address}
            </div>
          </div>

          <br/>
          { /*  Once we have customer -> cars we can present them for selection value={this.state.value} */}
          <div id="cust-car-sel">
            <label className="input-label">
              Select customer vehicle
              <select name="vehiclesel" onChange={this.handleInputChange}>
              <option value="0"> </option>
                {this.state.custVehicles.map (element => {
                    return(<option value={element.id} key={element.id}>
                          {element.color+" " +element.year+" "+element.model}</option>)})}
              </select>
            </label>
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
          <br/>

          { /*  Once we have the vehicle we can present the tasks */}
          <div id="cust-task-sel">
            <label className="input-label">
              Select task
              <select name="tasksel" onChange={this.handleInputChange}>
              <option value="0"> </option>
                {this.state.vehicleTasks.map (element => {
                    return(<option value={element.id} key={element.id}>
                          {element.name}</option>)})}
              </select>
            </label>
          </div>
          
          <div id="taskinfo">
            <div className="info-field-block" id="vehicletask-name">
              Task: {this.state.taskInfo.name}
            </div>
            <div className="info-field-inline" id="vehicletask-hours">
              Hours: {this.state.taskInfo.duration}
            </div>
          </div>

          <br/>
          <button id="submit-button" onClick={this.handleFormSubmit}>Submit</button>
          <button id="cancel-button" onClick={this.handleFormCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default IntakeForm;
