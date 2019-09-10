var express = require("express");

var router = express.Router();

var passport = require("../config/passport/passport");

router.get("/signin", function(req, res) {
    res.render("signin", data);
});

// var exports = (module.exports = {});

// exports.signup = function(req, res) {
//   res.render("signup");
// };

// exports.signin = function(req, res) {
//   res.render("signin");
// };

// exports.dashboard = function(req, res) {
//   res.render("dashboard");
// };

// exports.logout = function(req, res) {
//   req.session.destroy(function(err) {
//     res.redirect("/");
//   });
// };

// Export routes for server.js to use.
module.exports = router;
