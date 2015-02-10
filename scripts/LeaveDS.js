var executeQuery = require('./executeQuery')
var query = require('./query')

module.exports={

		getAllLeaves : function(callback){
							var qry = query.getAllLeavesQry();
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		getLeaveById : function(leave,callback){
							var qry = query.getLeaveByIdQry(leave);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		addLeave : function(leave,callback){
							var qry = query.getAddLeaveQry(leave);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		updateLeave : function(leave,callback){
							var qry = query.getUpdateLeaveQry(leave);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		deleteLeave : function(leave,callback){
							var qry = query.getDeleteLeaveQry(leave);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						}											
}