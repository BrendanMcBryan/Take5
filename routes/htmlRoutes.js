var db = require("../models");

module.exports = function(app) {
  // app.post("/signin", (req, res) => {
  //   console.log("lfjaiefja");
  // });

  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  //Load signup page
  app.get("/signup", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.render("signup", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/signin", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.render("signin", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/dashboard", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.render("dashboard", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
