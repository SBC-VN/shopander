import axios from "axios";

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//     "authorization": "Basic NDZjYWMwNjAtMDUwMC00ZWYwLTlkNmUtMzgzOTE0NTRkNjFh",
//     "partner-token": "0e88baba98b64e908de31bf1adf1cbf2"
//   }
// };
// axios
//   .get(
//     "http://api.carmd.com/v3.0/repair?vin=1GNALDEK9FZ108495&mileage=51000&dtc=p0420",
//     config
//   )
//   .then(function(response) {
//     console.log(response.data);
//   });


  export default {
      getVIN: function(VIN) {
          return axios.get(`http://api.carmd.com/v3.0/decode?vin=${VIN}`)
      }, 
      getRepair: function(VIN, miles, dtc) {
          return axios.get(`http://api.carmd.com/v3.0/repair?vin=${VIN}&mileage=${miles}&dtc=${dtc}`)
      }

      
  } 