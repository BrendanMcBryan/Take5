// Get references to page elements
var $loginBTN = $("#signin-btn");

var $category = $("#category");
var $thing1 = $("#thing1");
var $thing2 = $("#thing2");
var $thing3 = $("#thing3");
var $thing4 = $("#thing4");
var $thing5 = $("#thing5");

var $submitBtn = $("#submitNew5");
// var $userID = $("#userNum");

// The API object contains methods for each kind of request we'll make
var API = {
  saveThing: function(thing) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/things",
      data: JSON.stringify(thing)
    });
  },
  logUserFaves: function(userPicks) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/userfavs",
      data: JSON.stringify(userPicks)
    });
  },
  getThings: function() {
    return $.ajax({
      url: "api/things",
      type: "GET"
    });
  },

  deleteExample: function(id) {
    return $.ajax({
      url: "api/things/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  // TODO DRY This section
  // cylce through and log things to Things DBalso park number in user table.

  var userspan = document.getElementById("userNum");
  var userserial = parseInt(userspan.textContent);

  var thingOne = {
    usernumber: userserial,
    category: $category.val().trim(),
    thing: $thing1.val().trim()
  };
  API.saveThing(thingOne).then(function() {});

  var thingTwo = {
    usernumber: userserial,
    category: $category.val().trim(),
    thing: $thing2.val().trim()
  };
  API.saveThing(thingTwo).then(function() {});

  var thingThree = {
    usernumber: userserial,
    category: $category.val().trim(),
    thing: $thing3.val().trim()
  };
  API.saveThing(thingThree).then(function() {});

  var thingFour = {
    usernumber: userserial,
    category: $category.val().trim(),
    thing: $thing4.val().trim()
  };
  API.saveThing(thingFour).then(function() {});

  var thingFive = {
    usernumber: userserial,
    category: $category.val().trim(),
    thing: $thing5.val().trim()
  };
  API.saveThing(thingFive).then(function() {});

  $category.val("");
  $thing1.val("");
  $thing2.val("");
  $thing3.val("");
  $thing4.val("");
  $thing5.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

var handleLogIn = function() {
  return $.ajax({
    url: "/dashboard",
    type: "GET"
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);

$loginBTN.on("click", handleLogIn);
// console.log("hello");
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
