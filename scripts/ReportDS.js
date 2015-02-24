var executeQuery = require('./executeQuery')
var query = require('./query')

module.exports={

		getAttReportByDate:function(report,callback){
							var qry = query.getAttReportByDateQry(report);
							console.log("Query "+qry);
							var weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
							executeQuery(qry,function(err,results){
								if(err){
									
									callback(err,results);

								} else {
									console.log("Data from database =>"+JSON.stringify(results.rows));
									attList = results.rows;
									attReportList = [];
									var dayCount = 0;

									for(var i=0; i<attList.length; i++){

										if (dayCount === attList[i].day){
											switch(attList[i].attendance){
												case "PRESENT": attReport.NoOfEmployeesPresent = attList[i].count; break;
												case "ABSENT": attReport.NoOfEmployeesAbsent = attList[i].count; break;
												case "LEAVE": attReport.NoOfEmployeesLeave = attList[i].count; break;
											}

										} else{
											dayCount = attList[i].day;
											var attReport = {};
											attReport.NoOfEmployeesPresent = 0;
											attReport.NoOfEmployeesAbsent = 0;
											attReport.NoOfEmployeesLeave = 0;

											switch(attList[i].attendance){
												case "PRESENT": attReport.NoOfEmployeesPresent = attList[i].count; break;
												case "ABSENT": attReport.NoOfEmployeesAbsent = attList[i].count; break;
												case "LEAVE": attReport.NoOfEmployeesLeave = attList[i].count; break;
											}

											console.log("UTC string => "+(new Date(attList[i].date)).toUTCString());
											attReport.date = (new Date(attList[i].date)+1);
											attReport.dayOfDate = attList[i].day;
											attReport.weekday = weekdays[(new Date(attList[i].date)).getDay()];
											attReportList.push(attReport);
										}

									}	

								}
							callback(null,attReportList);
							});
						}
}
