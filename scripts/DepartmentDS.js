var executeQuery = require('./executeQuery')
var query = require('./query')

module.exports={

		getAllDepartments : function(callback){
							var getDepQry = query.getAllDepartmentsQry();
							executeQuery(getDepQry,function(err,results){
								callback(err,results);
							});
						},
		getDepartmentById : function(dep,callback){
							var getDepByIdQry = query.getDepartmentByIdQry(dep);
							executeQuery(getDepByIdQry,function(err,results){
								callback(err,results);
							});
						},
		addDepartment : function(dep,callback){
							var getAddQry = query.getAddDepartmentQry(dep);
							executeQuery(getAddQry,function(err,results){
								callback(err,results);
							});
						},
		updateDepartment : function(dep,callback){
							var updateDepQry = query.getUpdateDepartmentQry(dep);
							executeQuery(updateDepQry,function(err,results){
								callback(err,results);
							});
						},
		deleteDepartment : function(dep,callback){
							var deleteDepQry = query.getDeleteDepartmentQry(dep);
							executeQuery(deleteDepQry,function(err,results){
								callback(err,results);
							});
						}											
}