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


};

exports.findUser = function(username, cb){
  console.log('this is not working');
  var user = ''
};

exports.saveUser = function(username, cb){

};

exports.saveMessage = function(message, userid, roomname, cb){
  var querystr = 'insert into messages(message, username, roomname)sp values(message, userid, roomname)';
  mysql.query(querystr, function() {
    return cb();
  });
};
