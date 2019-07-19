
   const db = require("../models");
   module.exports = function(app) {

  // -------------------------------
  // Get user with matching userName
  // -------------------------------
  app.get("/api/user/:username", function(req, res) {
    db.User.findOne({
      where: { userName: req.params.username }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // --------------------------------------------------
  // POST route for saving a new User - added 20MAY2019
  // --------------------------------------------------
  app.post("/api/user", function(req, res) {
    // create takes an argument of an object describing
    // the item we want to insert into our table.
    //console.log("req.body is", req.body)
    db.User.create({
      userName: req.body.username,
      password: req.body.password,
      hint:     req.body.hint
    }).then(function(dbUser) {
      // We have the added user as an argument
      res.json(dbUser);
    });
  });
};

//   // Delete an example by id
//   app.delete("/api/examples/:id", function (req, res) {
//     db.Example.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function (dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
