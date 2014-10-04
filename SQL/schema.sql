CREATE DATABASE chat;

USE chat;



CREATE TABLE messages (
  /* Describe your table here.*/
  /* Contains username, userID, rmname, and messageContent */
  id integer NOT NULL AUTO_INCREMENT,
  username varchar(15),
  /*this is where we should create an id for each message*/

  roomname varchar(10),
  message varchar(140),
  PRIMARY KEY(id)

);

/* Create other tables and define schemas for them here! */
CREATE TABLE user (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(15),
  messages VARCHAR(140),
  roomname VARCHAR(15),
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




/* data from chatter box
var data = {
  friends: [],
  rooms: [],
  currentRoom: 'General',
  chats: {}
};
*/
