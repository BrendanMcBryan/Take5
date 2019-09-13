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

  // Create a new things
  // This doozy does the work of logging all the table data.
  // The things are logged to the thing table,
  // and the user's favorites data is adjusted.
  app.post("/api/things", function(req, res) {
    db.Thing.create({
      category: req.body.category,
      thing: req.body.thing
    }).then(function(dbthing) {
      console.log("thing ID Below");
      console.log(dbthing.id);
      db.User.findOne({ where: { id: req.body.usernumber } }).then(function(
        result
      ) {
        console.log("Result Below");
        var curFavs = [];
        curFavs.push(result.favorites);
        curFavs.push(dbthing.id);
        console.log(curFavs);
        console.log("cur favs again");
        console.log(curFavs);

        db.User.update(
          {
            favorites: curFavs
          },
          {
            where: {
              id: result.id
            }
          }
        ).then(function(dbu) {
          res.json(dbu);
        });
      });

      // console.log(dbthing);
    });
  });
};
