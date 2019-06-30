import React from "react";

import "./style.css";

// Duration of task must be in hours.
// Scale of task bar can be: hours, days, weeks, months.   Default is 1 hour.

const TaskItem = (props) => {
  let durationScale = 1;       // 1 hour.
  if (props.scale !== undefined) {
    let parts = props.scale.trim().split(' ');   // Split something like "1 day" into 1 & day.
    let durationScale = parseInt(parts[0]);      // Convert the party of the first part into a number.
    if (durationScale == NaN) {
      durationScale = 1;
    }
    else {
      switch (parts[1].trim().toLowerCase()) {
        case "hour":
        case "hours": break;    // The math is hour based already, no conversion needed.

        case "day":
        case "days": durationScale = durationScale * 24;  // Convert days to hours.
                     break;

        case "week":
        case "weeks": durationScale = durationScale * 24 * 7;  // Convert weeks to hours.
                      break;

        case "month":
        case "months": durationScale = durationScale * 24 * 30;  // Convert month to hours.
                      break;                                     // Note this isn't exact (Feb!)
      }
    }
  }

  let taskDisplayLength = props.duration / durationScale + "%";

  return(
    <div className={props.type === undefined ? "task-item" : "task-item task-" + props.type}
         style={{"width": taskDisplayLength}}>
      <h3>Name: {props.name}</h3>
      <h4>{props.duration}</h4>
    </div>
  );
}
  
export default TaskItem;