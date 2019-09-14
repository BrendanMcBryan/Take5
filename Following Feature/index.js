var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Capaluna$731600",
  database: "take5_db"
});




















////////////////////////////////////////////////////////////////////////
connection.connect(function(err) {
  console.log("Connected as id:" + connection.threadId);
});

// userChoice = $("followBtn").on("click") {
//     $("followBtn").val();
// }

function updateFollowUserTable {
    $('#followBtn').click(function(){
        Connection.query(
            "UPDATE * FROM follow_users WHERE ?"
        )
        //It gets posted onto the follow_users table.
    });
};

function pushFollowersIntoArray {

//When profile is reloaded/refreshed/opened the user's followers id's get pushed into an array// 
//Whats being requested is to create an array that includes the id's of the users who are following them//

}

function findUsernameForIDs {
    //*We need to somehow to associate those id's to usernames and have them the first five appear on the landing page.//
    //But that would mean having to know the username information as well///
}

function display5Friends {
//Display 5 friends//
}

var userID= //How does the server know who is logged-in?
var appearances = //this would be the actual number of followers after they've been counted//

function countFollowers {
    Connection.query(
        "SELECT * FROM follow_users WHERE followed_id LIKE {user_id}",
        //or "SELECT followed_id, count(*) from follow_users"
        //or "SELECT followed_id, "
        [follow_users, followed_id],
    function(err, res) {
        console.log("number of followers is" + user_id * appearances + " ");
        }
    )

    //summed in the array and then printed.
    //Itll calculate the number by adding the number of times the user_id appears in the followed_id column.
    
};


