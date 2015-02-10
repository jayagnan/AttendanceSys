var executeQuery = require('./executeQuery');
var query = "select * from employee";


executeQuery(query,function(err,results){
	if(err){
		console.log("Error while executing query!!!");
	}
	console.log(results.rows);
});

/**
Query.js - with only queries
config.js - with db configuration


*/