import axios from "axios";
import allData from "./data2.json";

const config = {
  headers: {
    "Content-Type": "application/json",
    "authorization": "Basic YzVhZTM3MDEtOGY4YS00YzMzLThiODYtMTY5MjkwMGE0YmJm",
    "partner-token": "64ab6640a3a54843b0d095fc24ec35f6"
  }
};
// axios
//   .get(
    // "http://api.carmd.com/v3.0/repair?vin=1GNALDEK9FZ108495&mileage=51000&dtc=p0420",
//     config
//   )
//   .then(function(response) {
//     console.log(response.data);
//   });


  export default {

      getVIN: function(VIN) {
        return axios.get(`http://api.carmd.com/v3.0/decode?vin=${VIN}`, config)
      }, 
    
      getRepair: function() {
        return new Promise (function(resolve, reject) {
          resolve(allData)
        })
      },
      
      getRepair2: function(VIN, miles, dtc) {
          return axios.get(`http://api.carmd.com/v3.0/repair?vin=${VIN}&mileage=${miles}&dtc=${dtc}`, config)
      },
    
      // Gets the user with the entered username
      getUser: function(username) {
        return axios.get("/api/user/" + username);
      },
    
      // get all the tasks 
      getTasks: function () { 
        return axios.get("/api/tasks/"); 
      },

      // Get Customer Info given the customer phone number.
      getCustomerInfo: function(customerId) {
        const cinfo = { 
          firstname : "Joe",
          lastname : "Customer",
          address: "1111 Null Street"
        }

        const vinfo = [{
          id: 1,
          vin: "1111111111",
          color : "Red",
          year : "1994",
          make : "Chevy",
          model : "Camaro",
          engine : "V8 305cc",
          transmission: "Manual"
        }, {
          id: 2,
          vin: "22222222222",
          color : "White",
          year : "2003",
          make : "Dodge",
          model : "Grand Caravan",
          engine : "V6 3.8L",
          transmission: "Automatic"
        }]

        const CustDbInfoRec = {
          custid: customerId,
          custinfo: cinfo,
          custvehicles: vinfo
        }

        return CustDbInfoRec;
      },

      // Get the available tasks for a vehicle given the vehicle information record
      // (one record from the array returned in the getCustomerInfo custvehicles field)
      getVehicleTasks: function (vehicleInfoRec) {

        // use vehicleInfoRec.vin and/or 
        //     vehicleInfoRec.year + vehicleInfoRec.make + vehicleInfoRec.model
        // to look up the tasks/time for that vehicle then 
        // return the array.
        //
        let vtasks = [
          {
            id: 1,
            name : "Oil Change",
            duration: 0.25 },
          {
            id: 2,
            name: "Tire rotation",
            duration: 0.5 },
          {
            id: 3,
            name: "Tune up",
            duration: 1 }];

        return(vtasks);
      },

      createNewTask: function (TaskContainerRec) {
        let custInfo = TaskContainerRec.custInfo;
        let vehicleInfo = TaskContainerRec.vehicleInfo;
        let Bay = TaskContainerRec.Bay;

        // Remove the vehicle and cust info from the container record to make the 
        // task record..
        let taskInfo = TaskContainerRec;
        delete taskInfo["custInfo"];
        delete taskInfo["vehicleInfo"];
        delete taskInfo["Bay"];
      }
        
  } // end of export default

