var empds = require('./EmployeeDS')
var empreqh = require('./Employee')

var depds =  require('./DepartmentDS')

var emp = {};

emp.EmployeeId = "18099"
emp.EmployeeName = "Jay61"
emp.DepartmentId = "VicSSS1"
emp.DateOfJoin = "2002-09-30"
emp.Designation = "CEO1"

var dep = {}

dep.DepartmentId = "D002";
dep.DepartmentName = "Dep51";
dep.ManagerId = "Mgr51";

var leave = {};

leave.LeaveId = "";
leave.EmployeeId = "";
leave.FromDate = "";
leave.ToDate="";
leave.Reason="";
leave.Comments = "";
leave.ApproveId="";

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
/*
empds.deleteEmployee(emp,function(err,results){

	if(err){
		console.log("Error Occurred!!!");
		console.log("Err => "+err);
	}

	if(results){
		console.log("Query successful");
		console.log("Results => "+JSON.stringify(results));
	}

});

empds.updateEmployee(emp,function(err,results){

	if(err){
		console.log("Error Occurred!!!");
		console.log("Err => "+err);
	}

	if(results){
		console.log("Query successful");
		console.log("Results => "+JSON.stringify(results));
	}

});



depds.getAllDepartments(function(err,results){
	if(err){
		console.log(err);
	}
	console.log(JSON.stringify(results.rows));
});

*/

depds.getDepartmentById(dep,function(err,results){
	if(err){
		console.log(err);
	}
	console.log(JSON.stringify(results.rows));
});

/*
depds.addDepartment(dep,function(err,results){
	if(err){
		console.log(err);
	}
	console.log(JSON.stringify(results.rows));
});


depds.updateDepartment(dep,function(err,results){
	if(err){
		console.log(err);
	}
	console.log(JSON.stringify(results.rows));
});


depds.deleteDepartment(dep,function(err,results){
	if(err){
		console.log(err);
	}
	console.log(JSON.stringify(results.rows));
});
*/