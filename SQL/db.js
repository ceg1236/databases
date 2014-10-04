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
  dbConnection.query(msgs, cb); // ?

};

exports.findUser = function(username, cb){
  console.log('findUser username: ' , username);
  var user = 'select * from messages where username = ' + "'" + username + "'";
  dbConnection.query(user, function(e, d) {
    console.log('data: ', d);
    cb(e,d);
  });

  // what exactly do we return here?
  // how do we handle this cb() -- what is passed?
  // messages?
};

exports.saveUser = function(username, cb){
  // we want to insert this user to the username collumn
  console.log('saveUser: ', username);

  var user = 'insert into messages(username) values('+"'"+username+"'"+');';
  dbConnection.query(user, cb);
};

exports.saveMessage = function(message, userid, roomname, cb){
  var querystr = 'insert into messages(message, id, roomname) values('+message+','+userid+','+ roomname+');';
  dbConnection.query(querystr, cb);
};
