// Get references to page elements
var $loginBTN = $("#signin-btn");

var $category = $("#category");
var $thing1 = $("#thing1");
var $thing2 = $("#thing2");
var $thing3 = $("#thing3");
var $thing4 = $("#thing4");
var $thing5 = $("#thing5");

var $submitBtn = $("#submitNew5");

var $exampleList = $("#example-list");

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
  console.log("form submitted");
  event.preventDefault();

  var thingOne = {
    category: $category.val().trim(),
    thing: $thing2.val().trim()
  };
  API.saveThing(thingOne).then(function() {
    refreshExamples();
  });

  var thingTwo = {
    category: $category.val().trim(),
    thing: $thing2.val().trim()
  };
  API.saveThing(thingTwo).then(function() {
    refreshExamples();
  });

  var thingThree = {
    category: $category.val().trim(),
    thing: $thing2.val().trim()
  };
  API.saveThing(thingThree).then(function() {
    refreshExamples();
  });

  var thingFour = {
    category: $category.val().trim(),
    thing: $thing2.val().trim()
  };
  API.saveThing(thingFour).then(function() {
    refreshExamples();
  });

  var thingFive = {
    category: $category.val().trim(),
    thing: $thing2.val().trim()
  };
  API.saveThing(thingFive).then(function() {
    refreshExamples();
  });


  // $category.val("hey there");
  $thing1.val("");
  $thing2.val("");
  $thing3.val("");
  $thing4.val("");
  $thing5.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

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
