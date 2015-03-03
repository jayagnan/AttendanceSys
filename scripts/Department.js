var depDs = require('./DepartmentDS');

module.exports={

	getAllDepartments : function(res){
							//var Department = JSON.parse(jsonStr);
							depDs.getAllDepartments(function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get  all Department !!!");
								}
								console.log("=>Got Department information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	getDepartmentById : function(res,jsonStr){
							
                                                        console.log("JSON STRING =>"+jsonStr);
                                                        var Department = JSON.parse(jsonStr);
							depDs.getDepartmentById(Department,function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get Department info!!!");
								}
								console.log("=>Got Department information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	addDepartment : function(res,jsonStr){
						var Department = JSON.parse(jsonStr);
						depDs.addDepartment(Department,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to add Department record!!!");
							}
							console.log("=>Department record added successfully!!!");
							res.end("Department record added successfully!!!");
						});
					},
	updateDepartment : function(res,jsonStr){
						var Department = JSON.parse(jsonStr);
						depDs.updateDepartment(Department,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to update Department record!!!");
							}
							console.log("=>Department record updated successfully!!!");
							res.end("Department record updated successfully!!!");
						});
					},
	deleteDepartment : function(res,jsonStr){
						var Department= JSON.parse(jsonStr);
						depDs.deleteDepartment(Department,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to delete Department record!!!");
							}
							console.log("=>Department record deleted successfully!!!");
							res.end("Department record deleted successfully!!!");
						});
					}

		
}