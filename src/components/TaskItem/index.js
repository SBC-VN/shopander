import React from "react";

import "./style.css";

// Duration of task must be in hours.
// Scale of task bar can be: hours, days, weeks, months.   Default is 1 hour.

const TaskItem = (props) => {
  // First we calculate the size of the tasks 'bar' on the window.
  //
  // First step is to get the size of the window ( window.innerWidth ) and figure out 
  // how many hours should be displayed in that window ( windowHours ) then dividing the 
  // window width by the hours being displayed gives us the size of an hour's bar ( hourBarSize ).
  // We can then multiply that by the number of hours in the task to get the task's bar size.

  let windowSize = window.innerWidth;  // This is the width of the window.
  console.log("windowSize",windowSize);

  let windowHours = 40;                // Default to 1 work week, 40 hours.

  if (props.scale !== undefined) {
    // Some scale information was given.  Need to parse it.

    let parts = props.scale.trim().split(' ');   // Split something like "1 day" into 1 & day.
    let windowHours = parseInt(parts[0]);      // Convert the party of the first part into a number.
    if (isNaN(windowHours)) {
      // Bad format for the scale.  Default to 
      windowHours = 40;
    }
    else {
      //    Window hours is some number, but there's a second part that may change that.
      //      at this point we only support 'weeks' and 'months' for that second part.

      switch (parts[1].trim().toLowerCase()) {

        default:
        case "week":
        case "weeks": windowHours = windowHours * 40;       //  40 hours per week by n weeks.
                      break;

        case "month":
        case "months": windowHours = windowHours * 40 * 4;  // 4 weeks per month.
                      break;                                // Note this isn't exact...
      }
    }
  }

  console.log("Window Hours",windowHours);
  let hourBarSize = Math.floor(windowSize / windowHours);       // Round it down...
  
  console.log("Window bar size",hourBarSize);
  let taskDisplayLength = Math.floor(props.duration * hourBarSize) + "px";   // pixels.

  console.log("Task Display Length",taskDisplayLength);

  return(
    <div className={props.type === undefined ? "task-item" : "task-item task-" + props.type}
         style={{"width": taskDisplayLength}}>
      <h4>Name: {props.name}</h4>
      <h5>{props.duration}</h5>
    </div>
  );
}
  
export default TaskItem;