
// Changed 06-JUL-2019 by RRH to create file with route to get all tasks
// Changed 21-JUL-2019 by RRH to update /api/tasks/ to new database tables


// create the sequelize db constant variable 
// and set it to the required sequelize models
// set module.exports to the function that defines the routes

   const db = require("../models");
   module.exports = function(app) {

// --------------------------------------------------------------
// Define the GET route for getting all of the tasks
// Add an "include" property to the options in the findAll query
// and set the value to an array of the models we want to include 
// in a left outer join.  In this case, just db.Bay
// --------------------------------------------------------------
//
   app.get("/api/tasks/", function(req, res) {
      db.Task.findAll({
         attributes: [ 
            ['id', 'key'], 
            ['task_name', 'name'],
            ['task_duration', 'duration']
         ] ,
         include: [db.Bay, db.Vehicle]
      }).then(function(dbTask) {
         res.json(dbTask);
      });
   });

   app.get("/api/tasks/:bay", function(req, res) {
      var query = {};
      if (req.query.Bay_id) {
         query.BayId = req.query.bay_id;
      }
      db.Task.findAll({
         where: query,
         include: [db.Bay] // We set include: to an array of, in this case, just db.Bay
      }).then(function(dbTask) {
         res.json(dbTask);
      });
   });

  // // Get route for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Bay
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Bay]
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // POST route for saving a new post
  // app.post("/api/posts", function(req, res) {
  //   db.Post.create(req.body).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });
};
