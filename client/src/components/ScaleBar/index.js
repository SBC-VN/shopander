import React from "react";
import Moment from "moment";

import "./style.css";

// This component displays the 'days' (8 hours) at the top of the 
//  garage component.   The size of these day 'marks' must be in scale
//  with the size of the task bars.   
//  The easy way to visulize things is to think of this bar as just a 
//  sequence of 8 hour tasks end to end.

// Scale can be: 1 week - 1 months.   Default is 1 week (40 hours).
// 

const ScaleBar = (props) => {
  //console.log("ScaleBar draw",props.scale);

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
    windowHours = parseInt(parts[0]);      // Convert the party of the first part into a number.
    if (isNaN(windowHours)) {
      // Bad format for the scale.  Default to 
      console.log("bad windowHours",parts[0]);
      windowHours = 40;
    }
    else {
      //    Window hours is some number, but there's a second part that may change that.
      //      at this point we only support 'weeks' and 'months' for that second part.
      
      switch (parts[1].trim().toLowerCase()) {

        default:
        case "hours":                                       // Already in hours...
                      break;
        case "days":
                      windowHours = windowHours * 8;        // 8 hours per day by n days.
                      break;
        case "week":
        case "weeks": windowHours = windowHours * 40;       //  40 hours per week by n weeks.
                      break;

        case "month":
        case "months": windowHours = windowHours * 40 * 4;  // 4 weeks per month.
                      break;                                // Note this isn't exact...
      }
    }
  }

  //console.log("Window Hours",windowHours);
  let hourBarSize = Math.floor(windowSize / windowHours);       // Round it down...
  
  //console.log("Window bar size",hourBarSize);
  let segmentDisplayLength = Math.floor(8 * hourBarSize) + "px";   // pixels.

  //console.log("Segment Display Length",segmentDisplayLength);
  let segmentCount=Math.floor(windowHours / 8);

  // Now because we want to make it possible to view past/future intervals, we need to take the 
  // intervalStartDate given in the props -or- use 'today' as the start then label each interval with
  // that date information.
  let startDate=null;

  if (props.intervalStartDate === undefined) {
    startDate = Moment();
  }
  else {
    startDate = Moment(props.intervalStartDate)
  }

  return(
    [...Array(segmentCount)].map((e, i) => (
      <div className="scale-segment-wrapper" key={i}>
        <div className="scale-segment" style={{"width": segmentDisplayLength}} key={i}>
          <hr style={{"height": "8px","backgroundColor" : "black"}} />
          <div className="scale-date">{startDate.add(i,'day').format("DD-MMM-YY")}</div>
        </div>
        <div className="vertical-line"></div>
      </div>
    ))
  );
}
  
export default ScaleBar;