var pgclient = require('./pgclient.js');
console.log("pgclient => %s",pgclient);

var connStr = "postgres://postgres@localhost:5432/Attendance";
var clientObj = pgclient(connStr);
/*
console.log("clientObj => %s",clientObj);
var query = "select * from employee";
clientObj.client.query(query,function(err,result){

	if(err){
		console.log("error occured while querying!!!");
		console.log(err);
	}
	clientObj.done();
	console.log(result);

})
*/