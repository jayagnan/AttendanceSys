var shfDs = require('./ShiftAllocDS');

module.exports={

	getAllShiftAllocation : function(res){
							var shiftAlloc = JSON.parse(jsonStr);
							shfDs.getAllShiftAlloc(function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get all ShiftAllocation!!!");
								}
								console.log("=>Got ShiftAllocation information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	getShiftAllocationById : function(res,jsonStr){
							var ShiftAlloc = JSON.parse(jsonStr);
							shfDs.getShiftAllocationById(ShiftAlloc,function(err,results){
								if(err){
									console.log(err);
									res.end("Unable to get ShiftAllocation info!!!");
								}
								console.log("=>Got ShiftAllocation information from DB!!!"+JSON.stringify(results.rows));
								res.end(JSON.stringify(results.rows));
							});
						},
	addShiftAllocation : function(res,jsonStr){
						var ShiftAlloc = JSON.parse(jsonStr);
						console.log("Inside ShiftAllocjs ShiftAlloc PUT  data => "+ShiftAlloc);
						shfDs.addShiftAllocation(ShiftAlloc,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to add ShiftAllocation record!!!");
							}
							console.log("=>ShiftAllocation record added successfully!!!");
							res.end("ShiftAllocation record added successfully!!!");
						});
					},
	updateShiftAllocation : function(res,jsonStr){
						var ShiftAlloc = JSON.parse(jsonStr);
						shfDs.updateShiftAllocation(ShiftAlloc,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to update ShiftAllocation record!!!");
							}
							console.log("=>ShiftAllocation record updated successfully!!!");
							res.end("ShiftAllocation record updated successfully!!!");
						});
					},
	deleteShiftAllocation : function(res,jsonStr){
						var ShiftAlloc = JSON.parse(jsonStr);
						shfDs.deleteShiftAllocation(ShiftAlloc,function(err,results){
							if(err){
								console.log(err);
								res.end("Unable to delete ShiftAllocation record!!!");
							}
							console.log("=>ShiftAllocation record deleted successfully!!!");
							res.end("ShiftAllocation record deleted successfully!!!");
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