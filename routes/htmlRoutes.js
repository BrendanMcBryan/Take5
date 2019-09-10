// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("index");
  });

  // TODO original route

  //Load signup page

  app.get("/signup", function(req, res) {
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("signup");
  });

  app.get("/signin", function(req, res) {
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("signin");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dashboard", isAuthenticated, function(req, res) {
    res.render("dashboard");
  });


  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  //Load signup page
  // app.get("/signup", function(req, res) {
  //   db.User.findAll({}).then(function(dbExamples) {
  //     res.render("signup", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // app.get("/signin", function(req, res) {
  //   db.User.findAll({}).then(function(dbExamples) {
  //     res.render("signin", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // app.get("/dashboard", function(req, res) {
  //   db.User.findAll({}).then(function(dbExamples) {
  //     res.render("dashboard", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get("/dashboard", function(req, res) {
    res.render("profile");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
