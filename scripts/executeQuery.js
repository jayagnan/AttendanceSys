module.exports = function(query,callback){

var pg = require('pg');
var dbconfig = require('./dbconfig');
var db = require('./db');

var conString = "postgres://postgres@localhost:5432/Attendance";

//var conString = "postgres://"+dbconfig.username+"@"+dbconfig.server+":"+dbconfig.port+"/"+db.dbname;

	try{
		var client = new pg.Client(conString);
	}
	catch(err){
		console.error("Error occured while getting client "+err);
	}

	try{
		console.log("Query => "+query);

			client.connect(function(err){

				if(err){
					console.log("Error occurred while getting connection!!!");
					console.log(err);
					callback(err);
				}

				client.query(query,function(err,results){
					console.log("Query executed!!!");
					//done(client);
					callback(err,results);
					client.end();
				});

			});

	}
	catch(err1){
		console.log("Error while connecting to db or executing the query => "+err1);
	}

}