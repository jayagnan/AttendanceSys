var executeQuery = require('./executeQuery')
var query = require('./query')

module.exports={

		getAllShifts : function(callback){
							var qry = query.getAllShiftsQry();
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		getShiftById : function(shift,callback){
							var qry = query.getShiftByIdQry(shift);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		addShift : function(shift,callback){
							var qry = query.getAddShiftQry(shift);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		updateShift : function(shift,callback){
							var qry = query.getUpdateShiftQry(shift);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		deleteShift : function(shift,callback){
							var qry = query.getDeleteShiftQry(shift);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						}											
}