$(document).ready(function(){


	/* Script for menu items on Portfolio template page */

	$("#hrefMarkAttendance").click(function(){

		$("#contents").load("Attendance.html",function(responseTxt,statusTxt,xhr){

				if(statusTxt == "success"){
								//alert("External content loaded successfully");
								//alert(responseTxt);
				}
				if(statusTxt == "error"){
					alert("Error :" + xhr.status + ": " + xhr.statusText);

				}

			});



	});



		$("#hrefUpdateLeave").click(function(){

			$("#contents").load("Leave.html",function(responseTxt,statusTxt,xhr){

					if(statusTxt == "success"){
									//alert("External content loaded successfully");
									//alert(responseTxt);
					}
					if(statusTxt == "error"){
						alert("Error :" + xhr.status + ": " + xhr.statusText);

					}

				});



		});

	$("#hrefAddEmployee").click(function(){

		$("#contents").load("Employee.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				//alert("External content loaded successfully");
				//alert(responseTxt);
			}
			if(statusTxt == "error"){
				alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});
	});

	$("#hrefAddDepartment").click(function(){

		$("#contents").load("Department.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				//alert("External content loaded successfully");
				//alert(responseTxt);
			}
			if(statusTxt == "error"){
				alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});



	});

	$("#hrefAddShift").click(function(){

		$("#contents").load("Shift.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				//alert("External content loaded successfully");
				//alert(responseTxt);
			}
			if(statusTxt == "error"){
				alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});



	});

	$("#hrefListProjectDetails").click(function(){

		$("#contents").load("ListProjectDetails.html",function(responseTxt,statusTxt,xhr){

				if(statusTxt == "success"){
								//alert("External content loaded successfully");
								//alert(responseTxt);
				}
				if(statusTxt == "error"){
					alert("Error :" + xhr.status + ": " + xhr.statusText);

				}

			});



	});

//Add project function

	$("#contents").on("click","#btnAddEmp",function(){

		var url = "/attendance/employee/";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
		//alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding employee!!!"+ err);
				}
		});


		//alert("After the call");

	});

	$("#contents").on("click","#btnUpdateEmp",function(){

		var url = "/attendance/employee/";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating employee!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteEmp",function(){

		var url = "/attendance/employee/";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
		//alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting employee!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetEmp",function(){

		var url = "/attendance/employee/GET";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					var emps = JSON.parse(json);
					//alert(emps);
					$("#txtEmployeeId").val(emps.EmployeeId);
					$("#txtEmployeename").val(emps.EmployeeName);
					$("#txtDepartmentId").val(emps.DepartmentId);
					$("#txtDateofjoin").val(emps.DateOfJoin);
					$("#txtDesignation").val(emps.Designation);

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting employee!!!"+ err);
				}
		});



		//alert("After the call");

	});

/************************************************/

	$("#contents").on("click","#btnAddDept",function(){

		var url = "/attendance/department/";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentName").val();
		dep.ManagerId = $("#txtManagerId").val();


		var jsonStr = JSON.stringify(dep);
		//alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding Department!!!"+ err);
				}
		});


		//alert("After the call");

	});

	$("#contents").on("click","#btnUpdateDept",function(){

		var url = "/attendance/department/";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentname").val();
		dep.ManagerId = $("#txtManagerId").val();
		

		var jsonStr = JSON.stringify(dep);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating Department!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteDept",function(){

		var url = "/attendance/department/";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentname").val();
		dep.ManagerId = $("#txtManagerId").val();
		

		var jsonStr = JSON.stringify(dep);
		//alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting Department!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetDept",function(){

		var url = "/attendance/department/GET";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentname").val();
		dep.ManagerId = $("#txtManagerId").val();
		
		var jsonStr = JSON.stringify(dep);
		alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					alert(json);
					var deps = JSON.parse(json);
					$("#txtDepartmentId").val(deps.DepartmentId);
					$("#txtDepartmentname").val(deps.DepartmentName);
					$("#txtManagerId").val(deps.DepartmentId);
					
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting Department!!!"+ err);
				}
		});



		//alert("After the call");

	});
$("#contents").on("click","#btnAddLeave",function(){

		var url = "/attendance/Leave/";
		var lev = {};
		lev.LeaveId = $("#txtLeaveId").val();
		lev.EmployeeId = $("#txtEmployeeId").val();
		lev.FromDate = $("#txtFromDate").val();
		lev.ToDate = $("#txtToDate").val();
		lev.Reason = $("#txtReason").val();
		lev.Comments = $("#txtComments").val();
		lev.Approved = $("#txtApproved").val();



		var jsonStr = JSON.stringify(lev);
		//alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding Leave!!!"+ err);
				}
		});


		//alert("After the call");

	});

	$("#contents").on("click","#btnUpdateLeave",function(){

		var url = "/attendance/Leave/";
		var lev = {};
		lev.LeaveId = $("#txtLeaveId").val();
		lev.EmployeeId = $("#txtEmployeeId").val();
		lev.FromDate = $("#txtFromDate").val();
		lev.ToDate = $("#txtToDate").val();
		lev.Reason = $("#txtReason").val();
		lev.Comments = $("#txtComments").val();
		lev.Approved = $("#txtApproved").val();

		var jsonStr = JSON.stringify(lev);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating Leave!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteLeave",function(){

		var url = "/attendance/Leave/";
		var lev = {};
		lev.LeaveId = $("#txtLeaveId").val();
		lev.EmployeeId = $("#txtEmployeeId").val();
		lev.FromDate = $("#txtFromDate").val();
		lev.ToDate = $("#txtToDate").val();
		lev.Reason = $("#txtReason").val();
		lev.Comments = $("#txtComments").val();
		lev.Approved = $("#txtApproved").val();


		var jsonStr = JSON.stringify(lev);
		//alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting Leave!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetLeave",function(){

        var url = "/attendance/Leave/GET";
        var lev = {};
		lev.LeaveId = $("#txtLeaveId").val();
		lev.EmployeeId = $("#txtEmployeeId").val();
		lev.FromDate = $("#txtFromDate").val();
		lev.ToDate = $("#txtToDate").val();
		lev.Reason = $("#txtReason").val();
		lev.comments = $("#txtcomments").val();
		lev.Approved = $("#txtApproved").val();

		var jsonStr = JSON.stringify(lev);
		alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					alert(json);
					var levs = JSON.parse(json);
					$("#txtLeaveId").val(levs.LeaveId);
					$("#txtEmployeeId").val(levs.EmployeeId);
					$("#txtFromDate").val(levs.Fromdate);
					$("#txtToDate").val(levs.Todate);
					$("#txtReason").val(levs.Reason);
					$("#txtComments").val(levs.Comments);
					$("#txtApproved").val(levs.Approved);

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting Leave!!!"+ err);
				}
		});



		//alert("After the call");

	});
$("#contents").on("click","#btnAddShift",function(){

		var url = "/attendance/Shift/";
		var shf = {};
		shf.ShiftId = $("#txtShiftId").val();
		shf.EmployeeId = $("#txtEmployeeId").val();
		shf.FromTime = $("#txtFromTime").val();
		shf.ToTime = $("#txtToTime").val();
		shf.Comments = $("#txtComments").val();
		



		var jsonStr = JSON.stringify(shf);
		//alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding Shift!!!"+ err);
				}
		});


		//alert("After the call");

	});

	$("#contents").on("click","#btnUpdateShift",function(){

		var url = "/attendance/Shift/";
		var shf = {};
		shf.ShiftId = $("#txtShiftId").val();
		shf.EmployeeId = $("#txtEmployeeId").val();
		shf.FromTime = $("#txtFromTime").val();
		shf.ToTime = $("#txtToTime").val();
		shf.Comments = $("#txtComments").val();
		

		var jsonStr = JSON.stringify(shf);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating Shift!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteShift",function(){

		var url = "/attendance/Shift/";
		var shf = {};
		shf.ShiftId = $("#txtShiftId").val();
		shf.EmployeeId = $("#txtEmployeeId").val();
		shf.FromTime = $("#txtFromTime").val();
		shf.ToTime = $("#txtToTime").val();
		shf.Comments = $("#txtComments").val();
		


		var jsonStr = JSON.stringify(shf);
		//alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting Shift!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetShift",function(){

        var url = "/attendance/Shift/GET";
        var shf = {};
		shf.ShiftId = $("#txtShiftId").val();
		shf.EmployeeId = $("#txtEmployeeId").val();
		shf.FromTime = $("#txtFromTime").val();
		shf.ToTime = $("#txtToTime").val();
		shf.Comments = $("#txtComments").val();
		

		var jsonStr = JSON.stringify(shf);
		alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					alert(json);
					var shfs = JSON.parse(json);
					$("#txtShiftId").val(shfs.ShiftId);
					$("#txtEmployeeId").val(shfs.EmployeeId);
					$("#txtFromTime").val(shfs.FromTime);
					$("#txtToTime").val(shfs.ToTime);
					$("#txtComments").val(shfs.Comments);
					

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting Shift!!!"+ err);
				}
		});



		//alert("After the call");

	});
$("#contents").on("click","#btnAddShiftAlloc",function(){

		var url = "/attendance/ShiftAlloc/";
		var shft = {};
		shft.EmployeeId = $("#txtEmployeeId").val();
		shft.ShiftId = $("#txtShiftId").val();
		shft.FromDate = $("#txtFromDate").val();
		shft.ToDate = $("#txtToDate").val();
		



		var jsonStr = JSON.stringify(shft);
		//alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding ShiftAllocation!!!"+ err);
				}
		});


		//alert("After the call");

	});

	$("#contents").on("click","#btnUpdateShiftAlloc",function(){

		var url = "/attendance/ShiftAlloc/";
		var shft = {};
		shft.EmployeeId = $("#txtEmployeeId").val();
		shft.ShiftId = $("#txtShiftId").val();
		shft.FromDate = $("#txtFromDate").val();
		shft.ToDate = $("#txtToDate").val();
		

		var jsonStr = JSON.stringify(shft);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating ShiftAllocation!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteShiftAlloc",function(){

		var url = "/attendance/ShiftAlloc/";
		var shft = {};
		shft.EmployeeId = $("#txtEmployeeId").val();
		shft.ShiftId = $("#txtShiftId").val();
		shft.FromDate = $("#txtFromDate").val();
		shft.ToDate = $("#txtToDate").val();
		


		var jsonStr = JSON.stringify(shft);
		//alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting ShiftAllocation!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetShift",function(){

        var url = "/attendance/ShiftAlloc/GET";
        var shft = {};
		shft.EmployeeId = $("#txtEmployeeId").val();
		shft.ShiftId = $("#txtShiftId").val();
		shft.FromDate = $("#txtFromDate").val();
		shft.ToDate = $("#txtToDate").val();
		

		var jsonStr = JSON.stringify(shft);
		alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					alert(json);
					var shfts = JSON.parse(json);
					$("#txtEmployeeId").val(shfts.EmployeeId);
					$("#txtShiftId").val(shfts.ShiftId);
					$("#txtFromDate").val(shfts.FromDate);
					$("txtToDate").val(shfts.ToDate);
					
					

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting ShiftAllocation!!!"+ err);
				}
		});



		//alert("After the call");

	});