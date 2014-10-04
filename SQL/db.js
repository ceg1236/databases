var mysql = require('mysql');
// var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/




exports.findAllMessages = function(cb){
  //mysql.query(//// , parameters] , callback )
  // return all messages from messages table
  var msgs = 'select message from messages';
  dbConnection.query(msgs, function(e,d) {
    cb(e,d);
  }); //

};

exports.findUser = function(username, cb){

  var user = 'select * from messages where username = ?;';
  dbConnection.query(user, [ username ] , cb);
};

exports.saveUser = function(username, cb){

  var user = 'insert into messages(username) values(?);';
  dbConnection.query(user, [username], function(e,d) {
    cb(e,d);
  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  var queryString= 'insert into messages(message, id, roomname) values(?, ?, ?);';
  dbConnection.query(queryString,[ message, userid, roomname ], cb);
};
