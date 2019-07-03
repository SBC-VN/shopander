import React from "react";

import "./style.css";

// This component displays the 'days' (8 hours) at the top of the 
//  garage component.   The size of these day 'marks' must be in scale
//  with the size of the task bars.   
//  The easy way to visulize things is to think of this bar as just a 
//  sequence of 8 hour tasks end to end.

// Scale can be: 1 week - 1 months.   Default is 1 week (40 hours).
// 

const ScaleBar = (props) => {
  // First step is to get the size of the window ( window.innerWidth ) and figure out 
  // how many hours should be displayed in that window ( windowHours ) then dividing the 
  // window width by the hours being displayed gives us the size of an hour's bar ( hourBarSize ).

  // We then take the number of hours being displayed (windowHours) and divide by 8 hour 
  // (each segment on this bar is 8 hours) to figure out how many segments we need.

  let windowSize = window.innerWidth;  // This is the width of the window.

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
  let segmentDisplayLength = Math.floor(8 * hourBarSize) + "px";   // pixels.

  console.log("Segment Display Length",segmentDisplayLength);
  let segmentCount=Math.floor(windowHours / 8);

  return(
    [...Array(segmentCount)].map((e, i) => <div className="scale-segment" style={{"width": segmentDisplayLength}} key={i}></div>)
  );
}
  
export default ScaleBar;