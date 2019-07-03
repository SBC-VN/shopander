import React from "react";
import Bay from "../Bay";
import "./style.css";

const Garage = (props) => {
  console.log("Tasks",props.tasks);
  let bayTasks = [];
  props.tasks.forEach(element => {
    console.log("Element bay",element.bay)
    if (bayTasks[element.bay] === undefined) {
      bayTasks[element.bay-1] = [];
    }
    bayTasks[element.Bay] += element;
  });

  console.log("Bays",bayTasks);
  return(
    bayTasks.map(element => (<Bay tasks={element}/>))
  );
}

export default Garage;