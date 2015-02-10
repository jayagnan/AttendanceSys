var executeQuery = require('./executeQuery')
var query = require('./query')

module.exports={

		getAllShiftAllocation : function(callback){
							var qry = query.getAllShiftAllocationQry();
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		getShiftAllocationById : function(shiftalloc,callback){
							var qry = query.getShiftAllocationByIdQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		addShiftAllocation : function(shiftalloc,callback){
							var qry = query.getAddShiftAllocationQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		updateShiftAllocation : function(shiftalloc,callback){
							var qry = query.getUpdateShiftAllocationQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		deleteShiftAllocation : function(shiftalloc,callback){
							var qry = query.getDeleteShiftAllocationQry(shiftalloc);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						}											
}