var levDs = require('./LeaveDS');

module.exports={

	getAllLeaves : function(res){
							//var Leave = JSON.parse(jsonStr);
							levDs.getAllLeaves(function(err,results){
								if(err){
									console.log(err);
									res.write("Unable to get all  Leaves!!!");
								}
								console.log("=>Got Leave information from DB!!!"+JSON.stringify(results.rows));
								res.write(JSON.stringify(results.rows));
							});
						},
	getLeaveById : function(res,jsonStr){
							var Leave = JSON.parse(jsonStr);
							levDs.getLeaveById(Leave,function(err,results){
								if(err){
									console.log(err);
									res.write("Unable to get  Leave info!!!");
								}
								console.log("=>Got leave information from DB!!!"+JSON.stringify(results.rows));
								res.write(JSON.stringify(results.rows));
							});
						},
	addLeave : function(res,jsonStr){
						var Leave = JSON.parse(jsonStr);
						levDs.addLeave(Leave,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to add Leave record!!!");
							}
							console.log("=>Leave record added successfully!!!");
							res.write("Leave record added successfully!!!");
						});
					},
	updateLeave : function(res,jsonStr){
						var Leave = JSON.parse(jsonStr);
						levDs.updateLeave(Leave,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to update Leave record!!!");
							}
							console.log("=>Leave record updated successfully!!!");
							res.write("Leave record updated successfully!!!");
						});
					},
	deleteLeave : function(res,jsonStr){
						var Leave = JSON.parse(jsonStr);
						levDs.deleteLeave(Leave,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to delete Leave record!!!");
							}
							console.log("=>Leave record deleted successfully!!!");
							res.write("Leave record deleted successfully!!!");
						});
					}

		
}