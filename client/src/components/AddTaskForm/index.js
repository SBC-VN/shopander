import React, { Component } from "react";
import "./style.css";

class AddTaskForm extends Component {
  // Setting the component's initial state
  state = {
    customerid: "",
    custfname:"",
    custlname:"",
    custaddr:"",
    custvehicleid: 0,
    year: "",
    make: "",
    model: "",
    engine: "",
    task: "",
    taskinfo: {}
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
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
    return (
      <div className="vehicle-search-box">
        <p>
          Search by year, make, model.
        </p>
        <form className="form">
          <input
            value={this.state.year}
            name="year"
            onChange={this.handleInputChange}
            type="text"
            placeholder="YYYY"
          />
          <input
            value={this.state.make}
            name="make"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Make"
          />
          <input
            value={this.state.model}
            name="model"
            onChange={this.handleInputChange}
            type="text"
            placeholder="model"
          />
          <input
            value={this.state.engine}
            name="engine"
            onChange={this.handleInputChange}
            type="text"
            placeholder="engine"
          />
          <input
            value={this.state.task}
            name="task"
            onChange={this.handleInputChange}
            type="text"
            placeholder="task"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
