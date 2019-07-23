// changed 23JUL2019 by RobinHC to ceate customer get route

const db = require("../models");
module.exports = function(app) {

    app.get("/api/customer/:phonenumber", function(req, res) {
        db.Customer.findOne({
            where: { phonenumber: req.params.phonenumber },
            attributes: [ 
                ['id', 'Customerid'], 
                ['firstname', 'firstname'],
                ['lasttname', 'lastname'],
                ['address', 'address']
             ] ,
            // include: [db.Vehicle]
            include: [{
                model: db.Vehicle,
                attributes: [ 
                    ['vehicle_vin'         , 'vin'          ] ,  
                    ['vehicle_color'       , 'color'        ] ,
                    ['vehicle_year'        , 'year'         ] ,
                    ['vehicle_make'        , 'make'         ] ,
                    ['vehicle_model'       , 'model'        ] ,
                    ['vehicle_engine'      , 'engine'       ] ,
                    ['vehicle_transmission', 'transmission' ]
                 ]                
            }]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

}
  