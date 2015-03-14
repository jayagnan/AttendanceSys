var attDS = require('./AttendanceDS');
var passhash = require('password-hash');

module.exports={

	getAllEmployees : function(res){
							//var employee = JSON.parse(jsonStr);
							empDs.getAllEmployees(function(err,results){
								if(err){
									res.writeHead(200, {'content-type': 'text/plain'});
									res.end("Unable to get employee records!!! - "+err.detail);
								}
								console.log("=>Got employee information from DB!!!"+JSON.stringify(results.rows));
								res.write(JSON.stringify(results.rows));
							});
						},
	getEmployeeById : function(res,jsonStr){
							console.log("JSON STRING =>"+jsonStr);
							var employee = JSON.parse(jsonStr);
							empDs.getEmployeeById(employee,function(err,results){
								if(err){
									res.writeHead(200, {'content-type': 'text/plain'});
									res.end("Unable to get employee info!!! - "+err.detail);
								}
								console.log("=>Got employee information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
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
					},
	updateEmployee : function(res,jsonStr){
						var employee = JSON.parse(jsonStr);
						empDs.updateEmployee(employee,function(err,results){
							if(err){
								res.writeHead(200, {'content-type': 'text/plain'});
								res.end("Unable to update employee record!!! - "+err.detail);
							}
							console.log("=>Employee record updated successfully!!!");
							res.end("Employee record updated successfully!!!");
						});
					},
	deleteEmployee : function(res,jsonStr){
						var employee = JSON.parse(jsonStr);
						empDs.deleteEmployee(employee,function(err,results){
							if(err){
								res.writeHead(200, {'content-type': 'text/plain'});
								res.end("Unable to delete employee record!!! - "+err.detail);
							}
							console.log("=>Employee record deleted successfully!!!");
							res.end("Employee record deleted successfully!!!");
						});
					},
	getAttendanceByDate : function(res,jsonStr){
							var att = JSON.parse(jsonStr);
							attDS.getAttendanceByDate(att,function(err,results){
								if(err){
									console.log("Error :: "+JSON.stringify(err));
									res.writeHead(200, {'content-type': 'text/plain'});
									res.end("Unable to get attendance records!!! - "+err.detail);
								}
								else{
									if(results.hasOwnProperty("rows")){
										res.end(JSON.stringify(results.rows));
									}
									else
									{
										res.end("");
									}
								}
							});
						},
	markAttendance: function(res,jsonStr){
						var attList = JSON.parse(jsonStr);
						attDS.markAttendance(attList,function(err,results){

							if(err){
									console.log("Error :: "+JSON.stringify(err));
									res.writeHead(200, {'content-type': 'text/plain'});
									res.end("Unable to mark attendance !!! - "+err.detail);
							} 
							else{
									res.end(JSON.stringify(results));
							}

						});

					},
	addAccount: 	function(res,jsonStr){

					/*
					Incoming JSON
					user = {userid,password,accounttype}
					*/
						var user = JSON.parse(jsonStr);
						var options = {};
						options.algorithm = 'sha512';
						options.saltLength = 10;
						options.iterations = 1;

						var hashedpass = passhash.generate(user.password,options);
						user.hashedpass = hashedpass;
						var arrPass = hashedpass.split("$");
						user.salt = arrPass[1];

						console.log("attendance js => "+ JSON.stringify(user));

						attDS.addAccount(user,function(err,results){
							if(err){
								console.log("Error :: "+JSON.stringify(err));
								res.writeHead(200, {'content-type': 'text/plain'});
								res.end("Unable to add account !!! - "+err.detail);
							}
							else{
								res.end("Added account successfully");
							}

						});
	},
	validateUser :	function(res,jsonStr)	{
							var user = JSON.parse(jsonStr);
							attDS.getUserIdAndPasshash(user,function(err,results){
								if(err){
									console.log("Error :: "+JSON.stringify(err));
									res.writeHead(200, {'content-type': 'text/plain'});
									res.end("Unable to get account !!! - "+err.detail);
								}
								else{
									var dbuser = results.rows[0];
									console.log(JSON.stringify(dbuser));
									console.log("pass "+user.password);
									console.log("dbuser "+dbuser.hashedpass);
									var hasPermission = passhash.verify(user.password,dbuser.passhash);
									if(hasPermission){
										if(dbuser.acctype && user.acctype === dbuser.acctype){
											console.log("User id and pass validated successfully");
											var approval = {};
											approval.approved = 1;
											approval.acctype = dbuser.acctype;
											res.end(JSON.stringify(approval));
										} else {
											console.log("User id and pass failed validation");
											var approval = {};
											approval.approved = 0;
											approval.acctype = "User Id and Password not valid for acctype";
											res.end(JSON.stringify(approval));
										}
									} else{
										console.log("User id and pass failed validation2");
											var approval = {};
											approval.approved = 0;
											approval.acctype = "User Id and Password not valid for acctype";
											res.end(JSON.stringify(approval));
									}
									
								}

							});	
	}			

		
}