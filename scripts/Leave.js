var leaveDs = require('./LeaveDS');

module.exports={

	getAllLeaves : function(res){
							//var Leave = JSON.parse(jsonStr);
							leaveDs.getAllLeaves(function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get all  Leaves!!!");
								}
								console.log("=>Got Leave information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	getLeaveById : function(res,jsonStr){
							var Leave = JSON.parse(jsonStr);
							leaveDs.getLeaveById(Leave,function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get  Leave info!!!");
								}
								console.log("=>Got leave information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	addLeave : function(res,jsonStr){
						var Leave = JSON.parse(jsonStr);
						leaveDs.addLeave(Leave,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to add Leave record!!!");
							}
							console.log("=>Leave record added successfully!!!");
							res.end("Leave record added successfully!!!");
						});
					},
	updateLeave : function(res,jsonStr){
						var Leave = JSON.parse(jsonStr);
						leaveDs.updateLeave(Leave,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to update Leave record!!!");
							}
							console.log("=>Leave record updated successfully!!!");
							res.end("Leave record updated successfully!!!");
						});
					},
	deleteLeave : function(res,jsonStr){
						var Leave = JSON.parse(jsonStr);
						leaveDs.deleteLeave(Leave,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to delete Leave record!!!");
							}
							console.log("=>Leave record deleted successfully!!!");
							res.end("Leave record deleted successfully!!!");
						});
					}

		
}