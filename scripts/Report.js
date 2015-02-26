var reportDS = require('./ReportDS');

module.exports={

	getAttReportByDate : function(res,jsonStr){
							console.log("JSON STRING =>"+jsonStr);
							var report = JSON.parse(jsonStr);
							reportDS.getAttReportByDate(report,function(err,results){
								if(err){
									res.writeHead(200, {'content-type': 'text/plain'});
									res.end("Unable to get report info!!! - "+err.detail);
								}
								console.log("=>Got report information from DB!!!"+JSON.stringify(results));
								res.end(JSON.stringify(results));
							});
						},
	getAttReportByMonth : function(res,jsonStr){
							console.log("JSON STRING =>"+jsonStr);
							var report = JSON.parse(jsonStr);
							reportDS.getAttReportByMonth(report,function(err,results){
								if(err){
									res.writeHead(200, {'content-type': 'text/plain'});
									res.end("Unable to get report info!!! - "+err.detail);
								}
								console.log("=>Got report information from DB!!!"+JSON.stringify(results));
								res.end(JSON.stringify(results));
							});
						},
						
	addEmployee : function(res,jsonStr,callback){
						var employee = JSON.parse(jsonStr);
						empDs.addEmployee(employee,function(err,results){
							if(err){
								console.log(err);
								res.writeHead(200, {'content-type': 'text/plain'});
								res.end("Unable to add employee record!!! - "+err);
							}
							console.log("=>Employee record added successfully!!!");
							var response ="Employee record added successfully!!!";
							
							
							res.writeHead(200, {'content-type': 'text/plain'});
							res.end("Employee record added successfully!!!");
							//callback(response);
						});
					}
}