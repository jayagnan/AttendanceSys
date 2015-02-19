var shfDs = require('./ShiftAllocDS');

module.exports={

	getAllShiftAllocation : function(res){
							//var shiftAlloc = JSON.parse(jsonStr);
							shfDs.getAllShiftAllocation(function(err,results){
								if(err){
									console.log(err);
									res.write("Unable to get all ShiftAllocation!!!");
								}
								console.log("=>Got ShiftAllocation information from DB!!!"+JSON.stringify(results.rows));
								res.write(JSON.stringify(results.rows));
							});
						},
	getShiftAllocationById : function(res,jsonStr){
							var ShiftAlloc = JSON.parse(jsonStr);
							shfDs.getShiftAllocationById(ShiftAllocation,function(err,results){
								if(err){
									console.log(err);
									res.write("Unable to get ShiftAllocation info!!!");
								}
								console.log("=>Got ShiftAllocation information from DB!!!"+JSON.stringify(results.rows));
								res.write(JSON.stringify(results.rows));
							});
						},
	addShiftAllocation : function(res,jsonStr){
						var ShiftAlloc = JSON.parse(jsonStr);
						shfDs.addShiftAllocation(ShiftAllocation,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to add ShiftAllocation record!!!");
							}
							console.log("=>ShiftAllocation record added successfully!!!");
							res.write("ShiftAllocation record added successfully!!!");
						});
					},
	updateShiftAllocation : function(res,jsonStr){
						var ShiftAlloc = JSON.parse(jsonStr);
						shfDs.updateShiftAllocation(ShiftAllocation,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to update ShiftAllocation record!!!");
							}
							console.log("=>ShiftAllocation record updated successfully!!!");
							res.write("ShiftAllocation record updated successfully!!!");
						});
					},
	deleteShiftAllocation : function(res,jsonStr){
						var ShiftAlloc = JSON.parse(jsonStr);
						shfDs.deleteShiftAllocation(ShiftAllocation,function(err,res){
							if(err){
								console.log(err);
								res.write("Unable to delete ShiftAllocation record!!!");
							}
							console.log("=>ShiftAllocation record deleted successfully!!!");
							res.write("ShiftAllocation record deleted successfully!!!");
						});
					},
	getShiftAllocationForDept : function(res,jsonStr){
				console.log("Shift allocation "+jsonStr);
							var shiftAlloc = JSON.parse(jsonStr);
							shfDs.getShiftAllocationForDept(shiftAlloc,function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get all ShiftAllocation!!!");
								}
								console.log("=>Got ShiftAllocation information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},				

		
}