var executeQuery = require('./executeQuery');
var query = require('./query');
var ds = require('./datastruct');
var fileName = "dep.json";

module.exports={

		getAllDepartments : function(callback){
		
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
		getDepartmentById : function(emp,callback){
		
							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}
							var results = {};
							results.rows = allEmp[emp.DepartmentId];
							callback(null,results);
						},

		addDepartment : function(emp,callback){
							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}
							allEmp[emp.DepartmentId] = emp;
							ds.update(fileName,allEmp);

							callback(null,JSON.stringify(emp));
						},

		deleteDepartment : function(emp,callback){

							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}
							delete allEmp[emp.DepartmentId];
							ds.update(fileName,allEmp);

							callback(null,JSON.stringify(emp));
						},

		updateDepartment : function(emp,callback){

							var data = ds.get(fileName);
							var allEmp = {};
							console.log("data -> "+data);
							if(data !== ''){
							 allEmp = JSON.parse(data);
							}
							allEmp[emp.DepartmentId] = emp;
							ds.update(fileName,allEmp);

							callback(null,JSON.stringify(emp));
						}
}