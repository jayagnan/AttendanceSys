var shtDs = require('./ShiftDS');

module.exports={

	getAllShifts : function(res){
							//var shift = JSON.parse(jsonStr);
							shtDs.getAllShifts(function(err,results){
								if(err){
									console.log(err);
									res.write("Unable to get all shift!!!");
								}
								console.log("=>Got shift information from DB!!!"+JSON.stringify(results.rows));
								res.write(JSON.stringify(results.rows));
							});
						},
	getShiftById : function(res,jsonStr){
							var shift = JSON.parse(jsonStr);
							shtDs.getShiftById(shift,function(err,results){
								if(err){
									console.log(err);
									res.write("Unable to get shift info!!!");
								}
								console.log("=>Got shift information from DB!!!"+JSON.stringify(results.rows));
								res.write(JSON.stringify(results.rows));
							});
						},
	addShift : function(res,jsonStr){
						var shift = JSON.parse(jsonStr);
						shtDs.addShift(shift,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to add Shift record!!!");
							}
							console.log("=>Shift record added successfully!!!");
							res.write("Shift record added successfully!!!");
						});
					},
	updateShift : function(res,jsonStr){
						var Shift = JSON.parse(jsonStr);
						shtDs.updateShift(Shift,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to update Shift record!!!");
							}
							console.log("=>Shift record updated successfully!!!");
							res.write("Shift record updated successfully!!!");
						});
					},
	deleteShift : function(res,jsonStr){
						var Shift = JSON.parse(jsonStr);
						shtDs.deleteShift(Shift,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to delete Shift record!!!");
							}
							console.log("=>Shift record deleted successfully!!!");
							res.write("Shift record deleted successfully!!!");
						});
					}

		
}