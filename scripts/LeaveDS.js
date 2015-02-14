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
                                                        if(err){
								callback(err,results);
							}
                                                        var obj = results.rows[0];
								if(obj){
									var lev = {};
									lev.LeaveId = obj.levid;
									lev.EmployeeId = obj.empid;
									var date = new Date(obj.from date);
									lev.from date = date.getFullYear()+"-"+wrapDate(date.getMonth() + 1)+"-"+wrapDate(date.getDate());
                                                                        var date1 = new Date(obj .to date);
                                                                        lev.to date = date.getFullYear()+"-"+wrapDate(date.getMonth() + 1)+"-"+wrapDate(date.getDate());
									lev.reason = obj.reason;
                                                                        lev.comments =obj.comments;
                                                                        lev.approved=obj.approved
									results.rows = lev;
								}
								callback(err,results);

							});
						},                      
						},
		addLeave : function(leave,callback){
							var qry = query.getAddLeaveQry(leave);
                                                        console.log("Inside Leave DS:: => "+addQry);
							executeQuery(addqry,function(err,results){
                                                        console.log("Inside Leave DS, ** Callback ** :: => "+JSON.stringify(results));

								callback(err,results);
							});
						},
		updateLeave : function(leave,callback){
							var qry = query.getUpdateLeaveQry(leave);
							executeQuery( updateqry,function(err,results){
								callback(err,results);
							});
						},
		deleteLeave : function(leave,callback){
							var qry = query.getDeleteLeaveQry(leave);
							executeQuery(deleteqry,function(err,results){
								callback(err,results);
							});
						}	
var wrapDate = function(num){
			return num < 10 ? "0" + num : ""+num;
}										
}