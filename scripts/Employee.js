var empDs = require('./EmployeeDS');

module.exports={

	getAllEmployees : function(res){
							//var employee = JSON.parse(jsonStr);
							empDs.getAllEmployees(function(err,results){
								if(err){
									console.log(err);
									res.write("Unable to get all employees!!!");
								}
								console.log("=>Got employee information from DB!!!"+JSON.stringify(results.rows));
								res.write(JSON.stringify(results.rows));
							});
						},
	getEmployeeById : function(res,jsonStr){
							console.log("JSON STRING =>"+jsonStr);
							var employee = JSON.parse(jsonStr);
							empDs.getEmployeeById(employee,function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get employee info!!!");
								}
								console.log("=>Got employee information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	addEmployee : function(res,jsonStr,callback){
						var employee = JSON.parse(jsonStr);
						empDs.addEmployee(employee,function(err,results){
							if(err){
								console.log(err);
								res.write("Unable to add employee record!!!");
							}
							console.log("=>Employee record added successfully!!!");
							var response ="Employee record added successfully!!!";
							//return response;
							
							//res.writeHead(200, {'content-type': 'text/plain'});
							//res.end("Employee record added successfully!!!");
							callback(response);
						});
					},
	updateEmployee : function(res,jsonStr){
						var employee = JSON.parse(jsonStr);
						empDs.updateEmployee(employee,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to update employee record!!!");
							}
							console.log("=>Employee record updated successfully!!!");
							res.end("Employee record updated successfully!!!");
						});
					},
	deleteEmployee : function(res,jsonStr){
						var employee = JSON.parse(jsonStr);
						empDs.deleteEmployee(employee,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to delete employee record!!!");
							}
							console.log("=>Employee record deleted successfully!!!");
							res.end("Employee record deleted successfully!!!");
						});
					}

		
}