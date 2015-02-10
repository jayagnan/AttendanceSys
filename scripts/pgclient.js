module.exports = function(connStr){

	var pg = require('pg');
	var clientObj;

	console.log("Connection String => %s",connStr);

	var callBackClient = function(err,client,done){

		console.log("Inside pg connect");

		if(err){
			console.log("Error occurred while connecting to db - postgre sql!!! %s",connStr);
			console.log(err);
			return null;
		}

		console.log("Inside PGCLIENT => %s",client[0]);

		return {
			client:client,
			done:done
		};
		
	};

	pg.connect(connStr,callBackClient);

	return callBackClient;

}

//module.exports = pgclient;