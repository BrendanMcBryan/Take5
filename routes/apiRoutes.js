var db = require("../models");
// var authController = require("../controllers/authcontroller");
// eslint-disable-next-line
var passport = require("../config/passport/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/signin", passport.authenticate("local"), function(req, res) {
    res.redirect("/dashboard");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/signin");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Get all things
  app.get("/api/things", function(req, res) {
    db.Thing.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  // Get all things
  app.get("/api/uthings", function(req, res) {
    db.Thing.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  // Create a new things
  app.post("/api/things", function(req, res) {
    db.Thing.create({
      category: req.body.category,
      thing: req.body.thing
    }).then(function(dbthing) {
      res.json(dbthing);
      console.log(dbthing);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.User.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
