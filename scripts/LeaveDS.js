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
							console.log("Leave DS ====>>> Qry "+qry);
							executeQuery(qry,function(err,results){
                                                        if(err){
								callback(err,results);
							}
                                var obj = results.rows[0];

                                console.log("Leave DS ==> "+JSON.stringify(obj));	
								if(obj){
									var lev = {};
									lev.LeaveId = obj.leaveid;
									lev.EmployeeId = obj.employeeid;
									var date = new Date(obj.fromdate);
									lev.FromDate = date.getFullYear()+"-"+wrapDate(date.getMonth() + 1)+"-"+wrapDate(date.getDate());
                                    var date1 = new Date(obj .todate);
                                    lev.ToDate = date1.getFullYear()+"-"+wrapDate(date1.getMonth() + 1)+"-"+wrapDate(date1.getDate());
									lev.Reason = obj.reason;
                                    lev.Comments =obj.comments;
                                    lev.ApproverId=obj.approverid;
									results.rows = lev;
								}
								callback(err,results);

							});
						},                      
						
		addLeave : function(leave,callback){
			               console.log("Leave JS == Leave "+JSON.stringify(leave));
							var addqry = query.getAddLeaveQry(leave);
                            console.log("Inside Leave DS:: => "+addqry);
							executeQuery(addqry,function(err,results){
                            console.log("Inside Leave DS, ** Callback ** :: => "+JSON.stringify(results));

								callback(err,results);
							});
						},
		updateLeave : function(leave,callback){
							var updateqry = query.getUpdateLeaveQry(leave);
							executeQuery( updateqry,function(err,results){
								callback(err,results);
							});
						},
		deleteLeave : function(leave,callback){
							var deleteqry = query.getDeleteLeaveQry(leave);
							executeQuery(deleteqry,function(err,results){
								callback(err,results);
							});
						}
}	
var wrapDate = function(num){
			return num < 10 ? "0" + num : ""+num;
}										
