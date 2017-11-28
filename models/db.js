const setting = require("../setting.js");
const Db = require("mongodb").Db;
const Connection = require("mongodb").Connection;
const server = require("mongodb").Server; 

module.exports = new Db(
    setting.db,
    new server(
       setting.host,
       Connection.DEFAULT_PORT,
       {}
    	)
	);