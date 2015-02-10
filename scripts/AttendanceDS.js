var executeQuery = require('./executeQuery')
var query = require('./query')

module.exports={

		getAllAttendance : function(callback){
							var qry = query.getAllAttendanceQry();
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		getAttendanceByEmp : function(shiftalloc,callback){
							var qry = query.getAttendanceByEmpQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		getAttendanceByDate : function(shiftalloc,callback){
							var qry = query.getAttendanceByDateQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		addAttendance : function(shiftalloc,callback){
							var qry = query.getAddAttendanceQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		updateAttendance : function(shiftalloc,callback){
							var qry = query.getUpdateAttendanceQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		deleteAttendance : function(shiftalloc,callback){
							var qry = query.getDeleteAttendanceQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						}											
}