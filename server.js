// Changed on 06-JUL-2019 to add database layer and reformat tab=3spaces

// --------------------------------------------------------------------
// create the express contstant and load the express library in it
// create the express app constant
// create the express PORT constant, default to 3001 if no env variable
// --------------------------------------------------------------------
   const express = require("express");
   const app     = express();
   const PORT    = process.env.PORT || 3001;


// -----------------------------------------------
// Define middleware layer for urlencoded and json 
// Serve up static assets (usually on heroku)
// Add backend routes, for API and view (not DB)
// -----------------------------------------------
   app.use(express.urlencoded({ extended: true }));
   app.use(express.json());
   if (process.env.NODE_ENV === "production") {
      app.use(express.static("client/build"));
   }
   // const routes = require("./routes");
   // app.use(routes);


// --------------------------------------------
// Define database layer for Sequlize and MySQL
// --------------------------------------------
   var db = require("./models");
   require ("./routes/express-routes-api-db-tasks.js")(app);
   // require("./routes/task-api-routes.js")(app);
   // mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");


// --------------------------------------
// Syncinize the sequelize models 
// Use force: true to recreate all tables
// Then start the express API server
// --------------------------------------
   db.sequelize.sync({ force: false }).then(function() {
      app.listen(PORT, function() {
         console.log(' ')
         console.log(`==> Express API Server now listening on PORT ${PORT}!`);
         console.log(' ')
      });
   });

