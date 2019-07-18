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

        
          // return axios.get(`http://api.carmd.com/v3.0/repair?vin=${VIN}&mileage=${miles}&dtc=${dtc}`, config)
      },

          return axios.get(`http://api.carmd.com/v3.0/decode?vin=${VIN}`)
      }
      
      , 
      getRepair: function(VIN, miles, dtc) {
          return axios.get(`http://api.carmd.com/v3.0/repair?vin=${VIN}&mileage=${miles}&dtc=${dtc}`)
      }
      
      ,
      // Gets the user with the entered username

      getUser: function(username) {
        return axios.get("/api/user/" + username);
      }

      , 
      // get all the tasks 
      getTasks: function () { return axios.get("/api/tasks/"); } 
    
      
  } 

