var db = require("../models");
var authController = require("../controllers/authcontroller");
// eslint-disable-next-line
var passport = require("passport");
require("../config/passport/passport")(passport);

module.exports = function(app) {
  // this is the post route from auth.js. For some reason it will not work unless it goes in this file(apiRoutes.js)
  // app.get("/signup", authController.signup);

  // app.get("/signin", passport.authenticate(""), authController.signin);

  // app.post(
  //   "/signin",
  //   passport.authenticate("", {
  //     successRedirect: "/dashboard",

  //     failureRedirect: "/signup"
  //   }),
  //   function(req, res) {
  //     res.redirect(307, "/dashboard");
  //   }
  // );

  // app.post("/signup", function(req, res) {
  //   db.User.create({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  //     .then(function() {
  //       res.redirect(307, "/dashboard");
  //     })
  //     .catch(function(err) {
  //       res.status(401).json(err);
  //     });
  // });

  
  // app.get("/signin", passport.authenticate("local"), authController.signin);
  // app.get(
  //   "/signin",
  //   passport.authenticate("local-signup", {
  //     successRedirect: "/dashboard",

  //     failureRedirect: "/signup"
  //   })
  // );

  // app.get("/signin", function(req, res) {
  //   res.json(req.user);
  // res.redirect(307, "/");
  // });

  // app.get('/dashboard',isLoggedIn, authController.dashboard);

  // function isLoggedIn(req, res, next) {
  //     if (req.isAuthenticated())

  //         return next();

  //     res.redirect('/signin');
  // }

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
