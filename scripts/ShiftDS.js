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
							var qry = query.getShiftByIdQry(Shift);
                                                        executeQuery(qry,function(err,results){
                                                                if(err){
								       callback(err,results);
							        }
							        var obj = results.rows[0];
								if(obj){
									var Shift = {};
									Shift.ShiftId = obj.ShiftId;
									Shift.EmployeeId = obj.EmployeeId;
									
									var time = new time(obj.time);
									emp.DateOfJoin = date.getFullYear()+"-"+wrapDate(date.getMonth() + 1)+"-"+wrapDate(date.getDate());
									Shift.comments= obj.comments;
									results.rows = Shift;
								}
								callback(err,results);

							});
						},
                                                        
						
		addShift : function(shift,callback){

							var addQry = query.getAddShiftQry();
							console.log("Inside Shift DS:: => "+addQry);
							executeQuery(addQry,function(err,results){
								console.log("Inside Shift DS, ** Callback ** :: => "+JSON.stringify(results));

								callback(err,results);
							});
						},
							
		updateShift : function(shift,callback){
							var updateqry = query.getUpdateShiftQry(shift);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						},
		deleteShift : function(shift,callback){
							var deleteqry = query.getDeleteShiftQry(shift);
							executeQuery(qry,function(err,results){
								callback(err,results);
							});
						}											
}