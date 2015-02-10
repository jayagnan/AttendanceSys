var executeQuery = require('./executeQuery');
var query = require('./query');
var ds = require('./datastruct');
var fileName = "emp.json";

module.exports={

		getAllEmployees : function(callback){
		
							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}

							var arr = [];
							var results = {};

							for(i in allEmp){
								arr.push(allEmp[i]);
							}
							results.rows = arr;

							callback(null,results);
						},
		getEmployeeById : function(emp,callback){
		
							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}
							var results = {};
							results.rows = allEmp[emp.EmployeeId];
							callback(null,results);
						},

		addEmployee : function(emp,callback){
							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}
							allEmp[emp.EmployeeId] = emp;
							ds.update(fileName,allEmp);

							callback(null,JSON.stringify(emp));
						},

		deleteEmployee : function(emp,callback){

							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}
							delete allEmp[emp.EmployeeId];
							ds.update(fileName,allEmp);

							callback(null,JSON.stringify(emp));
						},

		updateEmployee : function(emp,callback){

							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}
							allEmp[emp.EmployeeId] = emp;
							ds.update(fileName,allEmp);

							callback(null,JSON.stringify(emp));
						}
}