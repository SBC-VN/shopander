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
      // getTemp: function(VIN, miles, dtc) {
      //   let result= {data}
      //   return result
      // }
      getUser: function(username) {
        return axios.get("/api/user/" + username);
      }

      
  } 


console.log(allData)
  // Vin: 4S3BMHB68B3286050,  5NPD84LF9KH419178, JH4DA9340NS001774