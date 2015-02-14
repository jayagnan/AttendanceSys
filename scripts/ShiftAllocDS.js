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
								if(err){
									callback(err,results);
								}
								
								var obj = results.rows[0];
								if(obj){
									var Shift = {};
									Shift.EmployeeId = obj.empid;
									Shift.ShiftId = obj.ShiftId;
									var date = new Date(obj.from date);
									Shift.from date = date.getFullYear()+"-"+wrapDate(date.getMonth() + 1)+"-"+wrapDate(date.getDate());
                                                                        var date1 =new Date(obj.to date);
                                                                        Shift.to date = date.getFullYear()+"-"+wrapDate(date.getMonth() + 1)+"-"+wrapDate(date.getDate());                 
									results.rows = Shift;
								}
								callback(err,results);

							});
						},
                                                        
							});
						},
		addShiftAllocation : function(shiftalloc,callback){
							var addQry = query.getaddShiftAllocationQry(Shiftalloc);
							console.log("Inside ShiftAlloc DS:: => "+addQry);
							executeQuery(addQry,function(err,results){
								console.log("Inside ShiftAlloc DS, ** Callback ** :: => "+JSON.stringify(results));

								callback(err,results);
							});
						},
		updateShiftAllocation : function(shiftalloc,callback){
							var qry = query.getUpdateShiftAllocationQry(shiftalloc);
							executeQuery(updateqry,function(err,results){
								callback(err,results);
							});
						},
		deleteShiftAllocation : function(shiftalloc,callback){
							var qry = query.getDeleteShiftAllocationQry(shiftalloc);
							executeQuery(deleteqry,function(err,results){
								callback(err,results);
							});
						}											
}
var wrapDate = function(num){
			return num < 10 ? "0" + num : ""+num;
}