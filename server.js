require("dotenv").config();

var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("./config/passport/passport");
var session = require("express-session");

// var users = require("./models/user.js");
// console.log(db.user)
// console.log(typeof models);
//load passport strategies
// require("./config/passport/passport.js")(passport, db.user);
var db = require("./models");
var PORT = process.env.PORT || 3000;

var app = express();
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// For Passport
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// app.use(flash());
// require("./config/passport/passport")(passport)

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// require("./routes/auth")(app, passport);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
