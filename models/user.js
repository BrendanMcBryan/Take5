// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
<html>    
  <head>
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
  </head>
</html>

var bcrypt = require("bcryptjs");
var db = require("../models");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');  

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      //   allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // eslint-disable-next-line
    last_login: {
      type: DataTypes.DATE
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    favorites: {
      type: DataTypes.JSON,
      defaultValue: [0]
    },

    totalLikes: {
      type: DataTypes.INTEGER
    },
    following: {
      type: DataTypes.ARRAY
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};

//1.Storing the number the users being followed into an array//

$(document).ready(function(){
  $("#followBtn").click(function(){
    app.get("/profile/:username", function(req, res) {

const profileViewerUsername = req.params.username;
const user = db.User.findOne({ email: req.body.email }).then(userFound => {
userFound.following.push(profileViewerUsername);
//Im not sure what get pushed, if its User.following.push(profileViewerUsername);
    })
  })
});

//2. show last five people I'm following on dashboard
app.get("/dashboard", function(req, res) {
  let followingProfilesLimit;
  db.User.findOne({email: req.user.email}).then(userFound => {
    const allFollowing = userFound.following;
    followingProfilesLimit = allFollowing.slice(0,5);
    res.render("dashboard", followingProfilesLimit) 
    })
  })

});

/*
<html>

<head>
    <title>Passport with Sequelize</title>
</head>

<body>
    <h2>Dashboard</h2>
    <h5>Hurray! you are logged in.</h5>
    <div>People You Are Following</div>
    <ul>
    	   {{#each followingProfilesLimit}}
              <li class="row">{{this}}</li>
              // stephanie123
              http://handlebarsjs.com/builtin_helpers.html
            {{/each}}
    <ul>
</body>

</html>





*/