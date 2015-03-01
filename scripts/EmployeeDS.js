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
								if(err){
									callback(err,results);
								}
								
								var obj = results.rows[0];
								if(obj){
									var emp = {};
									emp.EmployeeId = obj.empid;
									emp.EmployeeName = obj.empname;
									emp.DepartmentId = obj.department;
									var date = new Date(obj.dateofjoin);
									emp.DateOfJoin = date.getFullYear()+"-"+wrapDate(date.getMonth() + 1)+"-"+wrapDate(date.getDate());
									emp.Designation = obj.designation;
									results.rows = emp;
								}
								callback(err,results);

							});
						},
		getEmployeesByDept : function(emp,callback){

					var qry = query.getEmployeeByDeptQry(emp);
					console.log("Query ::"+qry);
					executeQuery(qry,function(err,results){
						callback(err,results);
					});
				},
				
		addEmployee : function(emp,callback){
		
							var addQry = query.getAddEmployeeQry(emp);
							console.log("Inside Employee DS:: => "+addQry);
							executeQuery(addQry,function(err,results){
								console.log("Inside Employee DS, ** Callback ** :: => "+JSON.stringify(results));

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


var wrapDate = function(num){
			return num < 10 ? "0" + num : ""+num;
}				