var executeQuery = require('./executeQuery')
var query = require('./query')

module.exports={

		getAllEmployees : function(callback){
		
							var qry = query.getAllEmployeesQry();
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		getEmployeeById : function(emp,callback){
		
							var qry = query.getEmployeeByIdQry(emp);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		addEmployee : function(emp,callback){
		
							var addQry = query.getAddEmployeeQry(emp);
							console.log("Inside Employee DS:: => "+addQry);
							executeQuery(addQry,function(err,results){
								console.log("Inside Employee DS, ** Callback ** :: => "+JSON.stringify(results.rows));

								callback(err,results);
							});
						},
		deleteEmployee : function(emp,callback){

							var deleteQry = query.getDeleteEmployeeQry(emp);
							executeQuery(deleteQry,function(err,results){
								callback(err,results);
							});
						},
		updateEmployee : function(emp,callback){

							var updateQry = query.getUpdateEmployeeQry(emp);
							executeQuery(updateQry,function(err,results){
								callback(err,results);
							});
						}
}