var shtDs = require('./ShiftDS');

module.exports={

	getAllShifts : function(res){
							//var shift = JSON.parse(jsonStr);
							shtDs.getAllShifts(function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get all shift!!!");
								}
								console.log("=>Got shift information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	getShiftById : function(res,jsonStr){
		                    console.log("JSON STRING =>"+jsonStr);
							var shift = JSON.parse(jsonStr);
							shtDs.getShiftById(shift,function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get shift info!!!");
								}
								console.log("=>Got shift information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	addShift : function(res,jsonStr){
						var shift = JSON.parse(jsonStr);
						console.log("Inside shiftjs shift PUT  data => "+shift);
						shtDs.addShift(shift,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to add Shift record!!!");
							}
							console.log("=>Shift record added successfully!!!");
							res.end("Shift record added successfully!!!");
						});
					},
	updateShift : function(res,jsonStr){
						var Shift = JSON.parse(jsonStr);
						shtDs.updateShift(Shift,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to update Shift record!!!");
							}
							console.log("=>Shift record updated successfully!!!");
							res.end("Shift record updated successfully!!!");
						});
					},
	deleteShift : function(res,jsonStr){
						var Shift = JSON.parse(jsonStr);
						shtDs.deleteShift(Shift,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to delete Shift record!!!");
							}
							console.log("=>Shift record deleted successfully!!!");
							res.end("Shift record deleted successfully!!!");
						});
					}

		
}