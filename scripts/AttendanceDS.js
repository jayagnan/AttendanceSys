var executeQuery = require('./executeQuery')
var query = require('./query')

module.exports={

		getAllAttendance : function(callback){
							var qry = query.getAllAttendanceQry();
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		getAttendanceByEmp : function(att,callback){
							var qry = query.getAttendanceByEmpQry(att);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		addAttendance : function(att,callback){
							var qry = query.getAddAttendanceQry(att);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		updateAttendance : function(att,callback){
							var qry = query.getUpdateAttendanceQry(att);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		deleteAttendance : function(att,callback){
							var qry = query.getDeleteAttendanceQry(att);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		getAttendanceByDate : function(att,callback){
							var qry = query.getAttendanceByDateQry(att);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						}

}