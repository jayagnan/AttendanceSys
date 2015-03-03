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
								//callback(err,results);
							
                              var obj = results.rows[0];
                              console.log("Got department info from DB - DepartmentDS"+obj);
								if(obj){
									var dep = {};
									dep.DepartmentId = obj.departmentid;
									dep.DepartmentName = obj.departmentname;
									dep.ManagerId = obj.managerid;
									results.rows = dep;
								}
								callback(err,results);

							});
						},
		addDepartment : function(dep,callback){
							var getAddQry = query.getAddDepartmentQry(dep);
                             console.log("Inside Department DS:: => "+getAddQry);
							executeQuery(getAddQry,function(err,results){
                             console.log("Inside Department DS, ** Callback ** :: => "+JSON.stringify(results));

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
							});						}											
}