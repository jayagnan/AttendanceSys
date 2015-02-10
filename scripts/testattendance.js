var empds = require('./EmployeeDS')
var empreqh = require('./Employee')

var emp = {};

emp.EmployeeId = "18100"
emp.EmployeeName = "Jay6"
emp.DepartmentId = "VicSSS"
emp.DateOfJoin = "2002-09-30"
emp.Designation = "CEO"
/*
empds.addEmployee(emp,function(err,results){

	if(err){
		console.log("Error Occurred!!!");
		console.log("Err => "+err);
	}

	if(results){
		console.log("Query successful");
		console.log("Results => "+JSON.stringify(results));
	}

});
*/

//empreqh.addEmployee(null,JSON.stringify(emp));
//empreqh.addEmployee(null,emp);
empreqh.getAllEmployees();