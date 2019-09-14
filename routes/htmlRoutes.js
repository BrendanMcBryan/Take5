// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/isAuthenticated");

// var db = require("../models");

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
    // console.log("favs from req↕");
    // TODO here is where we build some favorites objects to send to the Profile Page

    // var resul
    // Get all things
    // var userfavs = req.user.favorites;
    // app.get("/api/uthings", function(req, res) {
    //   console.log("you are inside trying to make the block");
    //   var theThing = function(req, res) {
    //     db.Thing.findall({}).then(function(dbthing) {
    //       console.log("hello you got inside this db");
    //       console.log(res.json());
    //     });
    //     return res;
    //   };
    //   console.log(theThing);
    // });
    res.render("profile", req.user);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
