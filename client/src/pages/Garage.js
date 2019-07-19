import React, { Component } from "react";
import Bay from "../components/Bay";
import ScaleBar from "../components/ScaleBar";
import "./Garage.css";
import IntakeForm from "../components/IntakeForm";
import Modal from 'react-modal';

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

let items = [{id: 1, name:"Task1",duration:10,type:"work",bay:1},
             {id: 2, name:"Task2",duration:15,type:"unavailable",bay:2},
             {id: 3, name:"Task3",duration:6,type:"unavailable",bay:1},
             {id: 4, name:"Task4",duration:10,type:"work",bay:1},
             {id: 5, name:"Task5",duration:10,type:"work",bay:2},
             {id: 6, name:"Task6",duration:42,type:"work",bay:3},
            ]

class Garage extends Component {
  state = {
    scale     : "1 week",
    bays      : 5,
    bayTasks  : [],
    addTask   : false
  };

  openModalHandler = () => {
    this.setState({addTask: true});
  }

  closeModalHandler = () => {
    this.setState({addTask: false});
  }

  taskButtonClickHandler = () => {
    this.setState({addTask: true});
  }

  constructor(props) {
    super(props);
    items.forEach(element => {
      if (this.state.bayTasks[element.bay-1] === undefined) {
        this.state.bayTasks[element.bay-1] = [];
      }
      this.state.bayTasks[element.bay-1].push(element);
    });
  };

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
                closeModal={this.closeModalHandler}
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
              {this.state.bayTasks.map(element => (<Bay key={element.id} tasks={element}/>))}
            </div>
          </div>
        </div>
    );
    };
}

export default Garage;