import React, { Component } from "react";
import Modal from "react-modal";
import Bay from "../components/Bay";
import ScaleBar from "../components/ScaleBar";
import "./Garage.css";
import API from "../utils/API";

import IntakeForm from "../components/IntakeForm"

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zindex                : '7',
    backgroundColor       : '#5A938C'
  }
};

class Garage extends Component {
  
    constructor(props) {
    super(props);
    console.log("In Garage");
    this.getRepairHours=this.getRepairHours.bind(this)
  };

  state = {
    scale     : "1 week",
    bays      : 5,
    bayTasks  : [],
    addTask   : false
  };

  // Runs when the form loads up.
  componentDidMount() {
    this.loadTasks();
    console.log("Word up this is the stuff")
    this.loadRepair();
  }

  // Routine called to load the tasks from the database.
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
      //console.log("tasks->bays",newBayTasks);
      this.setState({ bayTasks: newBayTasks })
    })
    .catch(err => console.log(err));
  }

  // Handles the 'new task' button.
  taskButtonClickHandler = () => {
    this.setState({addTask: true});
  }

  // Handles when the user clicks on a task item (bar).
  taskItemClickHandler = (event) => {
    if (event.currentTarget.id.startsWith("task-")) {
      let taskId = event.currentTarget.id.substring(5);
      //console.log("Task id ",taskId);
      let taskInfo=undefined;

      for (let i=0; i < this.state.bayTasks.length && taskInfo === undefined; i++) {
        for (let j=0; j < this.state.bayTasks[i].length && taskInfo === undefined; j++) {
          if (this.state.bayTasks[i][j].key == taskId) {
            taskInfo = this.state.bayTasks[i][j];
          }
        }
      }

      console.log("Task Info Found",taskInfo);
    }   
  }

// grabs raw data
// 7/19 VN - Not sure what this is here for.  Repair info = task duration, coming from database...
  loadRepair = () => {
    API.getRepair()
    .then(res => {
     let carRepair = this.getRepairHours(res, "5NPD84LF9KH419178" );
     let carRepairHours = carRepair.xcall.data[0].repair.hours
    //  make VIN in line 44 a dynamic element. Pass through using input values 
      console.log("Estimated hours: ",carRepairHours)
    }
    )}


  // loops through raw data array for matching VIN  (Wouldn't array.find do that?)
  getRepairHours = (arr, vin) => {
    return arr.find((element) => {
      // console.log(element.VIN)
      return element.VIN === vin
    })
  };

  addTaskHandler = newTask => {
    console.log("Add new task",newTask);
    // Here the task should be added to the database....

    // Close modal IF task was added successfully.
    this.setState({addTask : false});
  }

  closeModalHandler = () => {
    this.setState({addTask : false});
  }

  // Render routine renders the garage form and all sub-components.
  render() {
    return(
        <div>
          <div className="garage-block">
            <Modal
              isOpen={this.state.addTask}
              style={customStyles}
              contentLabel="Add Task"
            >
              <IntakeForm 
                closeModalHandler={this.closeModalHandler}
                addTaskHandler={this.addTaskHandler}
              />
            </Modal>

            <div id="add-task-bar">
              <img src="pistonlogo_yellowblack.jpg" 
                style={{width:"120px", height:"80px", marginTop:"6px"}} alt="Logo"/>
              <div id="app-name-main">Shopander</div>              
              <a className="waves-effect waves-light btn-large right"
                  onClick={this.taskButtonClickHandler}
                  id="new-task-button">New Task
              </a>
            </div>

            <div id="bays-block">
              <ScaleBar scale={this.state.scale} />
              {this.state.bayTasks.map((element,indx) => (<Bay key={indx} 
                                                        tasks={element} 
                                                        onTaskClickHandler={this.taskItemClickHandler}/>))}
            </div>
          </div>
        </div>
    );
  };

} // End of class Garage

export default Garage;
