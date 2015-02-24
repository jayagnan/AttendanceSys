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
						},
		markAttendance:	function(attList,callback){

						var insertCount = 0;
						var updateCount = 0;

							for(var i=0; i<attList.length; i++){

								//Insert record first
								try{
									var insertQry = query.getAddAttendanceQry(attList[i]);
									
									
									executeQuery(insertQry,function(err,results,j){
										
										if(err){ // If insert operation results in an error then do an update
											var updateQry = query.getUpdateAttendanceQry(attList[j]);
											executeQuery(updateQry,function(err,results){

												updateCount++;
												if((insertCount+updateCount) === attList.length){
													callback(null,"Attendance Updated");
												}
											});
										}else{
											insertCount++;
											if((insertCount+updateCount) === attList.length){
												callback(null,"Attendance Updated");
											}
										}
										
									},i);

								}
								catch(excep){
										callback(excep,"Unable to mark Attendance");
								}

							}

						}			
					}