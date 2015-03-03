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
									Shift.EmployeeId = obj.employeeid;
									Shift.ShiftId = obj.shiftid;
									var date = new Date(obj.fromdate);
									Shift.FromDate = date.getFullYear()+"-"+wrapDate(date.getMonth() + 1)+"-"+wrapDate(date.getDate());
                                    var date1 =new Date(obj.todate);
                                    Shift.ToDate = date1.getFullYear()+"-"+wrapDate(date1.getMonth() + 1)+"-"+wrapDate(date1.getDate());                 
									results.rows = Shift;
								}
								callback(err,results);

							});
						},
                                                        
						
		addShiftAllocation : function(shiftalloc,callback){
			                console.log("ShiftAlloc JS == ShiftAlloc "+JSON.stringify(shiftalloc));
							var addQry = query.getAddShiftAllocationQry(shiftalloc);
							console.log("Inside ShiftAlloc DS:: => "+addQry);
							executeQuery(addQry,function(err,results){
							console.log("Inside ShiftAlloc DS, ** Callback ** :: => "+JSON.stringify(results));

								callback(err,results);
							});
						},
		updateShiftAllocation : function(shiftalloc,callback){
							var updateqry = query.getUpdateShiftAllocationQry(shiftalloc);
							executeQuery(updateqry,function(err,results){
								callback(err,results);
							});
						},
		deleteShiftAllocation : function(shiftalloc,callback){
							var deleteqry = query.getDeleteShiftAllocationQry(shiftalloc);
							executeQuery(deleteqry,function(err,results){
								callback(err,results);
							});
						},

		getShiftAllocationForDept:  function(shiftalloc,callback){
							var qry = query.getShiftAllocationForDeptQry(shiftalloc);
							console.log("Shift allocation qry"+qry);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						}															
}
var wrapDate = function(num){
			return num < 10 ? "0" + num : ""+num;
}